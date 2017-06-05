
function css_compile(tree, delim, cb) // Example: css_compile(css_parse(text), '\n');
{
	delim = delim || '';
	
	function visit(nodes)
	{
		for(var buf = '', i = 0; i < nodes.length; i++)
		{
			var n = nodes[i]; if(cb) cb(n);

			var txt = this[n.type](n);
			
			buf += txt; if(txt.length && n.selectors) buf += delim;
		}
		
		return buf;
	}//___________________________________________________________________________

	this.comment         = function(node){ return ''; };
	this.import          = function(node){ return '@import '       + node.import + ';'; };
	this.charset         = function(node){ return '@charset '      + node.name   + ';'; };
	this.namespace       = function(node){ return '@namespace '    + node.name   + ';'; };
	this['custom-media'] = function(node){ return '@custom-media ' + node.name   + ' ' + node.media + ';'; };
	this.media           = function(node){ return '@media '        + node.media  + '{' + visit(node.rules) + '}'; };
	this.supports        = function(node){ return '@supports '     + node.name   + '{' + visit(node.rules) + '}'; };
	this['font-face']    = function(node){ return '@font-face'                   + '{' + visit(node.declarations) + '}'; };
	this.host            = function(node){ return '@host'                        + '{' + visit(node.rules) + '}'; };
	this.keyframes       = function(node){ return '@'      + (node.vendor || '') + 'keyframes ' + node.name           + '{' + visit(node.keyframes)    + '}'; };
	this.document        = function(node){ return '@'      + (node.vendor || '') + 'document '  + node.document       + '{' + visit(node.rules)        + '}'; };
	this.page            = function(node){ return '@page ' + (node.selectors.length ? node.selectors.join(', ') : '') + '{' + visit(node.declarations) + '}'; };
	this.declaration     = function(node){ return node.property + ':' + node.value + ';'; };
	this.keyframe        = function(node){ return node.values.join(',') + '{' + visit(node.declarations) + '}'; };
	this.rule            = function(node){ var decls = node.declarations; if(decls.length) return node.selectors.join(',') + '{' + visit(decls) + '}'; };

	return visit(tree.stylesheet.rules);
}

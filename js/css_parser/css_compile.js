
function css_compile(tree, delim, cb) // Example: css_compile(css_parse(text), '\n');
{
	delim = delim || '';
	
	function visit(nodes)
	{
		for(var buf = '', i = 0; i < nodes.length; i++)
		{
			var n = nodes[i]; if(cb) cb(n);

			var txt = this[n.type == 'document' ? 'at_document' : n.type](n);
			
			if(txt){ buf += txt; if(txt.length && n.selectors) buf += delim; }
		}
		
		return buf;
	}//___________________________________________________________________________

	this.comment         = function(node){ return ''; };
	this.import          = function(node){ return '@import '       + node.name   + ';'; };
	this.charset         = function(node){ return '@charset '      + node.name   + ';'; };
	this.namespace       = function(node){ return '@namespace '    + node.name   + ';'; };
	this['custom-media'] = function(node){ return '@custom-media ' + node.name   + ' ' + node.media + ';'; };
	this.media           = function(node){ var rulesText = visit(node.rules); if (rulesText)                      return '@media '        + node.media    + '{' + rulesText + '}'; };
	this.supports        = function(node){ var rulesText = visit(node.rules); if (rulesText)                      return '@supports '     + node.supports + '{' + rulesText + '}'; };
	this['font-face']    = function(node){ var declarationsText = visit(node.declarations); if (declarationsText) return '@font-face'                     + '{' + declarationsText + '}'; };
	this.host            = function(node){ var rulesText = visit(node.rules); if (rulesText)                      return '@host'                          + '{' + rulesText + '}'; };
	this.keyframes       = function(node){ var keyframesText = visit(node.keyframes); if (keyframesText)          return '@'      + (node.vendor || '')   + 'keyframes ' + node.name         + '{' + keyframesText    + '}'; };
	this.at_document     = function(node){ var rulesText = visit(node.rules); if (rulesText)                      return '@'      + (node.vendor || '')   + 'document '  + node.document     + '{' + rulesText        + '}'; };
	this.page            = function(node){ var declarationsText = visit(node.declarations); if (declarationsText) return '@page ' + (node.selectors.length ? node.selectors.join(', ') : '') + '{' + declarationsText + '}'; };
	this.declaration     = function(node){ var valueText = node.value; if (valueText)                             return node.property + ':' + valueText + ';'; };
	this.keyframe        = function(node){ var declarationsText = visit(node.declarations); if (declarationsText) return node.values.join(',') + '{' + declarationsText + '}'; };
	this.rule            = function(node){ var declsText = visit(node.declarations); if(declsText)                return node.selectors.join(',') + '{' + declsText + '}'; };

	return visit(tree.stylesheet.rules);
}

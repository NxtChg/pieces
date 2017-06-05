/*=============================================================================
  Created by NxtChg (admin@nxtchg.com), 2017. License: Public Domain.
=============================================================================*/

if(typeof(String.prototype.trim) !== 'function'){ String.prototype.trim = function(){ return this.replace(/^\s+|\s+$/g, ''); }; }
//________________________________________________________________________________

function css_parse(css, silent)
{
	var errors = [];
	
	function error(msg)
	{
		var err = new Error(msg + ' at "' + css.substr(0,100) + '..."');
		
		err.reason = msg; if(silent) errors.push(err); else throw err;
	}//___________________________________________________________________________

	function match(re){	var m = re.exec(css); if(m){ css = css.slice(m[0].length); return m; } } // match regexp and return captures
	//____________________________________________________________________________

	function whitespace(){ match(/^\s*/); }

	function  open(){ return match(/^{\s*/); } // opening brace
	function close(){ return match(/^}/);    } // closing brace

	function comment()
	{
		whitespace();
		
		if(css[0] != '/' || css[1] != '*') return;
		
		var i = 2; while(css[i] != '' && (css[i] != '*' || css[i+1] != '/')) i++;

		if(css[i+1] == '') return error('End of comment is missing');

		var str = css.slice(2,i); css = css.slice(i+2);
		
		return { type: 'comment', comment: str };
	}

	function comments(){ var c, cmnts = []; while(c = comment()){ cmnts.push(c); } return cmnts; }
	//____________________________________________________________________________

	function selector()
	{
		whitespace(); while(css[0] == '}'){ error('extra closing bracket'); css = css.slice(1); whitespace(); }

		var m = match(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);
				
		if(m) return m[0].trim() // remove all comments from selectors
				.replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, '')
				.replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function(m){ return m.replace(/,/g, '\u200C'); })
				.split(/\s*(?![^(]*\)),\s*/)
				.map(function(s){ return s.replace(/\u200C/g, ','); });
	}//___________________________________________________________________________

	function declaration()
	{
		match(/^([;\s]*)+/); // ignore empty declarations + whitespace

		const comment_regexp = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

		var prop = match(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/); if(!prop) return;
		
		prop = prop[0].trim();
		
		if(!match(/^:\s*/)) return error("property missing ':'");
		
		var val = match(/^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/);
		
		var ret = { type: 'declaration', property: prop.replace(comment_regexp, ''), value: val ? val[0].replace(comment_regexp, '').trim() : '' };
		
		match(/^[;\s]*/);
		
		return ret;
	}

	function declarations()
	{
		if(!open()) return error("missing '{'");

		var d, decls = comments(); while(d = declaration()){ decls.push(d); decls = decls.concat(comments()); }

		if(!close()) return error("missing '}'");

		 return decls;
	}//___________________________________________________________________________

	function keyframe()
	{
		whitespace();
		
		var m, vals = []; while(m = match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/)){ vals.push(m[1]); match(/^,\s*/); }
	
		if(vals.length) return { type: 'keyframe', values: vals, declarations: declarations() };
	}

	function at_keyframes()
	{
		var m = match(/^@([-\w]+)?keyframes\s*/); if(!m) return;

		var vendor = m[1];
	
		var m = match(/^([-\w]+)\s*/); if(!m) return error("@keyframes missing name"); // identifier

		var name = m[1];
		
		if(!open()) return error("@keyframes missing '{'");
	
		var frame, frames = comments(); while(frame = keyframe()){ frames.push(frame); frames = frames.concat(comments()); }
	
		if(!close()) return error("@keyframes missing '}'");
	
		return { type: 'keyframes', name: name, vendor: vendor, keyframes: frames };
	}//___________________________________________________________________________

	function at_page    (){ var m = match(/^@page */);									if(m){ var sel = selector() || []; return { type: 'page', selectors: sel, declarations: declarations() }; } }
	function at_fontface(){ var m = match(/^@font-face\s*/);							if(m) return { type: 'font-face', declarations: declarations() }; }
	function at_supports(){ var m = match(/^@supports *([^{]+)/);						if(m) return { type: 'supports', supports: m[1].trim(), rules: rules() }; }
	function at_host    (){ var m = match(/^@host\s*/);									if(m) return { type: 'host', rules: rules() }; }
	function at_media   (){ var m = match(/^@media *([^{]+)/);							if(m) return { type: 'media', media: m[1].trim(), rules: rules() }; }
	function at_custom_m(){ var m = match(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);	if(m) return { type: 'custom-media', name: m[1].trim(), media:  m[2].trim() }; }
	function at_document(){ var m = match(/^@([-\w]+)?document *([^{]+)/);				if(m) return { type: 'document', document: m[2].trim(), vendor: m[1].trim(), rules: rules() }; }
	function at_x       (){ var m = match(/^@(import|charset|namespace)\s*([^;]+);/);	if(m) return { type: m[1], name: m[2].trim() }; }
	//____________________________________________________________________________

	function at_rule()
	{
		whitespace(); if(css[0] == '@') return at_keyframes() || at_supports() || at_host() || at_media() || at_custom_m() || at_page() || at_document() || at_fontface() || at_x();
	}//___________________________________________________________________________

	function rule()
	{
		var sel = selector(); if(!sel) return error('selector missing');
		
		return { type: 'rule', selectors: sel, declarations: declarations() };
	}//___________________________________________________________________________

	function rules(core)
	{
		if(!core && !open()) return error("missing '{'");
	
		var node, rules = comments();
	
		while(css.length && (core || css[0] != '}') && (node = (at_rule() || rule())))
		{
			rules.push(node); rules = rules.concat(comments());
		}

		if(!core && !close()) return error("missing '}'");

		return rules;
	}//___________________________________________________________________________

	return { type: 'stylesheet', stylesheet: { rules: rules(true), errors: errors } };
}

//=============================================================================

function css_compile(tree, delim, cb) // Example: css_compile(css_parse(text), '\n');
{
	delim = delim || '';
	
	function visit(nodes)
	{
		for(var buf = '', i = 0; i < nodes.length; i++)
		{
			var n = nodes[i]; if(cb) cb(n);

			var txt = this[n.type](n);
			
			if(txt){ buf += txt; if(txt.length && n.selectors) buf += delim; }
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

//=============================================================================

var VueCSS =
{
	install: function(vue, options)
	{
		var org_component_func = vue.component;

		vue.component = function(id, def)
		{
			if(def.style)
			{
				var s = document.createElement("style");
				
				s.id = id + '-css'; s.type = 'text/css';

				var css = def.style.replace(/<\/?style>/gi, '');

				var tree = css_parse(css, true);

				for(var i = 0; i < tree.stylesheet.errors.length; i++){ console.error('vue-css parsing error: ' + tree.stylesheet.errors[i].message); }

				var prefix = '.' + id;

				var out = css_compile(tree, '', function(node)
    	        {
    	        	if(node.selectors)
                    {
                    	var ns = node.selectors;

                    	for(var i = 0; i < ns.length; i++)
						{
							if(ns[i].indexOf(prefix) == 0 && ns[i].charCodeAt(prefix.length) < 33) continue;

							ns[i] = prefix + ' ' + ns[i];
						}
                    }
    	        });
                    	        
			 	s.innerText = out; // s.appendChild(document.createTextNode(out);
	
				document.getElementsByTagName('head')[0].appendChild(s);
			}

			org_component_func.call(vue, id, def);
		}
	}
};//___________________________________________________________________________

if(typeof(window) !== 'undefined' && window.Vue){ window.Vue.use(VueCSS); }
//_____________________________________________________________________________

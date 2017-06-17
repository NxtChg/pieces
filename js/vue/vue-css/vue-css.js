/*=============================================================================
  Created by NxtChg (admin@nxtchg.com), 2017. License: Public Domain.
=============================================================================*/

var VueCSS =
{
 install: function(vue, options)
 {
	var org_component_func = vue.component;

	vue.component = function(id, def)
	{
		if(def.style)
		{
			var css = def.style.replace(/<\/?style>/gi, '');

			var rule = '', pos = 0, level = 0, prefix = '.' + id;

			function fail(msg){ throw 'vue-css parsing error: ' + msg + ' at "' + css.slice(pos, pos+60) + '"...'; }
		
			var s = document.getElementById('vue-styles');

			if(!s){ s = document.createElement('style'); s.type = 'text/css'; s.id = 'vue-styles'; document.getElementsByTagName('head')[0].appendChild(s); }

			function read_until(delims)
			{
				var org = pos, c;
		
				while(c = css[pos++])
				{
					if(c == '\'' || c == '"')
			    	{
			    		var p = css.indexOf(c, pos); if(p != -1) pos = p+1; else fail("unterminated string");
			
						continue;
					}
		
					if(level == 0 && delims.indexOf(c) != -1) break;
					
					if(c == '{'){ level++; }
					if(c == '}'){ level--; if(level < 0) fail("extra }"); }
				}
		
				return css.slice(org, pos-1);
			}

			function add_sel(s)
			{
				s = s.replace(/^\s+|\s+$/g, '');
				
				if(s == '' || s[0] == '@' || rule[0] == '@' || s.indexOf(prefix) == 0){ rule += s; } else { rule += prefix + ' ' + s; }
			}

			while(pos < css.length)
			{
				var n = read_until(',;{'); add_sel(n + (css[pos-1] || ''));
		
				switch(css[pos-1])
				{
					//case ';': break;
					case ',': continue;
					case '{': rule += read_until('}')+'}'; break;
				}
		
				if(rule != ''){ console.log(s.sheet.insertRule(rule, s.sheet.cssRules.length), rule); rule = ''; }
			}
		}

		org_component_func.call(vue, id, def);
	}
 }
};//___________________________________________________________________________

if(window.Vue) window.Vue.use(VueCSS);
//_____________________________________________________________________________

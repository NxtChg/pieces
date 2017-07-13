/*=============================================================================
  Created by NxtChg (admin@nxtchg.com), 2017. License: Public Domain.
=============================================================================*/

var js = {}; // it all starts with a small first step

function defined(a){ return (a !== void 0 && a !== null); }

js.$ = function(id){ return document.getElementById(id); };

js.is_array = function(obj){ return (obj && obj.constructor === Array); };

js.cb = function(obj, fn){ return function(){ return fn.apply(obj, arguments); }; }; // bind 'this' and function together
//_____________________________________________________________________________

// neat way to convert a string into array: js.clone([], 'test')

js.clone = function(obj) // any additional arguments will be added to the clone
{
	if(obj === null || typeof(obj) !== 'object') return obj;
	
	var a = arguments, c = new obj.constructor();

	for(var i = 0; i < a.length; i++)
	{
		for(var k in a[i])
		{
			if(a[i].hasOwnProperty(k)) c[k] = js.clone(a[i][k]);
		}
	}
		
	return c;
};//___________________________________________________________________________

js.encode_utf8 = function(s){ return unescape(encodeURIComponent(s)); }; // JS str => utf-8
js.decode_utf8 = function(s){ return decodeURIComponent(escape  (s)); }; // utf-8  => JS str
//_____________________________________________________________________________

js.get_cookie = function(name)
{
	var arr = document.cookie.split(';');

	for(var i = 0; i < arr.length; i++)
	{
		var c = arr[i], p = -1; while(c.charCodeAt(++p) < 33);
		
		if(c.indexOf(name+'=', p) == p)
		{
			return decodeURIComponent(c.substr(p + name.length + 1));
		}
	}
};//___________________________________________________________________________

js.set_cookie = function(name, val, days, path) // (name, "", -1) to delete a cookie
{
	var enc = encodeURIComponent, v = enc(val);
	
	if(days)
	{
		var d = new Date(); d.setDate(d.getDate() + days);

		v += '; expires=' + d.toUTCString();
	}

	if(path) v += '; path=' + path;

	document.cookie = enc(name) + '=' + v; // + '; Secure'
};//___________________________________________________________________________

js.check_cookies = function()
{
	var n = 'testcookie';

	if(navigator.cookieEnabled)
	{
		js.set_cookie(n,1); if(js.get_cookie(n)){ js.set_cookie(n, '', -1); return true; }
	}
};//___________________________________________________________________________

js.debounce = function(fn, delay) // returns a function to add delay to fn; if called again sooner the delay is reset
{
	return function()
	{
		clearTimeout(this.timer);
		
		var self = this, args = arguments;

		this.timer = setTimeout(function(){ fn.apply(self, args); }, delay);
	};
};

js.throttle = function(fn, delay, immediate) // returns a function to add delay to fn; if called again sooner the call is ignored
{
	return function()
	{
		if(this.timer) return;

		var self = this, args = arguments;

		if(immediate) fn.apply(self, args);

		this.timer = setTimeout(function(){ self.timer = null; fn.apply(self, args); }, delay);
	};
};//___________________________________________________________________________

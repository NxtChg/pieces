/*=============================================================================
  Created by NxtChg (admin@nxtchg.com), 2017. License: Public Domain.
=============================================================================*/

var js = {}; // it all starts with a small first step

function defined(a){ return (a !== void 0 && a !== null); }

js.$ = function(id){ return document.getElementById(id); };

js.is_array = function(obj){ return (obj && obj.constructor === Array); };

js.cb = function(obj, fn){ return function(){ return fn.apply(obj, arguments); }; }; // bind 'this' and function together
//_____________________________________________________________________________

js.count = function(obj) // returns the number of elements in both arrays and objects
{
	var cnt = 0; if(exists(obj.length)) return obj.length;
	
	for(var p in obj){ if(obj.hasOwnProperty(p)) cnt++; }
	
	return cnt;
};//___________________________________________________________________________

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

js.round = function(n, precision, down) // fixes nasty JS rounding and behaves like PHP round()
{
	var neg = (n < 0), factor = Math.pow(10, precision);

	var t = Math.abs(n) * factor;

	t = (down ? Math.floor(t) : Math.round(t));

	return (neg ? -t : t) / factor;
};//___________________________________________________________________________

String.prototype.trim = String.prototype.trim || function(){ return this.replace(/(^\s+)|(\s+$)/g, ''); };
//_____________________________________________________________________________

window.escape = window.escape || function(s)
{
    return s.replace(/[^\w@\*\-\+\.\/]/g, function(c)
    {
    	c = '000' + c.charCodeAt(0).toString(16).toUpperCase(); return (c.length < 6 ? '%'+c.slice(-2) : '%u'+c.slice(-4));
    });
};//___________________________________________________________________________

window.unescape = window.unescape || function(s)
{
	return s.replace(/%u([\da-f]{4})|%([\da-f]{2})/gi, function(m,l,s){ return String.fromCharCode(parseInt(l||s, 16)); });
};//___________________________________________________________________________

Math.log2  = Math.log2  || function(x){ return Math.log(x) * Math.LOG2E;  };
Math.log10 = Math.log10 || function(x){ return Math.log(x) * Math.LOG10E; };
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

	js.set_cookie(n,1); // this is here on purpose, because of Chrome

	if(navigator.cookieEnabled)
	{
		if(js.get_cookie(n)){ js.set_cookie(n, '', -1); return true; }
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

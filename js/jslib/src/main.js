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

js.round = function(n, precision) // fixes nasty JS rounding and behaves like PHP round()
{
	var neg = (n < 0), factor = Math.pow(10, precision);

	var t = Math.round(Math.abs(n) * factor);

	return (neg ? -t : t) / factor;
};//___________________________________________________________________________

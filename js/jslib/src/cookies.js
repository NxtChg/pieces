
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


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

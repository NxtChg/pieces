
js.keys = function(obj) // returns all indexes in the object
{
	var ks = [];
	
	for(k in obj){ if(obj.hasOwnProperty(k)) ks.push(k); }
	
	return ks;
};//___________________________________________________________________________

js.assoc = function(arr, keys) // array + keys => object
{
	var obj = {};

	for(var i = 0; i < arr.length; i++){ obj[keys[i]] = arr[i]; }

	return obj;
};//___________________________________________________________________________


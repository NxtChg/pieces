
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

// Generate all prime numbers < limit.

js.gen_primes = function(limit) // limit must fit into a 32-bit integer
{
	var i, inc = 4, p = [2,3], L = limit >> 1; // we only need half of the array, since we don't need to check even numbers
	
	var bits = new Uint8Array(L);
	
	for(i = 0; i < L; i ++) bits[i] = 1; // this can be replaced by fill() if you don't care about old browsers
	
	for(i = 5; i < limit; i += inc)
	{
		if(bits[i>>1])
		{
			p.push(i); for(var j = i * i; j < limit; j += i){ if(j&1) bits[j>>1] = 0; }
		}
	
		inc = 6 - inc; // 2 and 3 produce {2, 4, 2, 4, ...} iteration pattern
	}

	return p;
};//___________________________________________________________________________

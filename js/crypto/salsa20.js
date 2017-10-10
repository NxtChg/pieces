/*=============================================================================
  Created by NxtChg (admin@nxtchg.com), 2017. License: Public Domain.
=============================================================================*/
/*
   'key' is 32 bytes, 'nonce' is 8 bytes. All parameters can be strings, Uint8Array's or regular JS arrays.
*/
function salsa20(msg, key, nonce)
{
	var i, m = msg, len = m.length, k = [], out = [], x = [16];

	function str2arr(s){ var t = []; for(var i = 0; i < s.length; i++){ t.push(s.charCodeAt(i) & 0xFF); } return t; }

	if(typeof(msg)   == 'string') m     = str2arr(msg);
	if(typeof(key)   == 'string') key   = str2arr(key);
	if(typeof(nonce) == 'string') nonce = str2arr(nonce);

	for(i = 0; i < 32; i += 4){ k.push((key[i] | (key[i+1] << 8) | (key[i+2] << 16) | (key[i+3] << 24)) >>> 0); }

	var state = [ 0x61707865, k[0], k[1], k[2], k[3], 0x3320646e, 0, 0, 0, 0, 0x79622d32, k[4], k[5], k[6], k[7], 0x6b206574 ];

	if(nonce.length >= 8)
	{
		state[6] = (nonce[0] | (nonce[1] << 8) | (nonce[2] << 16) | (nonce[3] << 24)) >>> 0;
		state[7] = (nonce[4] | (nonce[5] << 8) | (nonce[6] << 16) | (nonce[7] << 24)) >>> 0;
	}

	function STEP(a, b, c, d)
	{
	    var t = x[d] + x[c]; x[a] ^= (t <<  7) | (t >>> 25);
			t = x[a] + x[d]; x[b] ^= (t <<  9) | (t >>> 23);
			t = x[b] + x[a]; x[c] ^= (t << 13) | (t >>> 19);
			t = x[c] + x[b]; x[d] ^= (t << 18) | (t >>> 14);
	}

	while(len > 0)
	{
		for(i = 0; i < 16; i++) x[i] = state[i];

		for(i = 0; i < 10; i++)
		{
			STEP( 4, 8, 12,  0); STEP( 9, 13,  1,  5);
			STEP(14, 2,  6, 10); STEP( 3,  7, 11, 15);
			STEP( 1, 2,  3,  0); STEP( 6,  7,  4,  5);
			STEP(11, 8,  9, 10); STEP(12, 13, 14, 15);
		}

		for(i = 0; i < 16; i++) x[i] += state[i];

		state[8]++;

		var sz = (len < 64 ? len : 64), pos = m.length - len; len -= 64;

		for(i = 0; i < sz; i++){ out[pos+i] = m[pos+i] ^ (x[i>>2] >>> ((i&3)<<3)) & 0xFF; }
	}

	if(typeof(msg) == 'string')
	{
		for(var i = 0; i < out.length; i++){ out[i] = String.fromCharCode(out[i]); }
		
		return out.join('');
	}

	if(msg instanceof Uint8Array) return new Uint8Array(out);

	return out;
}

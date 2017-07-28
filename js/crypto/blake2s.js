/*=============================================================================
  Created by NxtChg (admin@nxtchg.com), 2017. License: Public Domain.
=============================================================================*/
'use strict';

var blake_iv = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19, 0, 0, 0, 0]

function blake2s_core(state, s, more)
{
	function STEP(a, b, c, d, x, y)
	{
		var t;

		v[a] = v[a] + v[b] + x; t = v[d] ^ v[a]; v[d] = (t >>> 16) | (t << 16);
		v[c] = v[c] + v[d];     t = v[b] ^ v[c]; v[b] = (t >>> 12) | (t << 20);
		v[a] = v[a] + v[b] + y; t = v[d] ^ v[a]; v[d] = (t >>>  8) | (t << 24);
		v[c] = v[c] + v[d];     t = v[b] ^ v[c]; v[b] = (t >>>  7) | (t << 25);
	}//___________________________________________________________________________
	
	var i, sz, start = 0, len = s.length, m = new Array(16), v = new Array(16), block = new Array(64);

	var sigma =
	[
		 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 14, 10,  4,  8,  9, 15, 13,  6,  1, 12,  0,  2, 11,  7,  5,  3,
		11,  8, 12,  0,  5,  2, 15, 13, 10, 14,  3,  6,  7,  1,  9,  4,  7,  9,  3,  1, 13, 12, 11, 14,  2,  6,  5, 10,  4,  0, 15,  8,
		 9,  0,  5,  7,  2,  4, 10, 15, 14,  1, 11, 12,  6,  8,  3, 13,  2, 12,  6, 10,  0, 11,  8,  3,  4, 13,  7,  5, 15, 14,  1,  9,
		12,  5,  1, 15, 14, 13,  4, 10,  0,  7,  6,  3,  9,  2,  8, 11, 13, 11,  7, 14, 12,  1,  3,  9,  5,  0, 15,  4,  8,  6,  2, 10,
		 6, 15, 14,  9, 11,  3,  0,  8, 12,  2, 13,  7,  1,  4, 10,  5, 10,  2,  8,  4,  7,  6,  1,  5, 15, 11,  9, 14,  3, 12, 13 , 0,
	];

	for(i = 0; i < 8; i++) v[i] = state[i];
	
	if(!len && state[8]) return;
	
	do
	{
		sz = 64;
	
		if(len <= 64){ sz = len; if(!more) state[10] = ~0; }
	
		state[8] += sz; // state[9] += (state[8] < sz); <- we only support less than 4Gb data
	
		for(i = 0; i < sz; i++){ block[i] = (typeof(s) == 'string' ? s.charCodeAt(start+i) : +s[start+i]); }

		while(i < 64) block[i++] = 0;

		for(i = 0; i < 64; i += 4) m[i>>2] = block[i] | block[i+1] << 8 | block[i+2] << 16 | block[i+3] << 24;
	
		v[ 8] = blake_iv[0]; v[12] = state[ 8] ^ blake_iv[4];
		v[ 9] = blake_iv[1]; v[13] = state[ 9] ^ blake_iv[5];
		v[10] = blake_iv[2]; v[14] = state[10] ^ blake_iv[6];
		v[11] = blake_iv[3]; v[15] = state[11] ^ blake_iv[7];
		
		for(i = 0; i < 160; i += 16)
		{
			STEP(0, 4,  8, 12, m[sigma[i+ 0]], m[sigma[i+ 1]]);
			STEP(1, 5,  9, 13, m[sigma[i+ 2]], m[sigma[i+ 3]]);
			STEP(2, 6, 10, 14, m[sigma[i+ 4]], m[sigma[i+ 5]]);
			STEP(3, 7, 11, 15, m[sigma[i+ 6]], m[sigma[i+ 7]]);
			STEP(0, 5, 10, 15, m[sigma[i+ 8]], m[sigma[i+ 9]]);
			STEP(1, 6, 11, 12, m[sigma[i+10]], m[sigma[i+11]]);
			STEP(2, 7,  8, 13, m[sigma[i+12]], m[sigma[i+13]]);
			STEP(3, 4,  9, 14, m[sigma[i+14]], m[sigma[i+15]]);
		}
		
		for(i = 0; i < 8; i++){ state[i] ^= v[i] ^ v[i+8]; v[i] = state[i]; }

		start += 64; len -= 64;
	}
	while(len > 0);
}//____________________________________________________________________________

// 'msg' can be a string, Uint8Array or regular JS array
// 'out' can be 'bin', 'hex' or 'HEX'

function Blake2s(msg, out, prefix)
{
	function hash2hex(b, out)
	{
		var str = '', hex = (out == 'HEX' ? '0123456789ABCDEF' : '0123456789abcdef');
		
		for(var i = 0; i < 32; i++){ str += hex[(b[i] >> 4) & 0xF] + hex[b[i] & 0xF]; }
		
		return str;
	}//____________________________________________________________________________

	var state = blake_iv.slice(0);
	
	state[0] ^= 0x1010020; // params
	
	if(prefix) blake2s_core(state, prefix, 64, msg.length > 0);
	
	blake2s_core(state, msg, false);
	
	var H = new Array(32);

	for(var i = 0; i < 8; i++)
	{
		H[i*4]   = (state[i]      )  & 0xFF;
		H[i*4+1] = (state[i] >>  8)  & 0xFF;
		H[i*4+2] = (state[i] >>  16) & 0xFF;
		H[i*4+3] = (state[i] >>> 24);
	}

	return (out == 'bin' ? H : hash2hex(H, out));
}//____________________________________________________________________________

function Blake2s_HMAC(msg, key, out) // key is a 32-byte array
{
	var ipad = new Array(64);
	var opad = new Array(64);
	
	for(var i = 0; i < 64; i++)
	{
		var k = (i < 32 ? key[i] & 0xFF : 0);
		
		ipad[i] = k ^ 0x36;
		opad[i] = k ^ 0x5c;
	}
	
	var H = Blake2s(msg, 'bin', ipad);
	return  Blake2s(H,   out,   opad);
}//____________________________________________________________________________

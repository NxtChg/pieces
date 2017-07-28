/*=============================================================================
  Created by NxtChg (admin@nxtchg.com), 2017. License: Public Domain.
=============================================================================*/
'use strict';

// 's' can be a string, Uint8Array or regular JS array

// 'out' can be 'bin', 'hex' or 'HEX'

function SHA256(s, out)
{
	function hash2hex(b)
	{
		var a, str = '', hex = (out == 'HEX' ? '0123456789ABCDEF' : '0123456789abcdef');

		for(var i = 0; i < 8; i++)
		{
			a = b[i];

			str +=  hex[(a >> 28) & 0xF] + hex[(a >> 24) & 0xF] +
					hex[(a >> 20) & 0xF] + hex[(a >> 16) & 0xF] +
					hex[(a >> 12) & 0xF] + hex[(a >>  8) & 0xF] +
					hex[(a >>  4) & 0xF] + hex[(a      ) & 0xF];
		}

		return str;
	}//___________________________________________________________________________

	var bitlen = s.length * 8, last = (((bitlen + 64) >> 9) << 4) + 15;

	//if(typeof(s) == 'string'){ s = unescape(encodeURIComponent(s)); } // encode UTF-8  <-- this should probably be outside...

	function read_str(idx)
	{
		var p = idx << 2, out = (p < s.length ? s.charCodeAt(p) << 24 | s.charCodeAt(p+1) << 16 | s.charCodeAt(p+2) << 8 | s.charCodeAt(p+3) : 0);

		if(idx == (bitlen >> 5)){ out |= 0x80 << (24 - (bitlen & 31)); }

		return out;
	}
 
	function read_bytes(idx)
	{
		var p = idx << 2, out = (p < s.length ? (s[p] << 24) | (s[p+1] << 16) | (s[p+2] << 8) | s[p+3] : 0);

		if(idx == (bitlen >> 5)){ out |= 0x80 << (24 - (bitlen & 31)); }

		return out;
	}

	var read = (typeof(s) == 'string' ? read_str : read_bytes), len = last+1

	var a, b, c, d, e, f, g, h, i, j, p, t, w = new Array(64);

	var k = [0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
	var H = [0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19];

	for(i = 0; i < len; i += 16)
	{
		a = H[0]; b = H[1]; c = H[2]; d = H[3]; e = H[4]; f = H[5]; g = H[6]; h = H[7];

		for(j = 0; j < 64; j++)
		{
			if(j < 16)
			{
				w[j] = (j+i == last ? bitlen : read(j+i));
			}
			else
			{
				t = w[j-15]; t  = (t >>>  7 | t << 25) ^ (t >>> 18 | t << 14) ^ (t >>>  3);
				p = w[j- 2]; t += (p >>> 17 | p << 15) ^ (p >>> 19 | p << 13) ^ (p >>> 10);

				w[j] = t + w[j-7] + w[j-16];
			}

			t = h + ((e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7));

			t += ((e & f) ^ (~e & g)) + k[j] + w[j];

			h = g; g = f; f = e; e = (d + t) >>> 0; d = c; c = b; b = a;
			
			t += (b >>> 2 | b << 30) ^ (b >>> 13 | b << 19) ^ (b >>> 22 | b << 10);

			a = (t + ((b & c) ^ (b & d) ^ (c & d))) >>> 0;
		}

		H[0] += a; H[1] += b; H[2] += c; H[3] += d; H[4] += e; H[5] += f; H[6] += g; H[7] += h;
	}

	return (out == 'bin' ? H : hash2hex(H));
}

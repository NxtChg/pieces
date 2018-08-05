/*=============================================================================
  Created by NxtChg (admin@nxtchg.com), 2016. License: Public Domain.
=============================================================================*/

function SHA256(s) // 's' is array
{
	function rotr  (x, n){ return ( x >>> n ) | (x << (32 - n)); }
	function Ch (x, y, z){ return ((x & y) ^ ((~x) & z)); }
	function Maj(x, y, z){ return ((x & y) ^ (  x  & z) ^ (y & z)); }
	function Sigma0256(x){ return (rotr(x, 2) ^ rotr(x,13) ^ rotr(x,22)); }
	function Sigma1256(x){ return (rotr(x, 6) ^ rotr(x,11) ^ rotr(x,25)); }
	function Gamma0256(x){ return (rotr(x, 7) ^ rotr(x,18) ^ (x >>>  3)); }
	function Gamma1256(x){ return (rotr(x,17) ^ rotr(x,19) ^ (x >>> 10)); }
 
	function core_sha256(read, len)
	{
		var a, b, c, d, e, f, g, h, i, j, t, w = new Array(64);

		var k = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);
		var H = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);
 
		for(i = 0; i < len; i += 16)
		{
			a = H[0]; b = H[1]; c = H[2]; d = H[3]; e = H[4]; f = H[5]; g = H[6]; h = H[7];
 
			for(j = 0; j < 64; j++)
			{
				w[j] = (j < 16 ? read(j+i) : Gamma1256(w[j-2]) + w[j-7] + Gamma0256(w[j-15]) + w[j-16]);
 
				t = h + Sigma1256(e) + Ch(e,f,g) + k[j] + w[j];

				h = g; g = f; f = e; e = (d + t) >>> 0;
				d = c; c = b; b = a; a = (t + Sigma0256(b) + Maj(b,c,d)) >>> 0;
			}

			H[0] += a; H[1] += b; H[2] += c; H[3] += d; H[4] += e; H[5] += f; H[6] += g; H[7] += h;
		}

		return H;
	}//___________________________________________________________________________
 
	var bitlen = s.length * 8, last = (((bitlen + 64) >> 9) << 4) + 15;

	function read(idx)
	{
		var p = idx << 2, out = (s[p] << 24) | (s[p+1] << 16) | (s[p+2] << 8) | s[p+3];

		if(idx == (bitlen >> 5)){ out |= 0x80 << (24 - (bitlen & 31)); }

		return (idx == last ? bitlen : out) >>> 0;
	}//___________________________________________________________________________

	var h = core_sha256(read, last+1);

	for(var b = [], i = 0; i < 32; i++)
	{
		b.push((h[i>>2] >>> (24 - ((i&3)<<3))) & 0xFF);
	}

	return b;
}//____________________________________________________________________________

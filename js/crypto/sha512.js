/*=============================================================================
  Created by NxtChg (admin@nxtchg.com), 2017. License: Public Domain.
=============================================================================*/

function _i64(){ }

var p = _i64.prototype;

p.from = function(hi, lo){ this.hi = hi; this.lo = lo; };
//____________________________________________________________________________

p.add = function(v)
{
	var $ = this, lsw, msw;

	lsw  = ($.lo & 0xFFFF) + (v.lo & 0xFFFF);
	msw  = ($.lo   >>> 16) + (v.lo   >>> 16) + (lsw >>> 16);
	$.lo = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);

	lsw  = ($.hi & 0xFFFF) + (v.hi & 0xFFFF) + (msw >>> 16);
	msw  = ($.hi   >>> 16) + (v.hi   >>> 16) + (lsw >>> 16);
	$.hi = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);

	return $;
};//___________________________________________________________________________

p.s0 = function(v)
{
	this.hi = ((v.hi >>> 28) | (v.lo << 4)) ^ ((v.lo >>> 2) | (v.hi << 30)) ^ ((v.lo >>> 7) | (v.hi << 25));
	this.lo = ((v.lo >>> 28) | (v.hi << 4)) ^ ((v.hi >>> 2) | (v.lo << 30)) ^ ((v.hi >>> 7) | (v.lo << 25));
};//___________________________________________________________________________

p.s1 = function(v)
{
	this.hi = ((v.hi >>> 14) | (v.lo << 18)) ^ ((v.hi >>> 18) | (v.lo << 14)) ^ ((v.lo >>> 9) | (v.hi << 23));
	this.lo = ((v.lo >>> 14) | (v.hi << 18)) ^ ((v.lo >>> 18) | (v.hi << 14)) ^ ((v.hi >>> 9) | (v.lo << 23));

	return this;
};//___________________________________________________________________________

p.g0 = function(v)
{
	this.hi = ((v.hi >>> 1) | (v.lo << 31)) ^ ((v.hi >>> 8) | (v.lo << 24)) ^ (v.hi >>> 7);
	this.lo = ((v.lo >>> 1) | (v.hi << 31)) ^ ((v.lo >>> 8) | (v.hi << 24)) ^ (v.lo >>> 7 | (v.hi << 25));
};//___________________________________________________________________________

p.g1 = function(v)
{
	this.hi = ((v.hi >>> 19) | (v.lo << 13)) ^ ((v.lo >>> 29) | (v.hi << 3)) ^ (v.hi >>> 6);
	this.lo = ((v.lo >>> 19) | (v.hi << 13)) ^ ((v.hi >>> 29) | (v.lo << 3)) ^ (v.lo >>> 6 | (v.hi << 26));

	return this;
};//___________________________________________________________________________

p.ch = function(x, y, z)
{
	this.hi = (x.hi & y.hi) ^ (~x.hi & z.hi);
	this.lo = (x.lo & y.lo) ^ (~x.lo & z.lo);

	return this;
};//___________________________________________________________________________

p.maj = function(x, y, z)
{
	this.hi = (x.hi & y.hi) ^ (x.hi & z.hi) ^ (y.hi & z.hi);
	this.lo = (x.lo & y.lo) ^ (x.lo & z.lo) ^ (y.lo & z.lo);

	return this;
};//___________________________________________________________________________

p.K = [ 0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc, 0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
		0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe, 0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
		0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3, 0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
		0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4, 0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
		0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df, 0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
		0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30, 0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
		0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8, 0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
		0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
		0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178, 0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6, 0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
		0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c, 0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817];

p.w = new Array(90); for(var i = 0; i < 90; i++) p.w[i] = new _i64();

p.hash2hex = function(b, uppercase) // for some weird reason it's much faster here
{
	var str = '', hex = (uppercase ? '0123456789ABCDEF' : '0123456789abcdef');

	for(var i = 0; i < 16; i++)
	{
		var a = b[i];

		str +=  hex[((a >> 28) & 0xF)] + hex[((a >> 24) & 0xF)] +
				hex[((a >> 20) & 0xF)] + hex[((a >> 16) & 0xF)] +
				hex[((a >> 12) & 0xF)] + hex[((a >>  8) & 0xF)] +
				hex[((a >>  4) & 0xF)] + hex[((a      ) & 0xF)];
	}

	return str;
}//___________________________________________________________________________

function SHA512(s, out)
{
	function add(x, idx, y)
	{
		var t =  (x[idx+1] + y.lo);
		var c = ((x[idx+1] & y.lo) | (x[idx+1] | y.lo) & ~t) >>> 31;

		x[idx+1] = t; x[idx] = (x[idx] + y.hi + c);
	}

	var H = [0x6a09e667, 0xf3bcc908, 0xbb67ae85, 0x84caa73b, 0x3c6ef372, 0xfe94f82b, 0xa54ff53a, 0x5f1d36f1, 0x510e527f, 0xade682d1, 0x9b05688c, 0x2b3e6c1f, 0x1f83d9ab, 0xfb41bd6b, 0x5be0cd19, 0x137e2179];

	var bitlen = s.length * 8, last = (((bitlen + 128) >> 10) << 5) + 31;

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

	var read = (typeof(s) == 'string' ? read_str : read_bytes);

	var i, j, w = p.w, a = w[80], b = w[81], c = w[82], d = w[83], e = w[84], f = w[85], g = w[86], h = w[87], k = w[88], t = w[89];

	for(i = 0; i < last+1; i += 32)
	{
		a.from(H[0], H[1]); b.from(H[ 2], H[ 3]); c.from(H[ 4], H[ 5]); d.from(H[ 6], H[ 7]);
		e.from(H[8], H[9]); f.from(H[10], H[11]); g.from(H[12], H[13]); h.from(H[14], H[15]);

		for(j = 0; j < 80; j++)
		{
			if(j < 16)
			{
				if(j*2+i+1 == last){ p.w[j].hi = 0; p.w[j].lo = bitlen; }
				else               { p.w[j].from(read(j*2+i), read(j*2+i+1)); }
			}
			else
			{
				k.g0(p.w[j-15]); p.w[j].g1(p.w[j-2]).add(p.w[j-7]).add(k).add(p.w[j-16]);
			}

			k.from(p.K[j*2], p.K[j*2+1]); k.add(p.w[j]);

			t.ch(e,f,g).add(h); h.s1(e).add(k); t.add(h);

			var ta = h; h = g; g = f; f = e; e = d; d = c; c = b; b = a;

			e.add(t); k.s0(a); ta.maj(b,c,d).add(k).add(t); a = ta;
		}

		add(H, 0, a); add(H, 2, b); add(H, 4, c); add(H, 6, d);
		add(H, 8, e); add(H,10, f); add(H,12, g); add(H,14, h);
	}

	return (out == 'bin' ? H : p.hash2hex(H, out));
}
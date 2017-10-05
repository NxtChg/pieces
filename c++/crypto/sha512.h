/*=============================================================================
  Created by NxtChg (admin@nxtchg.com), 2017. License: Public Domain.
=============================================================================*/

#define ROTR64(x,c)	(((x) >> c) | ((x) << (64-c))) // _rotr64()

#define STEP(a,b,c,d,e,f,g,h) \
	t = s[h] + (ROTR64(s[e],14) ^ ROTR64(s[e],18) ^ ROTR64(s[e],41)) + ((s[e] & s[f]) ^ (~s[e] & s[g])) + w[i] + k[i];  s[d] += t; \
	s[h] = t + (ROTR64(s[a],28) ^ ROTR64(s[a],34) ^ ROTR64(s[a],39)) + ((s[a] & s[b]) ^ ( s[a] & s[c]) ^ (s[b] & s[c]));
//_____________________________________________________________________________

void sha512_blocks(uint64 *state, byte *in, int len)
{
	static uint64 k[80] =
	{
		0x428A2F98D728AE22, 0x7137449123EF65CD, 0xB5C0FBCFEC4D3B2F, 0xE9B5DBA58189DBBC, 0x3956C25BF348B538, 0x59F111F1B605D019, 0x923F82A4AF194F9B, 0xAB1C5ED5DA6D8118,
		0xD807AA98A3030242, 0x12835B0145706FBE, 0x243185BE4EE4B28C, 0x550C7DC3D5FFB4E2, 0x72BE5D74F27B896F, 0x80DEB1FE3B1696B1, 0x9BDC06A725C71235, 0xC19BF174CF692694,
		0xE49B69C19EF14AD2, 0xEFBE4786384F25E3, 0x0FC19DC68B8CD5B5, 0x240CA1CC77AC9C65, 0x2DE92C6F592B0275, 0x4A7484AA6EA6E483, 0x5CB0A9DCBD41FBD4, 0x76F988DA831153B5,
		0x983E5152EE66DFAB, 0xA831C66D2DB43210, 0xB00327C898FB213F, 0xBF597FC7BEEF0EE4, 0xC6E00BF33DA88FC2, 0xD5A79147930AA725, 0x06CA6351E003826F, 0x142929670A0E6E70,
		0x27B70A8546D22FFC, 0x2E1B21385C26C926, 0x4D2C6DFC5AC42AED, 0x53380D139D95B3DF, 0x650A73548BAF63DE, 0x766A0ABB3C77B2A8, 0x81C2C92E47EDAEE6, 0x92722C851482353B,
		0xA2BFE8A14CF10364, 0xA81A664BBC423001, 0xC24B8B70D0F89791, 0xC76C51A30654BE30, 0xD192E819D6EF5218, 0xD69906245565A910, 0xF40E35855771202A, 0x106AA07032BBD1B8,
		0x19A4C116B8D2D0C8, 0x1E376C085141AB53, 0x2748774CDF8EEB99, 0x34B0BCB5E19B48A8, 0x391C0CB3C5C95A63, 0x4ED8AA4AE3418ACB, 0x5B9CCA4F7763E373, 0x682E6FF3D6B2B8A3,
		0x748F82EE5DEFB2FC, 0x78A5636F43172F60, 0x84C87814A1F0AB72, 0x8CC702081A6439EC, 0x90BEFFFA23631E28, 0xA4506CEBDE82BDE9, 0xBEF9A3F7B2C67915, 0xC67178F2E372532B,
		0xCA273ECEEA26619C, 0xD186B8C721C0C207, 0xEADA7DD6CDE0EB1E, 0xF57D4F7FEE6ED178, 0x06F067AA72176FBA, 0x0A637DC5A2C898A6, 0x113F9804BEF90DAE, 0x1B710B35131C471B,
		0x28DB77F523047D84, 0x32CAAB7B40C72493, 0x3C9EBE0A15C9BEBC, 0x431D67C49C100D4C, 0x4CC5D4BECB3E42B6, 0x597F299CFC657E2A, 0x5FCB6FAB3AD6FAEC, 0x6C44198C4A475817
	};

	uint64 w[80], s[8] = { state[0], state[1], state[2], state[3], state[4], state[5], state[6], state[7] };

	while(len >= 128)
	{
		till(128){ ((byte*)w)[(i & ~7) + 7 - (i & 7)] = in[i]; } // load big-endian

		for(i = 16; i < 80; i++)
		{
			const uint64 gam0 = ROTR64(w[i-15], 1) ^ ROTR64(w[i-15], 8) ^ (w[i-15] >> 7);
			const uint64 gam1 = ROTR64(w[i- 2],19) ^ ROTR64(w[i- 2],61) ^ (w[i- 2] >> 6);

			w[i] = gam1 + w[i-7] + gam0 + w[i-16];
		}

		uint64 t; i = 0;

		do
		{
			STEP(0, 1, 2, 3, 4, 5, 6, 7); i++;
			STEP(7, 0, 1, 2, 3, 4, 5, 6); i++;
			STEP(6, 7, 0, 1, 2, 3, 4, 5); i++;
			STEP(5, 6, 7, 0, 1, 2, 3, 4); i++;
			STEP(4, 5, 6, 7, 0, 1, 2, 3); i++;
			STEP(3, 4, 5, 6, 7, 0, 1, 2); i++;
			STEP(2, 3, 4, 5, 6, 7, 0, 1); i++;
			STEP(1, 2, 3, 4, 5, 6, 7, 0); i++;

		}
		while(i < 80);

		{ till(8){ s[i] += state[i]; state[i] = s[i]; } }

		in += 128; len -= 128;
	}
}//____________________________________________________________________________

void sha512(const void *src, int len, byte out[64])
{
	uint64 s[8]; int sz = len;

	byte pad[256], *in = (byte*)src;
	
	s[0] = 0x6A09E667F3BCC908; s[1] = 0xBB67AE8584CAA73B; s[2] = 0x3C6EF372FE94F82B; s[3] = 0xA54FF53A5F1D36F1;
	s[4] = 0x510E527FADE682D1; s[5] = 0x9B05688C2B3E6C1F; s[6] = 0x1F83D9ABFB41BD6B; s[7] = 0x5BE0CD19137E2179;

	sha512_blocks(s, in, sz);

	in += sz; sz &= 127; in -= sz;
	
	pad[sz] = 0x80; till(sz) pad[i] = in[i];
	
	int ofs = (sz < 112 ? 119 : 247);

	for(i = sz+1; i < ofs+4; i++) pad[i] = 0;

	pad[i+0] = byte(len >> 29);
	pad[i+1] = byte(len >> 21);
	pad[i+2] = byte(len >> 13);
	pad[i+3] = byte(len >>  5);
	pad[i+4] = byte(len <<  3);

	sha512_blocks(s, pad, ofs+9);

	{ till(64) out[i] = ((byte*)s)[(i & ~7) + 7 - (i & 7)]; } // store big-endian
}

#undef STEP

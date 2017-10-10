/*=============================================================================
  Created by NxtChg (admin@nxtchg.com), 2014-2017. License: Public Domain.
=============================================================================*/

typedef unsigned char byte;
typedef unsigned int  uint;
typedef __int64       int64;

#define till(a) for(int i = 0; i < (a); i++)

#define ROTL32(x,c) (((x) << c) | ((x) >> (32-c))) // _lrotl(x,c)

#define STEP(a,b,c,d) \
	x[a] ^= ROTL32(x[d]+x[c], 7); \
	x[b] ^= ROTL32(x[a]+x[d], 9); \
	x[c] ^= ROTL32(x[b]+x[a],13); \
	x[d] ^= ROTL32(x[c]+x[b],18);

void salsa20(byte *dst, byte *src, int size, byte key[32], byte nonce[8] = NULL)
{
	uint *k = (uint*)key;
	uint *n = (uint*)nonce;
	uint *c = (uint*)"expand 32-byte k";

	uint x[16], state[16] = { c[0], k[0], k[1], k[2], k[3], c[1], 0, 0, 0, 0, c[2], k[4], k[5], k[6], k[7], c[3] };

	if(nonce){ state[6] = n[0]; state[7] = n[1]; }

	while(size > 0)
	{
		{ till(16) x[i] = state[i]; }

		till(10)
		{
			STEP( 4, 8, 12,  0);  STEP( 9, 13,  1,  5);
			STEP(14, 2,  6, 10);  STEP( 3,  7, 11, 15);
			STEP( 1, 2,  3,  0);  STEP( 6,  7,  4,  5);
			STEP(11, 8,  9, 10);  STEP(12, 13, 14, 15);
		}

		{ till(16) x[i] += state[i]; }

		state[8]++; // if(!state[8]) state[9]++;

		int sz = (size < 64 ? size : 64);

		{ till(sz) dst[i] = src[i] ^ *((byte*)x+i); }

		src += 64; dst += 64; size -= 64;
	}
}//____________________________________________________________________________

void salsa20(void *ptr, int size, byte key[32], byte  nonce[8] = NULL ){ salsa20((byte*)ptr, (byte*)ptr, size, key,         nonce); }
void salsa20(void *ptr, int size, byte key[32], int64 nonce           ){ salsa20((byte*)ptr, (byte*)ptr, size, key, (byte*)&nonce); }
void salsa20(void *dst, void *src, int size, byte key[32], int64 nonce){ salsa20((byte*)dst, (byte*)src, size, key, (byte*)&nonce); }

#undef STEP

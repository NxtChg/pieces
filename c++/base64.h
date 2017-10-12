/*=============================================================================
  Created by NxtChg (admin@nxtchg.com), 2017. License: Public Domain.
=============================================================================*/

typedef unsigned char byte;

char b64enc[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
char b64dec[] = "|$$$}rstuvwxyz{$$$$$$$>?@ABCDEFGHIJKLMNOPQRSTUVW$$$$$$XYZ[\\]^_`abcdefghijklmnopq";

int base64_encode(byte *bin, int size, char *out) // returns the number of characters written
{
	int sz = 0, rm = size;

	while(rm > 0)
	{
		int b = (bin[0] & 3) << 4, c = 64;
		
		if(rm > 1){ b |= (bin[1] & 0xF0) >> 4; c = ((bin[1] & 0x0F) << 2) | ((bin[2] & 0xC0) >> 6); }

		out[sz+0] = b64enc[bin[0] >> 2];
		out[sz+1] = b64enc[b];
		out[sz+2] = b64enc[c];
		out[sz+3] = b64enc[rm > 2 ? (bin[2] & 0x3F) : 64];

		sz += 4; bin += 3; rm -= 3;
	}

	out[sz] = 0;

	return sz;
}//____________________________________________________________________________

int base64_decode(char *str, byte *out, int size) // returns the number of bytes written or -1 if decoding failed
{
	int d = 0, sz = 0, bits = 0;

	while(*str)
	{
		char a = *str++; if(a > 0 && a < 33) continue;

		if(a != '=')
		{
			if(a < 43 || a > 122) return -1; // bad character

			char b = b64dec[a-43]; if(b == '$') return -1; // bad character

			d = (d << 6) | (b - 62); bits += 6;

			if(bits > 7)
			{
				int r = bits - 8; if(sz >= size) return -1;

				out[sz++] = (byte)(d >> r); d &= (1 << r) - 1; bits -= 8;
			}
		}
	}

	return (bits < 6 ? sz : -1);
}//____________________________________________________________________________

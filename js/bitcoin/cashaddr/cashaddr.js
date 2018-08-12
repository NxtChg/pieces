/*=============================================================================
  Created by NxtChg (admin@nxtchg.com), 2018. License: Public Domain.
=============================================================================*/

function poly_mod(v, ret) // checksum magic
{
	var a = 0, b = 1, c = 0;

	for(var i = 0; i < v.length; i++)
	{
		c =  (a >>> 3);
		a = ((a & 7) << 5) | (b >>> 27);
		b = ((b & 0x07ffffff) << 5) ^ v[i];

		if(c == 0) continue;

		if(c &  1){ a ^= 0x98; b ^= 0xf2bc8e61; }
		if(c &  2){ a ^= 0x79; b ^= 0xb76d99e2; }
		if(c &  4){ a ^= 0xf3; b ^= 0x3e5fb3c4; }
		if(c &  8){ a ^= 0xae; b ^= 0x2eabe2a8; }
		if(c & 16){ a ^= 0x1e; b ^= 0x4f43e470; }
	}

	return (ret ? [a, b^1] : (a == 0 && (b^1) == 0));
}//____________________________________________________________________________

function bits5to8(arr) // converts 5-bit words into bytes
{
	var t = 0, bits = 0, out = [];

	for(var i = 0; i < arr.length; i++)
	{
		t <<= 5; t |= arr[i]; bits += 5;

		while(bits > 7){ bits -= 8; out.push((t >> bits) & 0xFF);  }
	}

	return out;
}//____________________________________________________________________________

function bits8to5(arr) // converts bytes into 5-bit words
{
	var t = 0, bits = 0, out = [];

	for(var i = 0; i < arr.length; i++)
	{
		t <<= 8; t |= arr[i]; bits += 8;

		while(bits > 5){ bits -= 5; out.push((t >> bits) & 31); }
	}

	if(bits) out.push((t & ((1 << bits) - 1)) << (5 - bits));

	return out;
}//____________________________________________________________________________

function base58_encode(bin)
{
	var d = [0], alphabet = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
	
	for(var i = 0; i < bin.length; i++)
	{
		for(var j = 0, c = bin[i]; j < d.length; j++)
		{
			c += d[j] << 8; d[j] = c % 58; c = (c / 58) | 0;
		}

		while(c > 0){ d.push(c % 58); c = (c / 58) | 0; }
	}

	var out = '';
	
	for(i = 0; i < bin.length && bin[i] == 0; i++) out += '1'; // leading zero bytes

	for(i = d.length - 1; i >= 0; i--) out += alphabet[d[i]]; // reverse

	return out;
}//____________________________________________________________________________

function pk2adr(pk)
{
	if(pk === false) return '';

	pk = [pk[0] ? 0x05 : 0x00].concat(pk.slice(1));

	var checksum = SHA256(SHA256(pk)).slice(0, 4);

	return base58_encode(pk.concat(checksum));
}//____________________________________________________________________________

function cashaddr2pk(adr) // returns payload, including the version byte
{
	adr = (''+adr).toLowerCase();

	//var idx = adr.indexOf('bitcoincash:'); if(idx != -1) adr = adr.substr(idx+12);

	var idx = adr.indexOf(':'); if(idx != -1) adr = adr.substr(idx+1); // let's be more relaxed about the prefix...

	adr = adr.replace(/(^\s+)|(\s+$)/g, ''); // trim

	if(adr[0] != 'q' && adr[0] != 'p') return false;

	var raw = [], alphabet = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l';

	for(var i = 0; i < adr.length; i++)
	{
		idx = alphabet.indexOf(adr[i]); if(idx < 0) continue;

		raw.push(idx); if(raw.length > 112) return false;
	}

	if(raw.length < 42) return false;

	var hash_sz = (raw[1] >> 2); if(hash_sz != 0) return false; // only 160-bit hashes

	if(!poly_mod([2, 9, 20, 3, 15, 9, 14, 3, 1, 19, 8, 0].concat(raw))) return false; // verify checksum

	raw = raw.slice(0, -8); // cut off checksum

	return bits5to8(raw); // convert into bytes
}//____________________________________________________________________________

function pk2cashaddr(pk) // needs version byte + payload
{
	var raw = bits8to5(pk); // convert into 5-bit words

	var mod = poly_mod([2, 9, 20, 3, 15, 9, 14, 3, 1, 19, 8, 0].concat(raw).concat([0,0,0,0,0,0,0,0]), true);

	var a = mod[0], b = mod[1], checksum = new Array(8);
	
	for(var i = 7; i >= 0; i--) // convert 5-bit groups in mod to checksum values
	{
		checksum[i] = (b & 31); b >>>= 5; b |= (a & 31) << 27; a >>>= 5; // (mod >> uint(5*(7-i))) & 0x1f
	}

	raw = raw.concat(checksum);

	if(!poly_mod([2, 9, 20, 3, 15, 9, 14, 3, 1, 19, 8, 0].concat(raw))) return false; // verify checksum

	var out = 'bitcoincash:', alphabet = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l';

	for(var i = 0; i < raw.length; i++){ out += alphabet[raw[i] & 31]; }

	return out;
}

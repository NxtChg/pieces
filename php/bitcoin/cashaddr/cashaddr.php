<?php
/*=============================================================================
  Created by NxtChg (admin@nxtchg.com), 2018. License: Public Domain.
=============================================================================*/

function rshift($a, $b)
{
    if($b == 0) return $a; else return ($a >> $b) & ~(1 << (8 * PHP_INT_SIZE-1) >> ($b-1));
}//____________________________________________________________________________

function poly_mod($v, $ret = false) // checksum magic
{
	$a = 0; $b = 1; $c = 0;

	for($i = 0; $i < count($v); $i++)
	{
		$c = rshift($a, 3);
		$c = ($a >> 3);
		$a = (($a & 7) << 5) | rshift($b, 27);
		$b = (($b & 0x07ffffff) << 5) ^ $v[$i];

		if($c == 0) continue;

		if($c &  1){ $a ^= 0x98; $b ^= 0xf2bc8e61; }
		if($c &  2){ $a ^= 0x79; $b ^= 0xb76d99e2; }
		if($c &  4){ $a ^= 0xf3; $b ^= 0x3e5fb3c4; }
		if($c &  8){ $a ^= 0xae; $b ^= 0x2eabe2a8; }
		if($c & 16){ $a ^= 0x1e; $b ^= 0x4f43e470; }
	}

	return ($ret ? [$a, $b^1] : ($a == 0 && ($b^1) == 0));
}//____________________________________________________________________________

function bits5to8($arr) // converts 5-bit words into bytes
{
	$t = 0; $bits = 0; $out = [];

	for($i = 0; $i < count($arr); $i++)
	{
		$t <<= 5; $t |= $arr[$i]; $bits += 5;

		while($bits > 7){ $bits -= 8; $out[] = (($t >> $bits) & 0xFF);  }
	}

	return $out;
}//____________________________________________________________________________

function bits8to5($arr) // converts bytes into 5-bit words
{
	$t = 0; $bits = 0; $out = [];

	for($i = 0; $i < count($arr); $i++)
	{
		$t <<= 8; $t |= $arr[$i]; $bits += 8;

		while($bits > 5){ $bits -= 5; $out[] = (($t >> $bits) & 31); }
	}

	if($bits) $out[] = (($t & ((1 << $bits) - 1)) << (5 - $bits));

	return $out;
}//____________________________________________________________________________

function base58_encode($bin)
{
	$d = [0]; $alphabet = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
	
	for($i = 0; $i < count($bin); $i++)
	{
		for($j = 0, $c = $bin[$i]; $j < count($d); $j++)
		{
			$c += $d[$j] << 8; $d[$j] = $c % 58; $c = ($c / 58) | 0;
		}

		while($c > 0){ $d[] = ($c % 58); $c = ($c / 58) | 0; }
	}

	$out = '';
	
	for($i = 0; $i < count($bin) && $bin[$i] == 0; $i++) $out .= '1'; // leading zero bytes

	for($i = count($d) - 1; $i >= 0; $i--) $out .= $alphabet[$d[$i]]; // reverse

	return $out;
}//____________________________________________________________________________

function SHAx2($arr)
{
	$s = ''; foreach($arr as $v) $s.= chr($v);

	$hash = str_split(hash('sha256', hash('sha256', $s, true), true));

	for($i = 0; $i < count($hash); $i++){ $hash[$i] = ord($hash[$i]); }

	return $hash;
}//____________________________________________________________________________

function pk2adr($pk)
{
	if($pk === false) return '';

	$pk = array_merge([$pk[0] ? 0x05 : 0x00], array_slice($pk, 1));

	$checksum = array_slice(SHAx2($pk), 0, 4);

	return base58_encode(array_merge($pk, $checksum));
}//____________________________________________________________________________

function cashaddr2pk($adr) // returns payload, including the version byte
{
	$adr = strtolower(strval($adr));

	//$idx = strpos(adr, 'bitcoincash:'); if($idx !== false) $adr = substr($adr, $idx+12);

	$idx = strpos($adr, ':'); if($idx !== false) $adr = substr($adr, $idx+1); // let's be more relaxed about the prefix...

	$adr = trim($adr); if($adr[0] != 'q' && $adr[0] != 'p') return false;

	$raw = []; $alphabet = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l';

	for($i = 0; $i < strlen($adr); $i++)
	{
		$idx = strpos($alphabet, $adr[$i]); if($idx === false) continue;

		$raw[] = $idx; if(count($raw) > 112) return false;
	}

	if(count($raw) < 42) return false;

	$hash_sz = ($raw[1] >> 2); if($hash_sz != 0) return false; // only 160-bit hashes

	if(!poly_mod(array_merge([2, 9, 20, 3, 15, 9, 14, 3, 1, 19, 8, 0], $raw))) return false; // verify checksum

	$raw = array_slice($raw, 0, -8); // cut off checksum

	return bits5to8($raw); // convert into bytes
}//____________________________________________________________________________

function pk2cashaddr($pk) // needs version byte + payload
{
	$raw = bits8to5($pk); // convert into 5-bit words

	$mod = poly_mod(array_merge([2, 9, 20, 3, 15, 9, 14, 3, 1, 19, 8, 0], $raw, [0,0,0,0,0,0,0,0]), true);

	$a = $mod[0]; $b = $mod[1]; $checksum = [0,0,0,0,0,0,0,0];
	
	for($i = 7; $i >= 0; $i--) // convert 5-bit groups in mod to checksum values
	{
		$checksum[$i] = ($b & 31); $b = rshift($b, 5); $b |= ($a & 31) << 27; $a = rshift($a, 5); // (mod >> uint(5*(7-i))) & 0x1f
	}

	$raw = array_merge($raw, $checksum);

	if(!poly_mod(array_merge([2, 9, 20, 3, 15, 9, 14, 3, 1, 19, 8, 0], $raw))) return false; // verify checksum

	$out = 'bitcoincash:'; $alphabet = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l';

	for($i = 0; $i < count($raw); $i++){ $out .= $alphabet[$raw[$i] & 31]; }

	return $out;
}
?>
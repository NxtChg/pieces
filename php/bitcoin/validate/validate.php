<?php

function encode_hex($dec)
{
	$ret = ''; $hexchars = '0123456789ABCDEF';

	while(bccomp($dec, 0) == 1)
	{
		$rem = bcmod($dec, '16');
		$dec = bcdiv($dec, '16');

		$ret .= $hexchars[intval($rem)];
	}

	if(strlen($ret) & 1) $ret.= '0';

	return strrev($ret);
}//________________________________________________________

function base58_decode($base58)
{
	$alphabet = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';

	if(preg_match('/[^1-9A-HJ-NP-Za-km-z]/', $base58)) return '';

	for($ret = '0', $i = 0; $i < strlen($base58); $i++)
	{
		$ret = bcadd(bcmul($ret, '58'), strpos($alphabet, $base58[$i]));
	}
	
	for($z = '', $i = 0; $i < strlen($base58) && $base58[$i] == '1'; $i++){ $z.= '00'; } // leading zeros

	return $z.encode_hex($ret);
}//________________________________________________________

function btc_validate($adr)
{
	$adr = base58_decode(trim($adr));  if(strlen($adr) != 50) return false;

	$ver = hexdec(substr($adr, 0, 2)); if($ver != 0 && $ver != 5) return false;

	$check = substr($adr, 0, strlen($adr) - 8);
	$check = pack("H*", $check);
	$check = strtoupper(hash('sha256', hash('sha256', $check, true)));
	$check = substr($check, 0, 8);

	return ($check == substr($adr, strlen($adr) - 8));
}

?>
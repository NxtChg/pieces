<?php
	include('cashaddr.php');

	$test =
	[
		"bitcoincash:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a", "1BpEi6DfDAUFd7GtittLSdBeYJvcoaVggu",
		"cash:qr95sy3j9xwd2ap32xkykttr4cvcu7as4y0qverfuy", "1KXrWXciRDZUpQwQmuM1DbwsKDLYAYsVLR",
		"  qqq3728yw0y47sqn6l2na30mcw6zm78dzqre909m2r ", "16w1D5WRVKJuZUsSRzdLp9w3YGcgoxDXb",
		"bitcoincash:ppm2qsznhks23z7629mms6s4cwef74vcwvn0h829pq", "3CWFddi6m4ndiGyKqzYvsFYagqDLPVMTzC",
		"bitcoincash:pr95sy3j9xwd2ap32xkykttr4cvcu7as4yc93ky28e", "3LDsS579y7sruadqu11beEJoTjdFiFCdX4",
		"bitcoincash:pqq3728yw0y47sqn6l2na30mcw6zm78dzq5ucqzc37", "31nwvkZwyPdgzjBJZXfDmSWsC4ZLKpYyUw",
	];
	
	for($i = 0; $i < count($test); $i += 2)
	{
		$src = $test[$i+0];
		$dst = $test[$i+1];
	
		$pk = cashaddr2pk($src);
	
		$adr = pk2adr($pk); $adr = ($pk !== false ? $adr : '<bad address>');
	
		$match = ($adr == $dst ? 'match' : 'WRONG!');
	
		$ca = pk2cashaddr($pk);
	
		echo "\n* $src => $adr ($match) => $ca";
	}

?>
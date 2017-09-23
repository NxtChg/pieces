<?php

	include('validate.php');

	if(btc_validate('1Jgt77gGxYBTv1vfJAxeFUpiR6rhz7UeDb')) echo "Valid\n"; else echo "Not valid\n";

	if(btc_validate('1Jgt77gGxYBTv1vfJAxeFUpiR6rhz7UeDa')) echo "Valid\n"; else echo "Not valid\n";
?>
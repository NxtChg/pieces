<?php

class JsonAPI
{
    private $id = 1, $server = '';
    public  $error = '';

	function __construct(){ $this->server = 'http://user:password@127.0.0.1:8332'; }

	function fetch($url, $post)
	{
		$ctx = @stream_context_create(['http' => ['method'=>'POST', 'header'=>'Content-type: application/json', 'content'=>$post, 'ignore_errors'=>true]]);
	
		$data = @file_get_contents($url, false, $ctx);

		if($data !== false)
		{
			$object = @json_decode($data, true);

			if($object !== NULL) return $object;
		}
	
		return false;
	}//____________________________________________________________________________

	function __call($func, $args)
	{
		$args = array_values($args);

		$func = str_replace('_', '', strtolower($func));

		$rqst = json_encode(['jsonrpc' => '2.0', 'id' => $this->id++, 'method' => $func, 'params' => $args]);

		$r = $this->fetch($this->server, $rqst); if($r === false) return NULL;

		if($r['error'])
		{
			$this->error = $r['error']['message']; return NULL;
		}
		else
		{
			$this->error = ''; return $r['result'];
		}
	}
};

?>
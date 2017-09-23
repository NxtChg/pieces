# Bitcoin RPC API interface

Usage:

```php
$api = new JsonAPI();

$balance = $api->get_balance('*', 1); if($balance === NULL){ die('Failed to fetch balance!'); }

echo "$balance\n";
```


# Int64 class for Javascript

## About

A simple class to allow 64-bit calculations in Javascript. _Not a polyfill._

More info: https://medium.com/@nxtchg/simplifying-int64-polyfill-4a9c35441e25

## Usage

```js
var v = new Int64(123);

v.add(4).mul(555);

var js_num = v.toNumber();
```

See the code for all available methods, it's just 260 lines.

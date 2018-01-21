
# fetchit

## About

A simple version of fetch() based on XMLHttpRequest.

_Not a polyfill._

The main difference is that it treats bad statuses (like 404 or 500) as errors, so you don't have to check response.ok in resolve(), which is retarded.

If response starts with '{' or '[' it is automatically parsed as JSON.

And it allows specifying timeout in 'options', which defaults to 5 seconds.

## Usage

```js
fetchit(url, [data, options]).then(function(r){...}).catch(function(error){...});
```

**data** can either be FormData or a JS object, which will then be encoded as JSON and sent as GET or POST "data" parameter.

**options**:

* **method** - 'GET' or 'POST'
* **timeout** - timeout in seconds, default is 5
* **credentials** - 'include' or 'omit'
* **headers** - additional HTTP headers

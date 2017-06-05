
# The simplest CSS parser/compiler

Based on https://github.com/reworkcss/css but rewritten and greatly simplified.

## Example:

```js
var tree = css_parse('body { font-size: 12px; }');
css_compile(tree, '\n');
```

If 'silent' is set to 'true' in css_parse() it will add all the errors to the 'stylesheet.errors' array.

Otherwise it will trigger an exception (the default behaviour).

You can pass a callback function to css_compile() to be called before each node gets processed:

```js
css_compile(tree, '\n\n', function(node){ /* pre-process here */ });
```

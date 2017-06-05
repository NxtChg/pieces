
# Vue plugin for storing relevant CSS with components

## Rationale

Vue components should be stand-alone units with everything relevant embedded inside.

Unfortunately, Vue doesn't support embedded styles. You can use Webpack or Browserify, but if you don't want to, then there is no suitable solution.

This plugin inserts itself on top of Vue.component() and if there is a "style" member present in component's definition, it adds it to the page.

CSS selectors are prefixed with the name of the component, for example:

```js
Vue.component('my-component',
{
	template: '<div class="my-component"><span>Hello</span>, <p class="this-too">world!</p></div>',

	style:    'span, .this-too{ font-color: red }'
});
```

will add ```.my-component span, .my-component .this-too{ font-color: red }``` to the page.

This means that the root element of your component must have the same class as its name.

## Usage

Simply add 'vue-css.js' file into your project.

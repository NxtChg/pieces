
# Very simple Vue breadcrumbs in 40 lines of code

Works with multi-level paths without the need for child views. For example: "/foo/bar" and "/foo/boo" or even "/foo/:id" can all be used at the same level with a single router-view. Supports child views too.

Requires: [vue-router](https://github.com/vuejs/vue-router).

## Live Demo

https://nxtchg.github.io/pieces/vue/vs-crumbs/#/foo/bar

## Props

* **root** - name of the root element, default is 'home'

## Usage

Simply add 'vs-crumbs.js' file into your project and insert one or more tags anywhere:

```html
<vs-crumbs></vs-crumbs>
```

By default, the component uses router path to display breadcrumbs names.

You can override this with custom names by using **meta.crumbs**:

```js
{ path: '/foo/bar', component: FooBar, meta: { crumbs: '/My Foo/My Bar'} }
```

This component also sets page title to "home : foo : bar".

See the "test/index.html" file for more examples of how to use it.

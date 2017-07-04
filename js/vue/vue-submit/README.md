
# 'Submit' button with built-in progress indicator

Simple implementation of Ladda ([1](http://lab.hakim.se/ladda/), [2](https://msurguy.github.io/ladda-bootstrap/)) in less than 90 lines of code with no dependencies.

It can use Bootstrap 3 button styles or you can style it yourself.

![vue-submit example](vue-submit-example.png)

## Live Demo

http://nxtchg.github.io/pieces/vue/vue-submit/

## Props

* **disabled** - Boolean, works the same as regular "disabled" attribute.
* **progress** - Number, if (> 0 && < 100) the button will disable itself, and display progress bar and the spinning circle.
* **autoProgress** - Number, if > 0 the button will display fake automatic progress (similar to [vue-top-progress-bar](https://github.com/dalphyx/vue-top-progress)).

**autoProgress** determines the time in milliseconds to reach 100%. You should set it to your typical response time.
Default is 3000 ms.

The progress bar will never reach 100%, however, and will be stuck at 95% until you set it manually to either 0 or 100, in which case the button will return to its normal state.

If **autoProgress** is set to 0, you should provide the progress values yourself via the **progress** prop.

If you don't want the progress bar to be displayed, set the **progress** to 0.1 and don't update it until finished (then set it to 0).

The automatic progression is logarithmic; this means the progress bar will move slower and slower as it goes higher.

## Usage

Simply add "vue-submit.min.js" file into your project.

```html
<vue-submit class="btn btn-primary" :progress="progress">Send</vue-submit>
```

(NOTE: The component adds "@keyframes spin" rule into your page CSS).

See the "test/index.html" file for more examples of how to use it.

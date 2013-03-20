## Variables

Variable mixin for [rework](https://github.com/visionmedia/rework).

### API

```js
var reworkVariables = require('rework-variables')

var variables = {
  gray: '#999',
  black: '#333'
}

var css = rework(inputCSS)
  .use(reworkVariables(variables))
  .toString()
```

`reworkVariables` takes a dictionary of variables.
That's it.

In your CSS, you then reference your variables by prefixing a `$`.
For example:

```css
.gray {
  color: $gray;
}
```

will become:

```css
.gray {
  color: #999;
}
```

#### Media Queries

Media queries will automatically be checked whether they are variables without or without the `$`.
Thus, do not use variables like `all` or `screen` and use that media query.

```css
@media gray {
  body {
    color: gray;
  }
}
```

would yield:

```css
@media #999 {
  body {
    color: gray;
  }
}
```

which you would not want.

#### Selectors

Variables do not work in selectors.

### Compatibility

IE9+

### License

WTFPL
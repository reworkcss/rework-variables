## Variables [![Build Status](https://travis-ci.org/reworkcss/rework-variables.png)](https://travis-ci.org/reworkcss/rework-variables)

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

The MIT License (MIT)

Copyright (c) 2013 Jonathan Ong me@jongleberry.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
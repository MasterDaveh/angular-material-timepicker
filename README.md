# material-timepicker
> Lightweight Angular.js directive, Material Design compliant and customizable using [SASS variables][#sass-vars].

## Index
 - [Demo](#demo)
 - [How to install](#how-to-install)
 - [How to get started](#how-to-get-started)
 - [Contact me](#contact-me)
 - [References](#references)
 - [License](#license)

### Demo
Live demo on [CodePen][#codepen-demo].<br>
Example also included in examples folder. After downloading the repository, browse to the examples folder, open a command prompt and type:
```bash
node server
```
**Make sure to have [Node.js][#node] installed on your machine.**

### How to install
You can clone the current repository:
```bash
git clone https://github.com/MasterDaveh/angular-material-timepicker.git
```

### How to get started
You can check out the example as mentioned in the [Demo Section](#demo).
You will need to include ``material-timepicker.js``, ``tmpicker.css`` and ``material-timepicker.html`` in your project.<br>
*Note that this package depends on [Angular.js][#angular] and [Moment.js][#moment].*<br>
#### 1. Resolve the dependencies
To do so using npm run
```bash
npm install angular
```
and
```bash
npm install moment
```
**To use npm you will also need to have Node.js installed.** <br>
If you prefer to use a [CDN][#cdn] just copy these script tags:
```html
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>
```
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.15.1/moment.min.js"></script>
```
and include them in your page.
#### 2. Include the directive
*Make sure to have loaded the ``material-timepicker.js``, ``tmpicker.css`` and ``material-timepicker.html`` files also.* <br>
The directive is an HTML element so you will include it as follows:
```html
<material-timepicker model="model" url="template/material-timepicker.html"></material-timepicker>
```
The *model* attribute is the variable the selected hour will be tied to. <br>
The *url* attribute is the path to the ``material-timepicker.html`` file, so that it can be injected into the directive. <br><br>
You will also need to inject the directive module in your module to make it available. Include the module name into the array of dependencies of your angular module:
```javascript
angular.module('exampleApp', ['material.timepicker'])
```
Finally, create a model for the timepicker in the controller that your directive is included into
```javascript
.controller('mainCtrl', function($scope) {
  $scope.model = moment(); // the model needs to be a moment value
});
```


### Contact me
If you find bugs feel free to open an issue and/or send a pull request. <br>
If you feel something is not clear, or the documentation needs to be updated send me a DM on [Twitter][#masterdave-twitter] or on [Facebook][#masterdave-fb]
### References
*This directive was inspired by [sidaudhi's work][#sidaudhi-quote] on the circular timepicker directive.*
### License
The MIT License (MIT)

Copyright (c) 2016 [Masterdaveh](https://github.com/MasterDaveh)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


[#sass-vars]:           http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variables_
[#codepen-demo]:        http://codepen.io/masterdave/pen/ALQbaz
[#node]:                https://nodejs.org/en/
[#angular]:             https://angularjs.org/
[#moment]:              http://momentjs.com/docs/
[#cdn]:                 https://en.wikipedia.org/wiki/Content_delivery_network
[#masterdave-twitter]:  https://twitter.com/masterdaveh
[#masterdave-fb]:       https://www.facebook.com/davide.vico.5
[#sidaudhi-quote]:      https://github.com/sidaudhi/angular-circular-timepicker

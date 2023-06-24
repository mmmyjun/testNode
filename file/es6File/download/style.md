his._queue[0];
    this._queue.splice(0, 1);
    return value;
  }
}
```

使用`extends`实现继承，因为这样更简单，不会有破坏`instanceof`运算的危险。

```javascript
// bad
const inherits = require('inherits');
function PeekableQueue(contents) {
  Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function() {
  return this._queue[0];
}

// good
class PeekableQueue extends Queue {
  peek() {
    return this._queue[0];
  }
}
```

## 模块

ES6 模块语法是 JavaScript 模块的标准写法，坚持使用这种写法，取代 Node.js 的 CommonJS 语法。

首先，使用`import`取代`require()`。

```javascript
// CommonJS 的写法
const moduleA = require('moduleA');
const func1 = moduleA.func1;
const func2 = moduleA.func2;

// ES6 的写法
import { func1, func2 } from 'moduleA';
```

其次，使用`export`取代`module.exports`。

```javascript
// commonJS 的写法
var React = require('react');

var Breadcrumbs = React.createClass({
  render() {
    return <nav />;
  }
});

module.exports = Breadcrumbs;

// ES6 的写法
import React from 'react';

class Breadcrumbs extends React.Component {
  render() {
    return <nav />;
  }
};

export default Breadcrumbs;
```

如果模块只有一个输出值，就使用`export default`，如果模块有多个输出值，除非其中某个输出值特别重要，否则建议不要使用`export default`，即多个输出值如果是平等关系，`export default`与普通的`export`就不要同时使用。

如果模块默认输出一个函数，函数名的首字母应该小写，表示这是一个工具方法。

```javascript
function makeStyleGuide() {
}

export default makeStyleGuide;
```

如果模块默认输出一个对象，对象名的首字母应该大写，表示这是一个配置值对象。

```javascript
const StyleGuide = {
  es6: {
  }
};

export default StyleGuide;
```

## ESLint 的使用

ESLint 是一个语法规则和代码风格的检查工具，可以用来保证写出语法正确、风格统一的代码。

首先，在项目的根目录安装 ESLint。

```bash
$ npm install --save-dev eslint
```

然后，安装 Airbnb 语法规则，以及 import、a11y、react 插件。

```bash
$ npm install --save-dev eslint-config-airbnb
$ npm install --save-dev eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
```

最后，在项目的根目录下新建一个`.eslintrc`文件，配置 ESLint。

```javascript
{
  "extends": "eslint-config-airbnb"
}
```

现在就可以检查，当前项目的代码是否符合预设的规则。

`index.js`文件的代码如下。

```javascript
var unused = 'I have no purpose!';

function greet() {
    var message = 'Hello, World!';
    console.log(message);
}

greet();
```

使用 ESLint 检查这个文件，就会报出错误。

```bash
$ npx eslint index.js
index.js
  1:1  error  Unexpected var, use let or const instead          no-var
  1:5  error  unused is defined but never used                 no-unused-vars
  4:5  error  Expected indentation of 2 characters but found 4  indent
  4:5  error  Unexpected var, use let or const instead          no-var
  5:5  error  Expected indentation of 2 characters but found 4  indent

✖ 5 problems (5 errors, 0 warnings)
```

上面代码说明，原文件有五个错误，其中两个是不应该使用`var`命令，而要使用`let`或`const`；一个是定义了变量，却没有使用；另外两个是行首缩进为 4 个空格，而不是规定的 2 个空格。


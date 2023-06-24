��本的第一行，用来指定脚本的执行器。

比如 Bash 脚本的第一行。

```bash
#!/bin/sh
```

Python 脚本的第一行。

```python
#!/usr/bin/env python
```

现在有一个[提案](https://github.com/tc39/proposal-hashbang)，为 JavaScript 脚本引入了`#!`命令，写在脚本文件或者模块文件的第一行。

```javascript
// 写在脚本文件第一行
#!/usr/bin/env node
'use strict';
console.log(1);

// 写在模块文件第一行
#!/usr/bin/env node
export {};
console.log(1);
```

有了这一行以后，Unix 命令行就可以直接执行脚本。

```bash
# 以前执行脚本的方式
$ node hello.js

# hashbang 的方式
$ ./hello.js
```

对于 JavaScript 引擎来说，会把`#!`理解成注释，忽略掉这一行。

## import.meta

开发者使用一个模块时，有时需要知道模板本身的一些信息（比如模块的路径）。现在有一个[提案](https://github.com/tc39/proposal-import-meta)，为 import 命令添加了一个元属性`import.meta`，返回当前模块的元信息。

`import.meta`只能在模块内部使用，如果在模块外部使用会报错。

这个属性返回一个对象，该对象的各种属性就是当前运行的脚本的元信息。具体包含哪些属性，标准没有规定，由各个运行环境自行决定。一般来说，`import.meta`至少会有下面两个属性。

**（1）import.meta.url**

`import.meta.url`返回当前模块的 URL 路径。举例来说，当前模块主文件的路径是`https://foo.com/main.js`，`import.meta.url`就返回这个路径。如果模块里面还有一个数据文件`data.txt`，那么就可以用下面的代码，获取这个数据文件的路径。

```javascript
new URL('data.txt', import.meta.url)
```

注意，Node.js 环境中，`import.meta.url`返回的总是本地路径，即是`file:URL`协议的字符串，比如`file:///home/user/foo.js`。

**（2）import.meta.scriptElement**

`import.meta.scriptElement`是浏览器特有的元属性，返回加载模块的那个`<script>`元素，相当于`document.currentScript`属性。

```javascript
// HTML 代码为
// <script type="module" src="my-module.js" data-foo="abc"></script>

// my-module.js 内部执行下面的代码
import.meta.scriptElement.dataset.foo
// "abc"
```

## JSON 模块

import 命令目前只能用于加载 ES 模块，现在有一个[提案](https://github.com/tc39/proposal-json-modules)，允许加载 JSON 模块。

假定有一个 JSON 模块文件`config.json`。

```javascript
{
  "appName": "My App"
}
```

目前，只能使用`fetch()`加载 JSON 模块。

```javascript
const response = await fetch('./config.json');
const json = await response.json();
```

import 命令能够直接加载 JSON 模块以后，就可以像下面这样写。

```javascript
import configData from './config.json' assert { type: "json" };
console.log(configData.appName);
```

上面示例中，整个 JSON 对象被导入为`configData`对象，然后就可以从该对象获取 JSON 数据。

`import`命令导入 JSON 模块时，命令结尾的`assert {type: "json"}`不可缺少。这叫做导入断言，用来告诉 JavaScript 引擎，现在加载的是 JSON 模块。你可能会问，为什么不通过`.json`后缀名判断呢？因为浏览器的传统是不通过后缀名判断文件类型，标准委员会希望遵循这种做法，这样也可以避免一些安全问题。

导入断言是 JavaScript 导入其他格式模块的标准写法，JSON 模块将是第一个使用这种语法导入的模块。以后，还会支持导入 CSS 模块、HTML 模块等等。

动态加载模块的`import()`函数也支持加载 JSON 模块。

```javascript
import('./config.json', { assert: { type: 'json' } })
```

脚本加载 JSON 模块以后，还可以再用 export 命令输出。这时，可以将 export 和 import 结合成一个语句。

```javascript
export { config } from './config.json' assert { type: 'json' };
```


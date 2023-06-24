ate class fields](https://jamie.build/javascripts-new-private-class-fields.html)：私有属性的介绍。
- Mathias Bynens, [Public and private class fields](https://developers.google.com/web/updates/2018/12/class-fields)：实例属性的新写法的介绍。

## Decorator

- Maximiliano Fierro, [Declarative vs Imperative](https://elmasse.github.io/js/decorators-bindings-es7.html): Decorators 和 Mixin 介绍
- Justin Fagnani, ["Real" Mixins with JavaScript Classes](http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/): 使用类的继承实现 Mixin
- Addy Osmani, [Exploring ES2016 Decorators](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841): Decorator 的深入介绍
- Sebastian McKenzie, [Allow decorators for functions as well](https://github.com/wycats/javascript-decorators/issues/4): 为什么修饰器不能用于函数
- Maximiliano Fierro, [Traits with ES7 Decorators](https://cocktailjs.github.io/blog/traits-with-es7-decorators.html): Trait 的用法介绍
- Jonathan Creamer: [Using ES2016 Decorators to Publish on an Event Bus](http://jonathancreamer.com/using-es2016-decorators-to-publish-on-an-event-bus/): 使用修饰器实现自动发布事件

## Module

- Jack Franklin, [JavaScript Modules the ES6 Way](http://24ways.org/2014/javascript-modules-the-es6-way/): ES6 模块入门
- Axel Rauschmayer, [ECMAScript 6 modules: the final syntax](https://2ality.com/2014/09/es6-modules-final.html): ES6 模块的介绍，以及与 CommonJS 规格的详细比较
- Dave Herman, [Static module resolution](http://calculist.org/blog/2012/06/29/static-module-resolution/): ES6 模块的静态化设计思想
- Jason Orendorff, [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/): ES6 模块设计思想的介绍
- Ben Newman, [The Importance of import and export](https://benjamn.github.io/empirenode-2015/#/): ES6 模块的设计思想
- ESDiscuss, [Why is "export default var a = 1;" invalid syntax?](https://esdiscuss.org/topic/why-is-export-default-var-a-1-invalid-syntax)
- Bradley Meck, [ES6 Module Interoperability](https://github.com/nodejs/node-eps/blob/master/002-es6-modules.md): 介绍 Node 如何处理 ES6 语法加载 CommonJS 模块
- Axel Rauschmayer, [Making transpiled ES modules more spec-compliant](https://2ality.com/2017/01/babel-esm-spec-mode.html): ES6 模块编译成 CommonJS 模块的详细介绍
- Axel Rauschmayer, [ES proposal: import() – dynamically importing ES modules](https://2ality.com/2017/01/import-operator.html): import() 的用法
- Node EPS, [ES Module Interoperability](https://github.com/nodejs/node-eps/blob/master/002-es-modules.md): Node 对 ES6 模块的处理规格
- Dan Fabulich, [Why CommonJS and ES Modules Can’t Get Along](https://redfin.engineering/node-modules-at-war-why-commonjs-and-es-modules-cant-get-along-9617135eeca1): Node.js 对 ES6 模块的处理

## 二进制数组

- Ilmari Heikkinen, [Typed Arrays: Binary Data in the Browser](http://www.html5rocks.com/en/tutorials/webgl/typed_arrays/)
- Khronos, [Typed Array Specification](http://www.khronos.org/registry/typedarray/specs/latest/)
- Ian Elliot, [Reading A BMP File In JavaScript](http://www.i-programmer.info/projects/36-web/6234-reading-a-bmp-file-in-javascript.html)
- Renato Mangini, [How to convert ArrayBuffer to and from String](http://updates.html5rocks.com/2012/06/How-to-convert-ArrayBuffer-to-and-from-String)
- Axel Rauschmayer, [Typed Arrays in ECMAScript 6](https://2ality.com/2015/09/typed-arrays.html)
- Axel Rauschmayer, [ES proposal: Shared memory and atomics](https://2ality.com/2017/01/shared-array-buffer.html)
- Lin Clark, [Avoiding race conditions in SharedArrayBuffers with Atomics](https://hacks.mozilla.org/2017/06/avoiding-race-conditions-in-sharedarraybuffers-with-atomics/): Atomics 对象使用场景的解释
- Lars T Hansen, [Shared memory - a brief tutorial](https://github.com/tc39/ecmascript_sharedmem/blob/master/TUTORIAL.md)
- James Milner, [The Return of SharedArrayBuffers and Atomics](https://www.sitepen.com/blog/2018/09/19/the-return-of-sharedarraybuffers-and-atomics/)

## SIMD

- TC39, [SIMD.js Stage 2](https://docs.google.com/presentation/d/1MY9NHrHmL7ma7C8dyNXvmYNNGgVmmxXk8ZIiQtPlfH4/edit#slide=id.p19)
- MDN, [SIMD](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD)
- TC39, [ECMAScript SIMD](https://github.com/tc39/ecmascript_simd)
- Axel Rauschmayer, [JavaScript gains support for SIMD](https://2ality.com/2013/12/simd-js.html)

## 工具

- Babel, [Babel Handbook](https://github.com/thejameskyle/babel-handbook/tree/master/translations/en): Babel 的用法介绍
- Google, [traceur-compiler](https://github.com/google/traceur-compiler): Traceur 编译器
- Casper Beyer, [ECMAScript 6 Features and Tools](https://caspervonb.github.io/2014/03/05/ecmascript6-features-and-tools.html)
- Stoyan Stefanov, [Writing ES6 today with jstransform](http://www.phpied.com/writing-es6-today-with-jstransform/)
- ES6 Module Loader, [ES6 Module Loader Polyfill](https://github.com/ModuleLoader/es6-module-loader): 在浏览器和 node.js 加载 ES6 模块的一个库，文档里对 ES6 模块有详细解释
- Paul Miller, [es6-shim](https://github.com/paulmillr/es6-shim): 一个针对老式浏览器，模拟 ES6 部分功能的垫片库（shim）
- army8735, [JavaScript Downcast](https://github.com/army8735/jsdc): 国产的 ES6 到 ES5 的转码器
- esnext, [ES6 Module Transpiler](https://github.com/esnext/es6-module-transpiler)：基于 node.js 的将 ES6 模块转为 ES5 代码的命令行工具
- Sebastian McKenzie, [BabelJS](http://babeljs.io/): ES6 转译器
- SystemJS, [SystemJS](https://github.com/systemjs/systemjs): 在浏览器中加载 AMD、CJS、ES6 模块的一个垫片库
- Modernizr, [HTML5 Cross Browser Polyfills](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills#ecmascript-6-harmony): ES6 垫片库清单
- Facebook, [regenerator](https://github.com/facebook/regenerator): 将 Generator 函数转为 ES5 的转码器

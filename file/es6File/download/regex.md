E = /^(?<word>[a-z]+)!\k<word>!\1$/;
RE_TWICE.test('abc!abc!abc') // true
RE_TWICE.test('abc!abc!ab') // false
```

## d 修饰符：正则匹配索引

组匹配的结果，在原始字符串里面的开始位置和结束位置，目前获取并不是很方便。正则实例的`exec()`方法有一个`index`属性，可以获取整个匹配结果的开始位置。但是，组匹配的每个组的开始位置，很难拿到。

[ES2022](https://github.com/tc39/proposal-regexp-match-Indices) 新增了`d`修饰符，这个修饰符可以让`exec()`、`match()`的返回结果添加`indices`属性，在该属性上面可以拿到匹配的开始位置和结束位置。

```javascript
const text = 'zabbcdef';
const re = /ab/d;
const result = re.exec(text);

result.index // 1
result.indices // [ [1, 3] ]
```

上面示例中，`exec()`方法的返回结果`result`，它的`index`属性是整个匹配结果（`ab`）的开始位置。由于正则表达式`re`有`d`修饰符，`result`现在就会多出一个`indices`属性。该属性是一个数组，它的每个成员还是一个数组，包含了匹配结果在原始字符串的开始位置和结束位置。由于上例的正则表达式`re`没有包含组匹配，所以`indices`数组只有一个成员，表示整个匹配的开始位置是`1`，结束位置是`3`。

注意，开始位置包含在匹配结果之中，相当于匹配结果的第一个字符的位置。但是，结束位置不包含在匹配结果之中，是匹配结果的下一个字符。比如，上例匹配结果的最后一个字符`b`的位置，是原始字符串的2号位，那么结束位置`3`就是下一个字符的位置。

如果正则表达式包含组匹配，那么`indices`属性对应的数组就会包含多个成员，提供每个组匹配的开始位置和结束位置。

```javascript
const text = 'zabbcdef';
const re = /ab+(cd)/d;
const result = re.exec(text);

result.indices // [ [ 1, 6 ], [ 4, 6 ] ]
```

上面例子中，正则表达式`re`包含一个组匹配`(cd)`，那么`indices`属性数组就有两个成员，第一个成员是整个匹配结果（`abbcd`）的开始位置和结束位置，第二个成员是组匹配（`cd`）的开始位置和结束位置。

下面是多个组匹配的例子。

```javascript
const text = 'zabbcdef';
const re = /ab+(cd(ef))/d;
const result = re.exec(text);

result.indices // [ [1, 8], [4, 8], [6, 8] ]
```

上面例子中，正则表达式`re`包含两个组匹配，所以`indices`属性数组就有三个成员。

如果正则表达式包含具名组匹配，`indices`属性数组还会有一个`groups`属性。该属性是一个对象，可以从该对象获取具名组匹配的开始位置和结束位置。

```javascript
const text = 'zabbcdef';
const re = /ab+(?<Z>cd)/d;
const result = re.exec(text);

result.indices.groups // { Z: [ 4, 6 ] }
```

上面例子中，`exec()`方法返回结果的`indices.groups`属性是一个对象，提供具名组匹配`Z`的开始位置和结束位置。

如果获取组匹配不成功，`indices`属性数组的对应成员则为`undefined`，`indices.groups`属性对象的对应成员也是`undefined`。

```javascript
const text = 'zabbcdef';
const re = /ab+(?<Z>ce)?/d;
const result = re.exec(text);

result.indices[1] // undefined
result.indices.groups['Z'] // undefined
```

上面例子中，由于组匹配`ce`不成功，所以`indices`属性数组和`indices.groups`属性对象对应的组匹配成员`Z`都是`undefined`。

## String.prototype.matchAll()

如果一个正则表达式在字符串里面有多个匹配，现在一般使用`g`修饰符或`y`修饰符，在循环里面逐一取出。

```javascript
var regex = /t(e)(st(\d?))/g;
var string = 'test1test2test3';

var matches = [];
var match;
while (match = regex.exec(string)) {
  matches.push(match);
}

matches
// [
//   ["test1", "e", "st1", "1", index: 0, input: "test1test2test3"],
//   ["test2", "e", "st2", "2", index: 5, input: "test1test2test3"],
//   ["test3", "e", "st3", "3", index: 10, input: "test1test2test3"]
// ]
```

上面代码中，`while`循环取出每一轮的正则匹配，一共三轮。

[ES2020](https://github.com/tc39/proposal-string-matchall) 增加了`String.prototype.matchAll()`方法，可以一次性取出所有匹配。不过，它返回的是一个遍历器（Iterator），而不是数组。

```javascript
const string = 'test1test2test3';
const regex = /t(e)(st(\d?))/g;

for (const match of string.matchAll(regex)) {
  console.log(match);
}
// ["test1", "e", "st1", "1", index: 0, input: "test1test2test3"]
// ["test2", "e", "st2", "2", index: 5, input: "test1test2test3"]
// ["test3", "e", "st3", "3", index: 10, input: "test1test2test3"]
```

上面代码中，由于`string.matchAll(regex)`返回的是遍历器，所以可以用`for...of`循环取出。相对于返回数组，返回遍历器的好处在于，如果匹配结果是一个很大的数组，那么遍历器比较节省资源。

遍历器转为数组是非常简单的，使用`...`运算符和`Array.from()`方法就可以了。

```javascript
// 转为数组的方法一
[...string.matchAll(regex)]

// 转为数组的方法二
Array.from(string.matchAll(regex))
```


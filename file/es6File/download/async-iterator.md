'b';
    yield 'c';
  }

  return await takeAsync(gen());
}

f().then(function (result) {
  console.log(result); // ['a', 'b', 'c']
})
```

异步 Generator 函数出现以后，JavaScript 就有了四种函数形式：普通函数、async 函数、Generator 函数和异步 Generator 函数。请注意区分每种函数的不同之处。基本上，如果是一系列按照顺序执行的异步操作（比如读取文件，然后写入新内容，再存入硬盘），可以使用 async 函数；如果是一系列产生相同数据结构的异步操作（比如一行一行读取文件），可以使用异步 Generator 函数。

异步 Generator 函数也可以通过`next`方法的参数，接收外部传入的数据。

```javascript
const writer = openFile('someFile.txt');
writer.next('hello'); // 立即执行
writer.next('world'); // 立即执行
await writer.return(); // 等待写入结束
```

上面代码中，`openFile`是一个异步 Generator 函数。`next`方法的参数，向该函数内部的操作传入数据。每次`next`方法都是同步执行的，最后的`await`命令用于等待整个写入操作结束。

最后，同步的数据结构，也可以使用异步 Generator 函数。

```javascript
async function* createAsyncIterable(syncIterable) {
  for (const elem of syncIterable) {
    yield elem;
  }
}
```

上面代码中，由于没有异步操作，所以也就没有使用`await`关键字。

## yield\* 语句

`yield*`语句也可以跟一个异步遍历器。

```javascript
async function* gen1() {
  yield 'a';
  yield 'b';
  return 2;
}

async function* gen2() {
  // result 最终会等于 2
  const result = yield* gen1();
}
```

上面代码中，`gen2`函数里面的`result`变量，最后的值是`2`。

与同步 Generator 函数一样，`for await...of`循环会展开`yield*`。

```javascript
(async function () {
  for await (const x of gen2()) {
    console.log(x);
  }
})();
// a
// b
```


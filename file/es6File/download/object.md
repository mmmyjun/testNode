��了一个`cause`属性，可以在生成错误时，添加报错原因的描述。

它的用法是`new Error()`生成 Error 实例时，给出一个描述对象，该对象可以设置`cause`属性。

```javascript
const actual = new Error('an error!', { cause: 'Error cause' });
actual.cause; // 'Error cause'
```

上面示例中，生成 Error 实例时，使用描述对象给出`cause`属性，写入报错的原因。然后，就可以从实例对象上读取这个属性。

`casue`属性可以放置任意内容，不必一定是字符串。

```javascript
try {
  maybeWorks();
} catch (err) {
  throw new Error('maybeWorks failed!', { cause: err });
}
```

上面示例中，`cause`属性放置的就是一个对象。


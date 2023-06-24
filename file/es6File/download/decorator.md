面代码中，通过`traits`装饰器，在`MyClass`类上面“混入”了`TFoo`类的`foo`方法和`TBar`对象的`bar`方法。

Trait 不允许“混入”同名方法。

```javascript
import { traits } from 'traits-decorator';

class TFoo {
  foo() { console.log('foo') }
}

const TBar = {
  bar() { console.log('bar') },
  foo() { console.log('foo') }
};

@traits(TFoo, TBar)
class MyClass { }
// 报错
// throw new Error('Method named: ' + methodName + ' is defined twice.');
//        ^
// Error: Method named: foo is defined twice.
```

上面代码中，`TFoo`和`TBar`都有`foo`方法，结果`traits`装饰器报错。

一种解决方法是排除`TBar`的`foo`方法。

```javascript
import { traits, excludes } from 'traits-decorator';

class TFoo {
  foo() { console.log('foo') }
}

const TBar = {
  bar() { console.log('bar') },
  foo() { console.log('foo') }
};

@traits(TFoo, TBar::excludes('foo'))
class MyClass { }

let obj = new MyClass();
obj.foo() // foo
obj.bar() // bar
```

上面代码使用绑定运算符（::）在`TBar`上排除`foo`方法，混入时就不会报错了。

另一种方法是为`TBar`的`foo`方法起一个别名。

```javascript
import { traits, alias } from 'traits-decorator';

class TFoo {
  foo() { console.log('foo') }
}

const TBar = {
  bar() { console.log('bar') },
  foo() { console.log('foo') }
};

@traits(TFoo, TBar::alias({foo: 'aliasFoo'}))
class MyClass { }

let obj = new MyClass();
obj.foo() // foo
obj.aliasFoo() // foo
obj.bar() // bar
```

上面代码为`TBar`的`foo`方法起了别名`aliasFoo`，于是`MyClass`也可以混入`TBar`的`foo`方法了。

`alias`和`excludes`方法，可以结合起来使用。

```javascript
@traits(TExample::excludes('foo','bar')::alias({baz:'exampleBaz'}))
class MyClass {}
```

上面代码排除了`TExample`的`foo`方法和`bar`方法，为`baz`方法起了别名`exampleBaz`。

`as`方法则为上面的代码提供了另一种写法。

```javascript
@traits(TExample::as({excludes:['foo', 'bar'], alias: {baz: 'exampleBaz'}}))
class MyClass {}
```


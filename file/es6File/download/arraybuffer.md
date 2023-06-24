 = 100;
Atomics.store(sharedArray, 0, newArrayValue);
const arrayIndex = 0;
const queuePos = 1;
Atomics.notify(sharedArray, arrayIndex, queuePos);
```

上面代码中，`sharedArray`的`0`号位置改为`100`，然后就执行`Atomics.notify()`方法，唤醒在`sharedArray`的`0`号位置休眠队列里的一个线程。

`Atomics.wait()`方法的使用格式如下。

```javascript
Atomics.wait(sharedArray, index, value, timeout)
```

它的四个参数含义如下。

- sharedArray：共享内存的视图数组。
- index：视图数据的位置（从0开始）。
- value：该位置的预期值。一旦实际值等于预期值，就进入休眠。
- timeout：整数，表示过了这个时间以后，就自动唤醒，单位毫秒。该参数可选，默认值是`Infinity`，即无限期的休眠，只有通过`Atomics.notify()`方法才能唤醒。

`Atomics.wait()`的返回值是一个字符串，共有三种可能的值。如果`sharedArray[index]`不等于`value`，就返回字符串`not-equal`，否则就进入休眠。如果`Atomics.notify()`方法唤醒，就返回字符串`ok`；如果因为超时唤醒，就返回字符串`timed-out`。

`Atomics.notify()`方法的使用格式如下。

```javascript
Atomics.notify(sharedArray, index, count)
```

它的三个参数含义如下。

- sharedArray：共享内存的视图数组。
- index：视图数据的位置（从0开始）。
- count：需要唤醒的 Worker 线程的数量，默认为`Infinity`。

`Atomics.notify()`方法一旦唤醒休眠的 Worker 线程，就会让它继续往下运行。

请看一个例子。

```javascript
// 主线程
console.log(ia[37]);  // 163
Atomics.store(ia, 37, 123456);
Atomics.notify(ia, 37, 1);

// Worker 线程
Atomics.wait(ia, 37, 163);
console.log(ia[37]);  // 123456
```

上面代码中，视图数组`ia`的第 37 号位置，原来的值是`163`。Worker 线程使用`Atomics.wait()`方法，指定只要`ia[37]`等于`163`，就进入休眠状态。主线程使用`Atomics.store()`方法，将`123456`写入`ia[37]`，然后使用`Atomics.notify()`方法唤醒 Worker 线程。

另外，基于`wait`和`notify`这两个方法的锁内存实现，可以看 Lars T Hansen 的 [js-lock-and-condition](https://github.com/lars-t-hansen/js-lock-and-condition) 这个库。

注意，浏览器的主线程不宜设置休眠，这会导致用户失去响应。而且，主线程实际上会拒绝进入休眠。

**（4）运算方法**

共享内存上面的某些运算是不能被打断的，即不能在运算过程中，让其他线程改写内存上面的值。Atomics 对象提供了一些运算方法，防止数据被改写。

```javascript
Atomics.add(sharedArray, index, value)
```

`Atomics.add`用于将`value`加到`sharedArray[index]`，返回`sharedArray[index]`旧的值。

```javascript
Atomics.sub(sharedArray, index, value)
```

`Atomics.sub`用于将`value`从`sharedArray[index]`减去，返回`sharedArray[index]`旧的值。

```javascript
Atomics.and(sharedArray, index, value)
```

`Atomics.and`用于将`value`与`sharedArray[index]`进行位运算`and`，放入`sharedArray[index]`，并返回旧的值。

```javascript
Atomics.or(sharedArray, index, value)
```

`Atomics.or`用于将`value`与`sharedArray[index]`进行位运算`or`，放入`sharedArray[index]`，并返回旧的值。

```javascript
Atomics.xor(sharedArray, index, value)
```

`Atomic.xor`用于将`vaule`与`sharedArray[index]`进行位运算`xor`，放入`sharedArray[index]`，并返回旧的值。

**（5）其他方法**

`Atomics`对象还有以下方法。

- `Atomics.compareExchange(sharedArray, index, oldval, newval)`：如果`sharedArray[index]`等于`oldval`，就写入`newval`，返回`oldval`。
- `Atomics.isLockFree(size)`：返回一个布尔值，表示`Atomics`对象是否可以处理某个`size`的内存锁定。如果返回`false`，应用程序就需要自己来实现锁定。

`Atomics.compareExchange`的一个用途是，从 SharedArrayBuffer 读取一个值，然后对该值进行某个操作，操作结束以后，检查一下 SharedArrayBuffer 里面原来那个值是否发生变化（即被其他线程改写过）。如果没有改写过，就将它写回原来的位置，否则读取新的值，再重头进行一次操作。


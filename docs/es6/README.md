# ES6 基础知识

## 一、ES6部分

### 1 对ES6的了解？

> 新增模板字符串（为JavaScript提供了简单的字符串插值功能）、箭头函数（操作符左边为输入的参数，而右边则是进行的操作以及返回的值Inputs=>outputs。）、for-of（用来遍历数据—例如数组中的值。）arguments对象可被不定参数和默认参数完美代替。ES6将Promise对象纳入规范，提供了原生的Promise对象。增加了let和const命令，用来声明变量。增加了块级作用域。let命令实际上就增加了块级作用域。ES6规定，var命令和function命令声明的全局变量，属于全局对象的属性；let命令、const命令、class命令声明的全局变量，不属于全局对象的属性。还有就是引入module模块的概念.

```
    1、let关键字，用于声明只在块级作用域起作用的变量。
    2、const关键字，用于声明一个常量。
    3、结构赋值，一种新的变量赋值方式。常用于交换变量值，提取函数返回值，设置默认值。
    4、Symbol数据类型，定义一个独一无二的值。
    5、Proxy代理，用于编写处理函数，来拦截目标对象的操作。
    6、for...of遍历，可遍历具有iterator 接口的数据结构。
    7、Set结构，存储不重复的成员值的集合。
    8、Map结构，键名可以是任何类型的键值对集合。
    9、Promise对象，更合理、规范地处理异步操作。
    10、Class类定义类和更简便地实现类的继承。
    
```

### 2. let，const的区别？

> `let` 产生块级作用域（通常配合 `for` 循环或者 `{}` 进行使用产生块级作用域），`const` 申明的变量是常量（内存地址不变）

### 3. Promise的使用？

> 这里你谈 `promise`的时候，除了将他解决的痛点以及常用的 `API` 之外，最好进行拓展把 `eventloop` 带进来好好讲一下，`microtask`(微任务)、`macrotask`(任务) 的执行顺序，如果看过 `promise` 源码，最好可以谈一谈 原生 `Promise` 是如何实现的。`Promise` 的关键点在于`callback` 的两个参数，一个是 `resovle`，一个是 `reject`。还有就是 `Promise` 的链式调用（`Promise.then()`，每一个 `then` 都是一个责任人）

### 4. Generator

> 遍历器对象生成函数，最大的特点是可以交出函数的执行权

- `function` 关键字与函数名之间有一个星号；
- 函数体内部使用 `yield`表达式，定义不同的内部状态；
- `next `指针移向下一个状态

> 这里你可以说说 `Generator`的异步编程，以及它的语法糖 `async` 和 `awiat`，传统的异步编程。`ES6` 之前，异步编程大致如下

- 回调函数
- 事件监听
- 发布/订阅

> 传统异步编程方案之一：协程，多个线程互相协作，完成异步任务。

### 5. async、await

> `Generator` 函数的语法糖。有更好的语义、更好的适用性、返回值是 `Promise`。

- `async => *`
- `await => yield`

```js
// 基本用法

async function timeout (ms) {
  await new Promise((resolve) => {
    setTimeout(resolve, ms)    
  })
}
async function asyncConsole (value, ms) {
  await timeout(ms)
  console.log(value)
}
asyncConsole('hello async and await', 1000)
```
    
### 6.  AMD，CMD，CommonJs，ES6 Module：解决原始无模块化的痛点

- **AMD**：`requirejs` 在推广过程中对模块定义的规范化产出，提前执行，推崇依赖前置
- **CMD**：`seajs` 在推广过程中对模块定义的规范化产出，延迟执行，推崇依赖就近
- **CommonJs**：模块输出的是一个值的 `copy`，运行时加载，加载的是一个对象（`module.exports` 属性），该对象只有在脚本运行完才会生成
- **ES6 Module**：模块输出的是一个值的引用，编译时输出接口，`ES6`模块不是对象，它对外接口只是一种静态定义，在代码静态解析阶段就会生成。
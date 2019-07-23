---
sidebarDepth: 4
pageClass: custom-code-highlight
---

# JavaScript总结

## 一、JavaScript

### 1. JavaScript有几种类型的值？ 它们的内存图是怎样的？

- 基本数据类型：Undefined(未定义)、Null(空)、Boolean(布尔值)、Number(数字)、String(字符串)、Symbol --栈
- 引用数据类型：Object(对象)、Array(数组)、Function(函数) -- 堆

- 两种类型的区别是：存储位置不同
- 基本数据类型是直接存储在栈(stack)中的简单数据段，占据空间小、大小固定，属于被频繁使用数据；
- 引用数据类型存储在堆(heap)中的对象，占据空间大、大小不固定，如果存储在栈中，将会影响程序运行的性能；
- 引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。
- 当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。

### 2. 如何区分JavaScript数据类型？

  1. typeof   返回值有6种(String、Number、Boolean、Null、Undefined、Object)，都为字符串形式,无法区分null，{ }，[ ],返回结果都为Object类型。

  ```
    typeof  123　　         //Number

    typeof 'abc'　　        //String

    typeof  true           //Boolean

    typeof  undefined      //Undefined

    typeof  null           //Object 

    typeof  { }            //Object

    typeof  [ ]            //Object

    typeof  console.log()  //Function
  ```

  2. Object.prototype.toString.call(需要检查的对象)   可以区分null，{ }，[ ]的数据类型，可以用来区分基本数据类型，原生引用类型，以及判断原生JSON对象。

  - 判断基本类型

    ```
    Object.prototype.toString.call(null);        //"[object Null]"
    Object.prototype.toString.call(undefined);   //"[object Undefined]"
    Object.prototype.toString.call("abc");       //"[object String]"
    Object.prototype.toString.call(123);         //"[object Number]"
    Object.prototype.toString.call(true);        //"[object Boolean]"
    ```
  - 判断原生引用类型
    - 函数类型
    ```
    Function fn(){console.log(“test”);}
    Object.prototype.toString.call(fn);   //"[object Function]"
    ```
    - 数组类型
    ```
    var arr = [1,2,3];
    Object.prototype.toString.call(arr);  //"[object Array]"
    ```
  3. instanceof 用来判断某个构造函数的prototype属性所指向的对象是否存在于另外一个要检测对象的原型链上， 简单说就是判断一个引用类型的变量具体是不是某种类型的对象。

  ```
    ({}) instanceof Object              // true
    ([]) instanceof Array               // true
    (/aa/g) instanceof RegExp           // true
    (function(){}) instanceof Function  // true

  ```

### 3. 介绍JavaScript有哪些内置对象？

- 数据封装类对象：Object、Array、Boolean、Number、String
- 其他对象：Function、Arguments、Math、Date、RegExp、Error
- ES6新增对象：Symbol、Map、Set、Promises、Proxy、Reflect

### 4. JavaScript的组成？
 
- JavaScript 由以下三部分组成：
  - ECMAScript（核心）：JavaScript 语言基础
  - DOM（文档对象模型）：规定了访问HTML和XML的接口
  - BOM（浏览器对象模型）：提供了浏览器窗口之间进行交互的对象和方法

### 5. JavaScript的原型，原型链 ? 有什么特点？

- 原型：
  - JavaScript的所有对象中都包含了一个 [__proto__] 内部属性，这个属性所对应的就是该对象的原型
  - JavaScript的函数对象，除了原型 [__proto__] 之外，还预置了 prototype 属性
  - 当函数对象作为构造函数创建实例时，该 prototype 属性值将被作为实例对象的原型 [__proto__]。

- 原型链：
  -  当一个对象调用的属性/方法自身不存在时，就会去自己 [__proto__] 关联的前辈 prototype 对象上去找
  -  如果没找到，就会去该 prototype 原型 [__proto__] 关联的前辈 prototype 去找。依次类推，直到找到属性/方法或 undefined 为止。从而形成了所谓的“原型链”
  

- 原型特点：
  - JavaScript对象是通过引用来传递的，当修改原型时，与之相关的对象也会继承这一改变

### 6. 什么是闭包？闭包的作用？
> 牵扯作用域，可以两者联系起来一起谈

### 7. JavaScript的作用域？
> 词法作用域，动态作用域

### 8. this指向什么？

> 不同情况的调用，`this`指向分别如何。顺带可以提一下 `es6` 中箭头函数没有 `this`, `arguments`, `super` 等，这些只依赖包含箭头函数最接近的函数

### 9. call，apply，bind 三者用法和区别？

> 参数、绑定规则（显示绑定和强绑定），运行效率（最终都会转换成一个一个的参数去运行）、运行情况（`call`，`apply` 立即执行，`bind` 是`return` 出一个 `this` “固定”的函数，这也是为什么 `bind` 是强绑定的一个原因）

> 注：“固定”这个词的含义，它指的固定是指只要传进去了 `context`，则 `bind` 中 `return` 出来的函数 `this` 便一直指向 `context`，除非 `context` 是个变量

### 10. 变量声明提升？

> `js` 代码在运行前都会进行 `AST` 解析，函数申明默认会提到当前作用域最前面，变量申明也会进行提升。但赋值不会得到提升。关于 `AST` 解析，这里也可以说是形成词法作用域的主要原因

### 11. 

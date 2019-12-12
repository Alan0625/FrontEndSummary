(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{192:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"es6-基础知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6-基础知识","aria-hidden":"true"}},[t._v("#")]),t._v(" ES6 基础知识")]),t._v(" "),a("h2",{attrs:{id:"一、es6部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、es6部分","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、ES6部分")]),t._v(" "),a("h3",{attrs:{id:"_1-对es6的了解？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-对es6的了解？","aria-hidden":"true"}},[t._v("#")]),t._v(" 1 对ES6的了解？")]),t._v(" "),a("blockquote",[a("p",[t._v("新增模板字符串（为JavaScript提供了简单的字符串插值功能）、箭头函数（操作符左边为输入的参数，而右边则是进行的操作以及返回的值Inputs=>outputs。）、for-of（用来遍历数据—例如数组中的值。）arguments对象可被不定参数和默认参数完美代替。ES6将Promise对象纳入规范，提供了原生的Promise对象。增加了let和const命令，用来声明变量。增加了块级作用域。let命令实际上就增加了块级作用域。ES6规定，var命令和function命令声明的全局变量，属于全局对象的属性；let命令、const命令、class命令声明的全局变量，不属于全局对象的属性。还有就是引入module模块的概念.")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    1、let关键字，用于声明只在块级作用域起作用的变量。\n    2、const关键字，用于声明一个常量。\n    3、结构赋值，一种新的变量赋值方式。常用于交换变量值，提取函数返回值，设置默认值。\n    4、Symbol数据类型，定义一个独一无二的值。\n    5、Proxy代理，用于编写处理函数，来拦截目标对象的操作。\n    6、for...of遍历，可遍历具有iterator 接口的数据结构。\n    7、Set结构，存储不重复的成员值的集合。\n    8、Map结构，键名可以是任何类型的键值对集合。\n    9、Promise对象，更合理、规范地处理异步操作。\n    10、Class类定义类和更简便地实现类的继承。\n    \n")])])]),a("h3",{attrs:{id:"_2-let，const的区别？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-let，const的区别？","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. let，const的区别？")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("let")]),t._v(" 产生块级作用域（通常配合 "),a("code",[t._v("for")]),t._v(" 循环或者 "),a("code",[t._v("{}")]),t._v(" 进行使用产生块级作用域），"),a("code",[t._v("const")]),t._v(" 申明的变量是常量（内存地址不变）")])]),t._v(" "),a("h3",{attrs:{id:"_3-promise的使用？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-promise的使用？","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. Promise的使用？")]),t._v(" "),a("blockquote",[a("p",[t._v("这里你谈 "),a("code",[t._v("promise")]),t._v("的时候，除了将他解决的痛点以及常用的 "),a("code",[t._v("API")]),t._v(" 之外，最好进行拓展把 "),a("code",[t._v("eventloop")]),t._v(" 带进来好好讲一下，"),a("code",[t._v("microtask")]),t._v("(微任务)、"),a("code",[t._v("macrotask")]),t._v("(任务) 的执行顺序，如果看过 "),a("code",[t._v("promise")]),t._v(" 源码，最好可以谈一谈 原生 "),a("code",[t._v("Promise")]),t._v(" 是如何实现的。"),a("code",[t._v("Promise")]),t._v(" 的关键点在于"),a("code",[t._v("callback")]),t._v(" 的两个参数，一个是 "),a("code",[t._v("resovle")]),t._v("，一个是 "),a("code",[t._v("reject")]),t._v("。还有就是 "),a("code",[t._v("Promise")]),t._v(" 的链式调用（"),a("code",[t._v("Promise.then()")]),t._v("，每一个 "),a("code",[t._v("then")]),t._v(" 都是一个责任人）")])]),t._v(" "),a("h3",{attrs:{id:"_4-generator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-generator","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. Generator")]),t._v(" "),a("blockquote",[a("p",[t._v("遍历器对象生成函数，最大的特点是可以交出函数的执行权")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("function")]),t._v(" 关键字与函数名之间有一个星号；")]),t._v(" "),a("li",[t._v("函数体内部使用 "),a("code",[t._v("yield")]),t._v("表达式，定义不同的内部状态；")]),t._v(" "),a("li",[a("code",[t._v("next")]),t._v("指针移向下一个状态")])]),t._v(" "),a("blockquote",[a("p",[t._v("这里你可以说说 "),a("code",[t._v("Generator")]),t._v("的异步编程，以及它的语法糖 "),a("code",[t._v("async")]),t._v(" 和 "),a("code",[t._v("awiat")]),t._v("，传统的异步编程。"),a("code",[t._v("ES6")]),t._v(" 之前，异步编程大致如下")])]),t._v(" "),a("ul",[a("li",[t._v("回调函数")]),t._v(" "),a("li",[t._v("事件监听")]),t._v(" "),a("li",[t._v("发布/订阅")])]),t._v(" "),a("blockquote",[a("p",[t._v("传统异步编程方案之一：协程，多个线程互相协作，完成异步任务。")])]),t._v(" "),a("h3",{attrs:{id:"_5-async、await"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-async、await","aria-hidden":"true"}},[t._v("#")]),t._v(" 5. async、await")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("Generator")]),t._v(" 函数的语法糖。有更好的语义、更好的适用性、返回值是 "),a("code",[t._v("Promise")]),t._v("。")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("async => *")])]),t._v(" "),a("li",[a("code",[t._v("await => yield")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 基本用法")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeout")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ms")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("asyncConsole")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ms")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("asyncConsole")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello async and await'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"_6-amd，cmd，commonjs，es6-module：解决原始无模块化的痛点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-amd，cmd，commonjs，es6-module：解决原始无模块化的痛点","aria-hidden":"true"}},[t._v("#")]),t._v(" 6.  AMD，CMD，CommonJs，ES6 Module：解决原始无模块化的痛点")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("AMD")]),t._v("："),a("code",[t._v("requirejs")]),t._v(" 在推广过程中对模块定义的规范化产出，提前执行，推崇依赖前置")]),t._v(" "),a("li",[a("strong",[t._v("CMD")]),t._v("："),a("code",[t._v("seajs")]),t._v(" 在推广过程中对模块定义的规范化产出，延迟执行，推崇依赖就近")]),t._v(" "),a("li",[a("strong",[t._v("CommonJs")]),t._v("：模块输出的是一个值的 "),a("code",[t._v("copy")]),t._v("，运行时加载，加载的是一个对象（"),a("code",[t._v("module.exports")]),t._v(" 属性），该对象只有在脚本运行完才会生成")]),t._v(" "),a("li",[a("strong",[t._v("ES6 Module")]),t._v("：模块输出的是一个值的引用，编译时输出接口，"),a("code",[t._v("ES6")]),t._v("模块不是对象，它对外接口只是一种静态定义，在代码静态解析阶段就会生成。")])])])},[],!1,null,null,null);s.default=n.exports}}]);
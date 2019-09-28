FrontEnd Interview
<!-- 慕课前端面试课笔记 -->

- [1. ES6 语法](#1-es6-语法)
    - [1.1. 问题](#11-问题)
    - [1.2. 模块化](#12-模块化)
    - [1.3. Class](#13-class)
        - [1.3.1. Class 和 普通构造函数有何区别](#131-class-和-普通构造函数有何区别)
    - [1.4. Promise](#14-promise)
    - [1.5. ES6 其他常用功能](#15-es6-其他常用功能)
        - [1.5.1. let/const](#151-letconst)
        - [1.5.2. 多行字符 / 模板字符串 （都得用反引号）](#152-多行字符--模板字符串-都得用反引号)
        - [1.5.3. 解构赋值](#153-解构赋值)
        - [1.5.4. 块级作用域（ 在代码块 ```{}``` 中声明的变量，在块外访问不到 ）](#154-块级作用域-在代码块--中声明的变量在块外访问不到-)
        - [1.5.5. 函数默认参数](#155-函数默认参数)
        - [1.5.6. 箭头函数](#156-箭头函数)
        - [1.5.7. 箭头函数 特别重要的特点：](#157-箭头函数-特别重要的特点)
        - [2. 原型](#2-原型)
    - [2.1. 实际应用 - zepto 如何使用原型](#21-实际应用---zepto-如何使用原型)
    - [2.2. 实际应用 - jQuery 如何使用原型](#22-实际应用---jquery-如何使用原型)
    - [2.3. 问题解答](#23-问题解答)
    - [2.4. 如何体现原型的扩展性](#24-如何体现原型的扩展性)
    - [3. 异步](#3-异步)
    - [3.1. 单线程、异步](#31-单线程异步)
    - [3.2. 什么是 event-loop](#32-什么是-event-loop)
    - [3.3. jQuery 的 Deferred](#33-jquery-的-deferred)
        - [3.3.1. Deferred 应用](#331-deferred-应用)
        - [3.3.2. 问题解答](#332-问题解答)
    - [3.4. Promise 的基本使用和原理](#34-promise-的基本使用和原理)
        - [3.4.1. 基本语法回顾](#341-基本语法回顾)
        - [3.4.2. 异常捕获](#342-异常捕获)
        - [3.4.3. 多个串联](#343-多个串联)
        - [3.4.4. Promise.all 和 Promise.race](#344-promiseall-和-promiserace)
        - [3.4.5. Promise 标准](#345-promise-标准)
        - [3.4.6. 问题解答](#346-问题解答)
    - [3.5. async / await](#35-async--await)
        - [3.5.1. 问题解答思路](#351-问题解答思路)
    - [3.6. 异步的总结](#36-异步的总结)
    - [4. 虚拟 DOM](#4-虚拟-dom)
    - [4.1. 什么是 vdom ，如何使用 vdom](#41-什么是-vdom-如何使用-vdom)
        - [4.1.1. 问题解答](#411-问题解答)
    - [4.2. 使用 vdom](#42-使用-vdom)
    - [4.3. 介绍一下 Diff 算法](#43-介绍一下-diff-算法)
        - [4.3.1. 什么是 diff 算法](#431-什么是-diff-算法)
        - [4.3.2. 去繁就简](#432-去繁就简)
        - [4.3.3. vdom 为何用 diff 算法](#433-vdom-为何用-diff-算法)
        - [4.3.4. diff 算法的实现](#434-diff-算法的实现)
    - [4.4. 总结](#44-总结)
    - [5. MVVM 和 vue](#5-mvvm-和-vue)
    - [5.1. 从 jquery 到 框架](#51-从-jquery-到-框架)
    - [5.2. 如何理解MVVM](#52-如何理解mvvm)
    - [5.3. vue 三要素（实现的三要素）](#53-vue-三要素实现的三要素)
        - [5.3.1. vue 中如何实现响应式？](#531-vue-中如何实现响应式)
        - [5.3.2. vue 中如何解析模板？](#532-vue-中如何解析模板)
        - [5.3.3. render 函数](#533-render-函数)
        - [5.3.4. 问题解答](#534-问题解答)
    - [5.4. vue 的整个实现流程](#54-vue-的整个实现流程)
    - [6. 组件化 和 React](#6-组件化-和-react)
    - [6.1. todo-list demo](#61-todo-list-demo)
    - [6.2. 什么是组件（说一下对组件化的理解）](#62-什么是组件说一下对组件化的理解)
    - [6.3. JSX 本质](#63-jsx-本质)
        - [6.3.1. 语法演示](#631-语法演示)
        - [6.3.2. 解析成 JS](#632-解析成-js)
        - [6.3.3. 独立的标准](#633-独立的标准)
        - [6.3.4. 总结（问题解答）](#634-总结问题解答)
    - [6.4. JSX 和 vdom 的关系](#64-jsx-和-vdom-的关系)
        - [6.4.1. vdom 回顾](#641-vdom-回顾)
        - [6.4.2. 何时 patch](#642-何时-patch)
        - [6.4.3. 自定义组件的处理](#643-自定义组件的处理)
        - [6.4.4. 问题解答：jsx 和 vdom 有什么关系？](#644-问题解答jsx-和-vdom-有什么关系)
    - [6.5. setState](#65-setstate)
        - [6.5.1. 异步](#651-异步)
        - [6.5.2. 回顾 vue 修改属性也是异步的](#652-回顾-vue-修改属性也是异步的)
        - [6.5.3. setState 的过程](#653-setstate-的过程)
        - [6.5.4. 问题解答：说一下 React setState 的过程](#654-问题解答说一下-react-setstate-的过程)
    - [6.6. 总结](#66-总结)
    - [6.7. react 和 vue 对比](#67-react-和-vue-对比)
        - [6.7.1. 两者本质的区别](#671-两者本质的区别)
        - [6.7.2. 看模板和组件化的区别](#672-看模板和组件化的区别)
        - [6.7.3. 两者的共同点](#673-两者的共同点)
        - [6.7.4. 总结问题的答案](#674-总结问题的答案)
        - [7. hybrid](#7-hybrid)
    - [7.1. hybrid 是什么，为什么用？](#71-hybrid-是什么为什么用)
        - [7.1.1. 问题解答：hybrid 是什么，为什么用？](#711-问题解答hybrid-是什么为什么用)
    - [7.2. 介绍一下 hybrid 更新上线流程？](#72-介绍一下-hybrid-更新上线流程)
        - [7.2.1. 问题解答： 介绍一下 hybrid 更新上线流程？](#721-问题解答-介绍一下-hybrid-更新上线流程)
    - [7.3. hybrid 和 h5 的比较](#73-hybrid-和-h5-的比较)
        - [7.3.1. 问题解答 ： hybrid 和 h5 的比较](#731-问题解答--hybrid-和-h5-的比较)
    - [7.4. JS 和客户端通讯](#74-js-和客户端通讯)
        - [7.4.1. 之前遗留的问题： 新闻详情页使用 hybrid ，前端页面如何获取新闻内容？](#741-之前遗留的问题-新闻详情页使用-hybrid-前端页面如何获取新闻内容)
        - [7.4.2. 基本形式：](#742-基本形式)
        - [7.4.3. schema 协议](#743-schema-协议)
    - [7.5. 总结](#75-总结)
    - [8. 课程总结](#8-课程总结)
    - [8.1. nodejs](#81-nodejs)
    - [8.2. 如何热爱编程](#82-如何热爱编程)
    
    



# 1. ES6 语法

- 开发环境已经普及使用
- 浏览器确支持不好（需要开发环境编译）
- es6 内容很多，重点了解常用语法
- 面试： 开发环境的使用 + 重点语法的掌握

## 1.1. 问题
- ES6 模块化如何使用，开发环境怎么打包
- Class 和普通构造函数有何区别
- Promise 的基本使用和原理
- 总结一下 ES6 的常用功能

## 1.2. 模块化

1. 模块化 - 语法
```javascript
/* util1.js */
export default {
    a: 100
}

/* util2.js */
export function fn1() {
    alert("fn1");
}
export function fn2() { 
    alert("fn2");
}

/* index.js */
import util1 from './util1.js';
import { fn1, fn2 } from './util2.js';
console.log(util1);
fn1();
fn2();

// 如果用的是 export default ，引入的时候直接 import 就行
// 如果是 export 好几个，引入的时候要用大括号括起来，像这样  { fn1, fn2 } ，哪怕只有一个也要放在大括号里  { fn1 } 
```

2. ES6 语法解析： babel
- 电脑中要有 node 环境， 运行 
    ```shell
    npm init
    # 或者
    npm init -y

    # 安装 babel
    npm install --save-dev babel-core babel-preset-es2015 babel-preset-latest
    # 或者这样  （ 注_001 ） 
    npm install --save-dev babel-core babel-preset-es2015 babel-preset-latest --registry=https://registry.npm.taobao.org
    
    # 创建 .babellrc 文件
    touch .babelrc

    # 全局安装 babel-cli （ mac 全局安装需要 sudo ； windows 全局安装需要以管理员身份运行命令行工具 ，再执行这个）
    npm install -global babel-cli

    # 看 babel 是否安装成功
    babel --version
    ```
- 创建 index.js 
    ```javascript
    [1, 2, 3].map(item => item + 1);
    ```
- 编译 index.js
    ```shell
    babel index.js
    ```
- 注_001：这里安装的时候为了快，可以走[国内镜像](https://npm.taobao.org)
- .babelrc 文件的内容： ```"es2015", "latest"``` 是我们刚刚安装两个插件的别名， ```"plugins"``` 是插件，暂时不用
    ```json
    {
        "presets": ["es2015", "latest"],
        "plugins": []
    }
    ```
- .babelrc 不用太详细的了解，是 #$%^&*()*&^% (记助攻对 的一部分？ 没听清)

3. 打包工具： webpack 
- 安装
    ```shell
    # 建议在项目内安装 webpack 
    npm webpack babel-loader --save-dev
    ```
- webpack 配置文件 webpack.config.js
    ```javascript
    module.export = {
        entry: "./src/index.js",
        output: {
            path: __dirname,
            filename: "./build/bundle.js"
        },
        module: {
            rules: [{
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader"
            }]
        }
    }
    ```
- 配置 package.json 中的 ```scripts``` 
    ```json
    "scripts": {
        "start": "webpack"
    }
    ```
- 运行 ```npm start``` 其实就相当于运行 ```"scripts"``` 里 ```"start"``` 对应的 ```"webpack"``` 
- webpack 会根据我们配置好的 webpack.config.json 进行打包
- 打包完之后，可以测试一下：
    1. 创建一个 index.html ，引入 src/bundle.js 
    2. 开启服务：命令行在 index.html 所在目录运行 ```http-server -p 8881```
    3. 浏览器访问 [localhost:8881/index.html](http://localhost:8881/index.html)
    4. 会看到 页面 alert 了 fn1 fn2 ，控制台输出了 ```{a: 100}``` ， 说明 util1 和 util2 都被 webpack 打包到了 bundle.js 中了

4. rollup
- vue 和 React 框架都是通过 [rollup](https://rollupjs.org/guide/zh/) 打包的 （这里是[英文网站](https://rollupjs.org/guide/en/)）
- 重新搞一个文件夹，来学习 rollup 
    ```shell
    mkdir learnRollup && cd learnRollup
    npm init 

    # 安装 rollup 以及 rollup 需要的一些工具
    npm install rollup rollup-plugin-node-resolve rollup-plugin-babel babel-plugin-external-helpers babel-preset-latest babel-core --save-dev
    
    # 创建 .babelrc
    touch .babelrc

    # 创建 rollup 配置文件
    touch rollup.config.js
    ```
- .babelrc 的内容
    ```json
    {
        "presets": [
            ["latest", {
                "es2015": {
                    "modules": false
                }
            }] 
        ],
        "plugins": ["external-helpers"]
    }
    ```
    - 不一样的地方： ```"modules": false``` 意思是我们不关心引入的第三方插件， ```"external-helpers"``` 因为 rollup 使用 babel 的时候依赖这么一个插件
- rollup.config.js 的内容
    ```javascript
    // 引入 babel 和 resolve 这两个插件
    import babel from "rollup-plugin-babel";
    import resolve from "rollup-plugin-node-resolve";

    export default {
        entry: "./src/index.js",        // 入口文件
        format: "umd",                  // 格式： umd 意思是即兼容 直接引入页面中的 js ，也兼容 CommenJS ， 也兼容 AMD
        plugins: [
            resolve(),
            babel({
                exclude: "node_modules/**"
            })
        ],
        dest: "build/bundle.js"
    }
    ```

- 将 webpack 环境的代码拷贝过来
- 修改 package.json 的 ```scripts``` 
    ```json
    "scripts": {
        "start": "rollup -c rollup.config.js"
    }
    ```
- 运行 ```npm start``` 
- 将打包的结果对比 webpack ，我们发现：
    1. rollup 打包的代码跟简洁，冗余代码更少，基本和源码一样，方便调试
    2. rollup 打包的文件体积比 webpack 的要小


5. rollup 对比 webpack
- rollup 功能单一 （专注打包）， webpack 功能强大（学习成本很高）
- 参考设计原则和《Linux/Unix设计思想》，这两本书都提到了 “单一值原则” ，一个东西做好一件事儿就好了
- 工具要尽量功能单一，可集成，可扩展
- wangEditor 用的 gulp + rollup （ [wangEditor](https://github.com/wangfupeng1988/wangEditor) 是作者的一个开源项目）


6. 总结 关于 JS 众多模块化标准
- 没有模块化的时候，代码冗余严重
- AMD 成为**标准**， require.js （也有 CMD ，用的不是特别多）
- 前端打包工具，grunt -> gulp -> webpack  ， nodejs 模块也可以被使用
- ES6 出现，想统一现在所有模块化的标准
- nodejs 积极支持，浏览器尚未统一
- 你可以自造 lib ， 但是不要自造标准！！！

7. 总结 & 问题解答
- 语法： ```import``` 和 ```export``` （ 注意有无 ```default``` ）
- 环境：babel 是用来编译 ES6 语法的， 模块化可以用 webpack 和 rollup 
- 扩展：说一下自己对模块化标准统一的期待


## 1.3. Class

### 1.3.1. Class 和 普通构造函数有何区别
- JS 构造函数
- Class 基本语法
- 语法糖
- 继承


1. JS 构造函数
    ```javascript
    function MathHandle(x, y){
        this.x = x;
        this.y = y;
    }

    MathHandle.prototype.add = function(){
        return this.x + this.y;
    };

    var m = new MathHandle(1, 2);
    console.log(m.add());
    ```

2. Class基本语法
    ```javascript
    class MathHandle {
        // constructor 是一个构造器，相当于构造函数
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        // 相当于在原型中定义的方法
        add(){
            return this.x + this.y;
        }
    }

    const m = new MathHandle(1, 2);
    console.log(m.add());

    typeof MathHandle;   // "function"
    MathHandle === MathHandle.prototype.constructor;    // true

    // 实例的 隐式原型 等于 构造函数的 显式原型
    m.__proto__ === MathHandle.prototype;       // true
    ```

3. 语法糖 （这两种写法，本质是一样的， calss 相当于语法糖，书写更加简单，更方便从后端转前端的开发）
    ```javascript
    class MathHandle {}

    typeof MathHandle;   // "function"
    MathHandle === MathHandle.prototype.constructor;    // true
    m.__proto__ === MathHandle.prototype;       // true

    // 这种语法糖形式，看起来和实际原理不一样的东西，视频老师个人不太赞同
    // 形式上强行模仿 java C# ， 却失去了它的本性和个性
    ```
4. class 继承
- 回顾一下 JS 的继承
    ```javascript
    // 动物
    function Animal(){
        this.eat = function(){
            console.log("animal eat");
        }
    }

    // 狗
    function Dog(){
        this.bark = function(){
            console.log("dog bark");
        }
    }

    // 绑定原型，实现继承 （这里视频的老师没有将 构造函数 重新指向 Dog ，应该是要有这么一步的）
    Dog.prototype = new Animal();

    // 实例化 哈士奇
    var hashiqi = new Dog();
    ```

- class 继承
    ```javascript
    class Animal {
        constructor(name){
            this.name = name;
        }

        eat(){
            console.log(this.name + "eat");
        }
    }

    class Dog extends Animal {
        constructor (name){
            // 注意 ！！！ 只要这个 class 有 extends 就得败 super 写上
            // super(name) 相当于执行了被继承的 class 的 constructor ，并且把 name 传了进去
            super(name);
            this.name = name;
        }

        say(){
            console.log(`${this.name} say`);
        }
    }

    const dog = new Dog("哈士奇");
    dog.say();
    dog.eat();
    ```
- class 写继承 相较于 构造函数的继承，可读性更强，更方便初学者   

5. 总结
- Class 在语法上更加贴合面向对象的写法
- Class 实现继承更加易读、易理解
- 更易于写 java 等后端语言的使用
- **本质**还是语法糖，使用 prototype 
- 所有的语法糖都需要了解本质

## 1.4. Promise 
- Callback Hell (回调地狱)
    ```javascript
    function loadImg(src, callback, fail){
        var img = document.createElement("img");
        img.onload = function(){
            callback(img);
        }
        img.onerror = function(){
            fail();
        }
        img.src = src;
    }

    var src = "https://www.imooc.com/static/img/index/logo.png";
    loadImg(src, function(img){
        console.log(img.width);
    }, function(){
        console.log("failed")
    });
    ```
- Promise 语法
    ```javascript
    function loadImg(src){
        // 创建 Promise 实例
        // resolve （解决） 和 reject  （拒绝） 都是函数，分别是成功和失败的回调
        const promise = new Promise(function(resolve, reject){
            var img = document.createElement("img");
            img.onload = function(){
                resolve(img);
            }
            img.onerror = function(){
                reject("图片加载失败");
            }
            img.src = src;
        });

        // return Promise 实例
        return promise;
    }

    // 使用
    var src = "https://www.imooc.com/static/img/index/logo.png"
    var result = loadImg(src);

    // 第一个 function : 成功的回调， 第二个 function ： 失败的回调
    result.then(function(img){
        console.log(img.width);
    }, function(){
        console.log("failed");
    })

    // 一个 Promise 对象可以分开处理不同的事件
    result.then(function(img){
        console.log(img.height);
    });

    // 多个 then 可以处理不同的回调，一次干多件事儿 
    ```
- 小结一下 Promise 的用法：
    - 创建 Promis 实例，传入一个回调函数，函数要有 resolve 和 reject 这两个参数
    - 在这个回调函数里你可以定义什么情况执行 resolve （一般是成功）， 什么情况执行 reject （一般是失败）
    - 使用 Promise 实例的 .then() 监听结果，处理相应的 成功回调 或者 失败回调




## 1.5. ES6 其他常用功能
- let/const
- 多行字符 / 模板字符串 （都得用反引号）
- 解构赋值
- 块级作用域（ 在代码块 ```{}``` 中声明的变量，在块外访问不到 ）
- 函数默认参数
- 箭头函数

### 1.5.1. let/const
- let 定义变量
- const 定义常量（只能赋值一次，再次赋值会报错）
    ```javascript
    // JS
    var i = 10;
    i = 100;
    var j = 10;
    j = 100;

    // ES6
    let i = 10;
    i = 100;        // 正常
    const j = 10;
    j = 100;        // 报错
    ```
### 1.5.2. 多行字符 / 模板字符串 （都得用反引号）
    ```javascript
    // JS
    var name = "Tom", age = 10, html = "";
    html += "<div>";
    html += "<p>" + name + "</p>";
    html += "<p>" + age + "</p>";
    html += "</div>";

    // ES6
    const name = "Tom", age = 10;
    const html = `<div>
                    <p>${name}</p>
                    <p>${age}</p>
                  </div>`;
    ```
### 1.5.3. 解构赋值
    ```javascript
    // JS
    var obj = {a: 100, b: 200, c: 300};
    var a = obj.a;
    var c = obj.c;

    var arr = ["xxx", "yyy", "zzz"];
    var x = arr[0];

    // ES6
    const obj = {a: 100, b: 200, c: 300};
    // 解构赋值的时候变量名必须和对象的 Key 一致才能赋值
    const {a, c} = obj;
    console.log(a);         // 100
    console.log(c);         // 300

    const arr = ["xxx", "yyy", "zzz"];
    // 数组的解构赋值是按顺序来的， 如果被赋值的变量多于数组的长度， 多出来的变量为 undefined
    const [x, y, z] = arr;
    console.log(x);         // "xxx"
    console.log(y);         // "yyy"
    console.log(z);         // "zzz"
    ```
### 1.5.4. 块级作用域（ 在代码块 ```{}``` 中声明的变量，在块外访问不到 ）
    ```javascript
    // JS
    var obj = {a: 100, b: 200, c: 300};
    for(var item in obj){
        console.log(obj[item]);
    }
    console.log(item);      // "c"

    // ES6
    var obj = {a: 100, b: 200, c: 300};
    for(let item in obj){
        console.log(obj[item]);
    }
    console.log(item);      // undefined
    ```
### 1.5.5. 函数默认参数
    ```javascript
    // JS
    // 如果没有传 b ，那 b 的值为 0
    function (a, b) {
        if(b == null){
            b = 0;
        }
    }

    // ES6
    function (a, b = 0){

    }
    ```
### 1.5.6. 箭头函数
    ```javascript
    // JS
    var arr = [1, 2, 3];
    arr.map(function(item){
        return item + 1;
    })

    // ES6
    var arr = [1, 2, 3];

    // 如果函数只有一个参数，并且函数体制有一行的话 可以这么写
    arr.map(item => return item + 1);

    // 如果函数不止一个参数，要把参数用括号包起来
    arr.map((item, index) => {
        console.log(index);
        return item + 1;
    })
    ``` 
### 1.5.7. 箭头函数 特别重要的特点：
    ```javascript
    function fn(){
        console.log("real", this);
        var arr = [1, 2, 3];

        // JS
        arr.map(function(item){
            console.log("JS", this);
            return item + 1;
        })

        // ES6
        arr.map(item => {
            console.log("ES6", this);
        })
    }
    fn.call({a: 100});
    ``` 

> 这些功能要么是解决了 JS 的问题，要么是让写法更简洁，容易阅读容易理解


# 2. 原型
> TIPS: 使用 zepto 和 jquery 讲原型，也算顺便解读了这二者的源码
- 问题 
    1. 说一个原型的实际应用
    2. 原型如何实现它的扩展性

- jquery 和 zepto 的简单应用
    - zepto 如何使用原型
    - jquery 如何使用原型

    ```html
    <p>jquery test 1</p>
    <p>jquery test 2</p>
    <p>jquery test 3</p>

    <div id="div1">
        <p>jquery test in div</p>
    </div>

    <script src="./jquery.3.2.1.js"></script>
    <script>
        var $p = $("p");
        $p.css("font-size", "40px");

        // 对这 4 个元素输出 html() 的时候，只会输出第一个，这是 jquery api 的规定
        console.log($p.html());             // jquery test 1

        var $div1 = $("#div1");
        $div1.css("color", "blue");
        console.log($div1.html());          // <p style="font-size: 40px;">jquery test in div</p>
    </script>
    ```
- 当多个实例可以使用一套方法时（ 像 ```css()``` 和 ```html()``` 这样的方法 ），说明，方法是来自于一个函数的原型当中

## 2.1. 实际应用 - zepto 如何使用原型
    ```javascript
    // 空对象
    var zepto = {};

    zepto.init = function(selector){
        // 源码中，这里的处理情况比较复杂，但因为这次只针对原型，所以这里就做了一点儿简化
        var slice = Array.prototype.slice;
        var dom = slice.call(document.querySelectorAll(selector));
        return zepto.Z(dom, selector);
    }

    // 即使用 zepto 时候的 $
    var $ = function(selector){
        return zepto.init(selector);
    }

    // 这是 构造函数
    function Z(dom, selector){
        var i, len = dom ? dom.length : 0
        for(i = 0; i < len; i++){
            this[i] = dom[i];
            this.length = len;
            this.selector = selector || "";
        }
    }
    
    zepto.Z = function(dom, selector){
        // 注意， 出现了 new 关键字
        return new Z(dom, selector);
    }

    // 原型
    $.fn = {
        constructor: zepto.Z,

        css: function(key, value){
            alert("css");
        },
        html: function(value){
            return "this is html function";
        }
    }

    zepto.Z.prototype = Z.prototype = $.fn;

    window.$ = $
    ```

## 2.2. 实际应用 - jQuery 如何使用原型
    ```javascript
    // 定义构造函数
    var init = jQuery.fn.init = function(selector){
        var slice = Array.prototype.slice;
        var dom = slice.call(document.querySelectorAll(selector));

        var i, len = dom ? dom.length : 0;
        for(i = 0; i < len; i++){
            this[i] = dom[i];
        }
        this.length = len;
        this.selector = selector || "";
    }

    // 初始化 jQuery.fn
    jQuery.fn = jQuery.prototype = {
        constructor: jQuery,

        // 其他函数...
        css: function(key, value){
            alert("css");
        },
        html: function(value){
            return "this is html function";
        }
    }

    // 定义原型
    init.prototype = jQuery.fn;

    var jQuery = function(selector){
        return new jQuery.fn.init(selector);
    }

    ```
## 2.3. 问题解答
- 描述一下 jQuery 如何使用原型
- 描述一下 zepto 如何使用原型
- 自己的项目经验中哪些用到了原型

## 2.4. 如何体现原型的扩展性
- 总结 jQuery 和 zepto 原型的使用
- 插件机制 

1. 在 zepto 实现中：
    ```javascript
    $.fn = {
        constructor: zepto.Z,

        css: function(key, value){
            alert("css");
        },
        html: function(value){
            return "this is html function";
        }
    }

    zepto.Z.prototype = Z.prototype = $.fn;
    ```
    - 这段代码，为啥不把 这个对象直接赋值给 ```Z.prototype``` 而要通过 ```$.fn``` ？
2. jQuery 的实现中：
    ```javascript
    jQuery.fn = jQuery.prototype = {
        constructor: jQuery,

        // 其他函数...
        css: function(key, value){
            alert("css");
        },
        html: function(value){
            return "this is html function";
        }
    }

    init.prototype = jQuery.fn;
    ```
    - 与 zepto 同样的疑问，为啥会有 ```jQuery.fn``` 这个东西？
3. 答案就是 **因为要扩展插件**， 做一个简单的插件的例子
    ```javascript
    $.fn.getNodeName = function(){
        return this[0].nodeName;
    }
    ```
    - 好处1：只有 ```$``` 会暴露在 ```window``` 全局变量（一个库暴露给全局一个变量就好了）
    - 好处2：将插件扩展统一到 $.fn.xxx 这一个接口，方便使用（封装插件的一个思想）

4. 问题解答：原型怎么扩展
    - 先说一下 jQuery 和 zepto 的插件机制
    - 结合自己的开发经验，做过的基于原型的插件

5. TIPS: 为啥讲 jQuery 和 zepto 这些老掉牙的东西？
    - 不要以为 react 、 vue 已经一统天下了，这种观念是非常错误的
    - 你可以看看 npm 上 jQuery（周下载量259w） 和 [vue](https://www.npmjs.com/package/vue)（周下载量 100w） 下载量的对比，最起码jquery 还没有那么过时。
    - 而且很多 jquery 的引用是直接通过 cdn 引入的，拿来就能用

 

# 3. 异步

- 什么是单线程？和异步有什么关系？ 
- 什么是 event-loop ？
- 是否用过 jQuery 的 Deferred 
- Promise 的几本使用和原理
- 介绍一下 Async/Await （和 Promise 的区别、联系）
- 总结一下当前 JS 解决一步的方案


## 3.1. 单线程、异步
- 单线程 - 只有一个线程，**同时只能只做一件事儿**
- 原因 - 为了避免 DOM 渲染的冲突
- 解决方案 - 异步

1. 单线程
    ```javascript
    // 循环运行期间，后边 JS 执行和 DOM 渲染会暂时卡顿
    var i, sum = 0;
    for(i = 0; i < 100000000; i++){
        sum += 1;
    }
    console.log(sum);

    // 如果放着 alert 不处理， 那么 JS 的执行和 DOM 渲染会暂时卡顿
    console.log(1);
    alert("hello");
    console.log(2);
    ```
2. 原因 - 为了避免 DOM 渲染的冲突
- 浏览器需要渲染 DOM 、 JS 可以修改 DOM 结构
- JS 执行的时候，浏览器渲染 DOM 会暂停
- 两段 JS 也不能同时执行
- H5 中有个 webworker 支持多线程，但是不能访问 DOM

3. 解决方案 - 异步
    ```javascript
    console.log(100);
     setTimeout(function(){         // setTimeout 是异步的
         console.log(200);          // 反正 1000ms 之后执行
     }, 1000);                      // 先不管它，先让其他 JS 代码运行
     console.log(300);
     console.log(400);


    // ajax
    console.log(100);
    $.ajax({
        url: "xxx",
        success: function(){
            console.log(result);
        }
    })
    console.log(300);
    console.log(400);
    ```

4. 异步 - 小结
    - 异步会导致的问题一： 没有按照代码书写顺序执行，可读性差
    - 异步会导致的问题二： callback 中不容易模块化

5. 问题解答： **什么是单线程？和异步有什么关系？**
    - 单线程就是同一时间只能做一件事儿，两段js不能同时执行
    - 原因就是为了避免 DOM 渲染的冲突
    - 异步是一种 “无奈” 的选择，虽然有很多问题（回调地狱、书写顺序和执行顺序不一样）

## 3.2. 什么是 event-loop
- 单线程 - 同一时间只能做一件事儿
- 原因 - 避免 DOM 渲染的冲突
- 解决方案 - 异步
- **异步的实现方式 - event loop**
- 什么是 **event loop**
    1. 也叫事件轮询，是 JS 实现异步的**具体解决方案**
    2. 同步的代码，直接在主进程（or 线程？）中执行
    3. 异步函数先放在 **异步队列** 中（如果有延时就延时放在异步队列中）
    4. 待同步代码执行完毕， **轮询执行** 异步队列代码

    ```javascript
    // 实例分析 1
    setTimeout(function(){
        console.log(100);
    }, 100);
    console.log(200);

    // 以下是对这段代码的分析
    // 主进程
    console.log(200);

    // 异步队列
    function(){
        console.log(100);
    }
    ```

    ```javascript
    // 实例分析 2
    setTimeout(function(){
        console.log(11);
    }, 100);
    setTimeout(function(){
        console.log(2);
    });
    console.log(3);

    // 以下是对这段代码的分析
    // 主进程
    console.log(3);

    // 异步队列
    // 立刻被放入
    function(){
        console.log(2);
    }

    // 100ms 后被放入
    function(){
        console.log(1)
    }
    ```

    ```javascript
    // 实例分析 3
    $.ajax({
        url: "xxx",
        success: function(){
            console.log('a');
        }
    });
    setTimeout(function(){
        console.log('b');
    }, 100);
    setTimeout(function(){
        console.log('c');
    });
    console.log('d');

    // 以下是对这段代码的分析
    // 下边的三个执行顺序和 实例2 一样

    // ajax 请求成功的时间不定，
    // 如果 ajax 请求成功的时间小于100ms ，
    function(){
        console.log('a');
    }
    // 会先于
    function(){
        console.log('b');
    }
    // 被放到异步队列中
    // 结果是 d c a b

    // 如果 ajax 请求成功的时间大于100ms ，结果是 d c b a
    ```

## 3.3. jQuery 的 Deferred
- jQuery 1.5 的变化
- 使用 jQuery Deferred
- 初步引入 Promise 概念


- jQuery 1.5 之前
    ```javascript
    var ajax = $.ajax({
        url: "data.json",
        success: function(){
            console.log("success1");
            console.log("success2");
            console.log("success3");
        },
        error: function(){
            console.log("error");
        }
    })
    console.log(ajax);  // 返回一个 XHR 对象
    ```
- jQuery 1.5 之后
    ```javascript
    var ajax = $.ajax("data.json");
    ajax.done(function(){
            console.log("success1");
        })
        .fail(function(){
            console.log("error");
        })
        .done(function(){
            console.log("success2");
        })
    })
    console.log(ajax);  // 返回一个 deferred 对象

    // 还可以这么写 ， 很像 Promise 的写法
    var ajax = $.ajax("data.json");
    ajax
    .then(function(){
        console.log("success1");
    }, function(){
        console.log("error1");
    })
    .then(function(){
        console.log("success2");
    }, function(){
        console.log("error2");
    })
    ```
- Promise 是在 2015 年被加入 ES6 标准的， jquery 的 Deferred 早在1.5 的时候就有这种写法了
- jQuery 1.5 的变化
    1. 无法改变 JS 异步和单线程的本质
    2. 只能从写法上杜绝 callback 这种形式
    3. 它是一种语法糖形式，但是**解耦**了代码
    4. 很好的提现了： 开放封闭原则（对扩展开放，对修改封闭）
    
> 23种设计模式，5个设计原则
- 开放封闭原则：
    - 对多人维护有好处，你不改我的代码，我也不改你的代码，要修改的话扩展就可以了；
    - 对测试回归也有好处，如果你要修改原来的代码，测试就要通通回归一遍，如果是扩展的代码，只要测试扩展的部分就行。大大减少了回归测试的成本

### 3.3.1. Deferred 应用
    ```javascript
    // 给出一段非常简单的异步代码，使用 setTimeout 函数
    var wait = function(){
        var task = function(){
            console.log("执行完成！");
        }
        setTimeout(tast, 2000);
    }
    wait();

    // 新增需求： 要在执行完成之后 进行某些特别复杂的操作，代码可能会很多。而且分好多步骤
    // 使用 jQuery Deferred
    function waitHandle(){
        var dtd = $.Deferred();

        var wait = function(_dtd){       // 要求传入一个 deferred 对象
            var task = function(){
                console.log("执行完成")；
                _dtd.resolve();      // 表示异步任务已经完成
                // dtd.reject();       // 表示异步任务失败或出错
            }
            setTimeout(task, 2000);
            return _dtd;            // 要求返回 deferred 对象
        }

        // 注意：这里一定要有 返回值
        return wait(dtd);
    }

    var w = waitHandle()
    w.then(function(){
        console.log("OK 1");
    }, function(){
        console.log("error 1");
    })
    .then(function(){
        console.log("OK 2");
    }, function(){
        console.log("error 2");
    })

    // 开放封闭原则
    // 如果有很多的处理逻辑，可以分好几个 then 来写
    // 这就是 对扩展开放 ， 对修改封闭
    // 如果你要新增别的逻辑，可以新增 .then (修改bug 和 完善现有逻辑除外)
    ```
- dtd 的 API 可以分为两类，用意不同
- 第一类： ```dtd.resolve()   dtd.reject()``` ，用来决定成功 or 失败
- 第二类： ```dtd.then()  dtd.done()  dtd.fail()``` ， 用来执行成功 or 失败的处理逻辑
- 这两类应该分开，否则后果很严重！
- 【测试】可以在上边的代码最后执行 dtd.reject() 试一下后果
- 怎么解决这个问题呢？
    ```javascript
    function waitHandle(){
        var dtd = $.Deferred();
        var wait = function(_dtd){
            var task = function(){
                console.log("执行完成")；
                _dtd.resolve();
            }
            setTimeout(task, 2000);

            // 注意：这里不返回 deferred 对象 ，而是返回 promise 
            return _dtd.promise();
        }

        return wait(dtd);
    }


    // 经过上边的改动， w 接收的就是一个 promise 对象
    var w = waitHandle()
    $.when(w)
    .then(function(){
        console.log("OK 1");
    }, function(){
        console.log("error 1");
    })
    .then(function(){
        console.log("OK 2");
    }, function(){
        console.log("error 2");
    })

    // w.reject();    // 执行这句话会报错
    // 返回的 promise 对象通过 $.when() 封装后只有 .then()  .done()  .fail() 这些方法
    ```
### 3.3.2. 问题解答
- jQuery 1.5 前后的 ajax 改变举例
- 说明如何简单封装，使用 Deferred （最好提及 开放封闭原则）
- 说明 promise 和 Deferred 的区别
    - Deferred 对象有 reslove reject 这种主动触发的函数，也有 then done fail 这种被动监听的函数，这些函数都能被访问是不行的，容易被滥用
    - 通过生成一个 promise 对象类隔离， promise对象只能被动监听
> 想深入理解它，就需要知道它的前世今生。
> 老师很反感新概念直接填鸭式的告诉你怎么用。
> 比如你想了解计算机，你要先了解计算机的历史：从图灵机开始，什么是图灵完备。。。


## 3.4. Promise 的基本使用和原理
### 3.4.1. 基本语法回顾
    ```javascript
    function loadImg(src){
        // 创建 Promise 实例
        // resolve （解决） 和 reject  （拒绝） 都是函数，分别是成功和失败的回调
        const promise = new Promise(function(resolve, reject){
            var img = document.createElement("img");
            img.onload = function(){
                resolve(img);
            }
            img.onerror = function(){
                reject("图片加载失败");
            }
            img.src = src;
        });

        // return Promise 实例
        return promise;
    }

    // 使用
    var src = "https://www.imooc.com/static/img/index/logo.png"
    var result = loadImg(src);

    // 第一个 function : 成功的回调， 第二个 function ： 失败的回调
    result.then(function(img){
        console.log(img.width);

        // 如果没有这个 return img ，那第二个 .then 中使用 img 的话会报错 undefined 
        // 这里还有点疑问，有点儿乱。老师讲的上下不一样吗？ 可以看 【Promise 标准】 那一小节，待确定
        // 思考了一下 ，这里用到的返回值是指 img 并不影响下一个 .then 服务的 promise 对象，嗯，应该是这样，还是待确认，待试验。 
        return img;
    }, function(){
        console.log("failed");
    })

    // 一个 Promise 对象可以分开处理不同的事件（可以链式调用）
    result.then(function(img){
        console.log(img.height);
    });

    // 多个 then 可以处理不同的回调，一次干多件事儿 
    ```

> 如果有的老版本浏览器没有支持 ```Promise``` 可以下载 ```bluebird``` 


### 3.4.2. 异常捕获
> 任何程序开发都需要异常捕获，因为一般没法保证程序一定不出问题。不能让程序一出现错误就崩溃吧。程序要有一定的健壮性。
- ```.then()``` 可以接受两个参数，第一个是成功的回调，第二个是失败的回调。
- 但我们如果要进行异常捕获，我们规定：**只给 ```.then()``` 传一个 ```function``` ，最后统一用 ```cache``` 捕获异常**
- 用法：在多个 ```.then()``` 的最后，使用 ```.catch()``` 捕获异常
    ```javascript
    result.then(function(img){
        console.log(img.width);
        return img;
    }).then(function(img){
        console.log(img.height);
    }).catch(function(err){
        // 失败或者 报异常的，我们统一让 catch 去管
        console.log(err);
    })
    ```

### 3.4.3. 多个串联

```javascript
// 需求： 先加载第一个，第一个加载完成再加载第二个。
var src1 = "https://www.baidu.com/favicon.ico";
var result1 = loadImg(src1);
var src2 = "https://www.bilibili.com/favicon.ico";
var result2 = loadImg(src2);

// 链式操作
result1.then(function(img){
    console.log("第一张图片加载完成");

    // 这里是关键
    return result2;
}).then(function(img){
    // 这个 then 的第一个参数就是 result2 的成功回调
    console.log("第二张图片加载完成")
}).catch(function(err){
    console.log(err);
})
```

### 3.4.4. Promise.all 和 Promise.race
- ```Promise.all``` 所有请求都完成（all: 全部）
- ```Promise.race``` 第一个请求完成（race: 竞赛，赛跑）
    ```javascript
    // Promise.all 接收一个包含多个 promise 对象的数组
    // 待全部完成之后，统一执行 success
    Promise.all([result1, result2]).then(datas => {
        // 接收到的 datas 是一个数组，依次包含了多个 peomise 返回的内容
        console.log(datas[0]);
        console.log(datas[1]);
    });

    // Promise.race 接收一个包含多个 promise 对象的数组
    // 只要有一个完成，就执行 success
    Promise.all([result1, result2]).then(data => {
        // data 即最先执行完成的 promise 的返回值
        console.log(data);
    });
    ```

### 3.4.5. Promise 标准
- 关于 “标准” 的闲谈 （ 很重要，但是别的地方不太会给你讲 ）
    - 任何技术 **推广 & 使用** 都需要一套 **标准** 来支撑
        1. 老师在刚毕业的时候做 ```.NET``` ，觉得这个东西很简单（就是拖来拖去嘛），觉得自己什么都会
        2. 后来因为工作的需要，考了一个 **项目管理专业人士资格认证（PMP）**
        3. 花了三个月的时间啃一本叫 《PMBOK》 的书，然后也考过了
        4. 这个经历让老师认识到，原来项目管理是有一套标准的，是有很多的专业术语的
        5. 原来不是像之前的公司，遇到项目管理的问题，大家坐在一起讨论解决方案
        6. 而是这些项目管理的问题已经有解决方案了，**已经有标准了，不需要你去“创新”**，或者你没有意识到这是创新。
        7. 只需要你去学就行了，就像许多的知识一样，不需要你去研究，只需要你去学习。
        8. 后来也发现，技术也是有很多很多的标准。这是在老师工作了两三年才发现的。
        9. 再后来呢，就拼命的去**看书**，拼命的找一些特别**规范的文档**阅读
    - 如 ```HTML``` ```JavaScript``` ```CSS``` ```HTTP``` 等，无规矩不成方圆
    - **任何不符合标准的东西，终将会被用户抛弃**
    - **不要挑战标准，不要自造标准**
        - 你遇到问题的时候，尽量去找一些标准去解决（我的理解：因为相对成熟，也能节省自己去想解决办法的时间）
- 状态变化
    - 三种状态： ```pending``` 、 ```fulfilled``` 、 ```rejected```
    - 初始状态是 ```pending```
    - ```pending``` 可以变为 ```fulfilled``` ，或者 ```pending``` 变为 ```rejected```
    - 状态变化不可逆
- then
    - Promise 实例必须实现（这类应该是 **调用** 吧） then 这个方法
    - .then() 可以接收两个函数作为参数，第一个成功回调，第二个失败回调
    - .then() 返回的是一个 Promise 实例 
        - 如果 .then 的回调函数中没有明文返回 promise 实例，那么这个 .then 返回的就是本身的这个 promise 实例，所以我们可以对这个 promise 实例继续 .then
        - 如果 .then 的回调函数返回了另外一个 promise 实例，那后边再执行 .then 的时候，其实执行的是刚刚返回的那个 promise 实例的 .then ）
        - 
        ```javascript
        // 两个 then 都是 result 的 then
        var result = loadImg(src);
        result.then(function(img){
            console.log(img.width);
        }, function(){
            console.log("filed")
        }).then(function(img){
            console.log(img.height);
        })

        // 第一个 then 是 result1 的， 因为第一个的回调函数 return 了 result2
        // 所以第二个 then 成为了 result2 的
        result1.then(function(img){
            console.log("第一张图片加载完成");

            // 这里是关键
            return result2;
        }).then(function(img){
            // 这个 then 的第一个参数就是 result2 的成功回调
            console.log("第二张图片加载完成")
        }).catch(function(err){
            console.log(err);
        })
        ```

### 3.4.6. 问题解答

- 基本语法（创建实例，创建的时候定义啥时候成功、啥时候失败；实例 .then .catch）
- 如何捕获异常（ Error 和 reject 都考虑，都可以通过 catch 捕获）
- 多个串联 - 链式执行 
- Promise.all 和 Promise.race
- Promise 标准，状态变化的方向 ， then 函数

## 3.5. async / await

- async / await 是 es7 中的， babel 也支持
- node 中有一个 KOA 是用 async / await 实现的
- Promise 的 then 只是将 callback 拆分了，他的写法还是一个异步的写法

    ```javascript
    var w = waitHandle()
    w.then(function(){
        console.log("OK 1");
    }, function(){
        console.log("error 1");
    })
    .then(function(){
        console.log("OK 2");
    }, function(){
        console.log("error 2");
    })
    ```

    - 相对于 ```JQuery 1.5``` 之前的 ```ajax``` 的 ```callback``` 的写法来说， ```then``` 是将 ```callback``` 拆分了，一个 ```callback``` 可以拆分成好多个 ```then``` 
    - 它的本质还是 callback
- async / await 是最直接的同步写法（解决了什么问题？）
  
    ```javascript
    import "babel-polyfill";

    function loadImg(src){
        // 创建 Promise 实例
        // resolve （解决） 和 reject  （拒绝） 都是函数，分别是成功和失败的回调
        const promise = new Promise(function(resolve, reject){
            var img = document.createElement("img");
            img.onload = function(){
                resolve(img);
            }
            img.onerror = function(){
                reject("图片加载失败");
            }
            img.src = src;
        });

        // return Promise 实例
        return promise;
    }

    var src1 = "https://www.baidu.com/favicon.ico";
    var src2 = "https://www.bilibili.com/favicon.ico";

    // async / await 用法
    const load = async function(){
        const result1 = await loadImg(src1);
        console.log(result1);
        const result2 = await loadImg(src2);
        console.log(result2);
    }
    load();

    // 注意 ： 如果要用 webpack 打包这段代码，需要安装 babel-polill 并引入
    // npm install -D babel-polyfill
    ```

- 使用 await ，函数必须使用 async 标识
- await 后边跟的是一个 promise 实例
- 需要 babel-polyfill (兼容)

### 3.5.1. 问题解答思路
- 基本语法
- async / await 使用了  Promise ，并没有和 Promise 冲突
- 完全是同步的写法，再也没有回调函数
- 但是：改变不了JS单线程、异步的本质

## 3.6. 异步的总结
- 什么是单线程， 和异步有什么关系？
- 什么是 event-loop
- 是否用过 jquery 的 deferred
- Promise 的基本使用和原理
- 介绍一下 async /  await
- 当前异步的解决方案
    - jQuery Deferred
    - Promise （blue bird）
    - async / await
    - Generator （解释不讲的原因）
        - 原理比较复杂，学习成本高，差不多要讲两个小时
        - 不是异步的直接代替方案
        - 有更好的更简洁的解决方案 async / await
        - koa 也早已 “弃暗投明” 

# 4. 虚拟 DOM
<!-- 

6+8+5+9+6+3+8+11+9+4+2+2+7+5+7+7+8+8+9+3+4+1

132min

start at 63h05min 

132 * 1.44 = 190 min 也就是 3 小时

-->

- 是vue和react的核心
- vdom比较独立，使用也比较简单
- 如果面试问到vue和react和实现，免不了vdom
    - 因为你了解实现，考查的是自己学能力，基础能力，使用起来的效率也会非常高
- 问题：
    1. vdom 是什么？为何会存在vdom？（讲透）
    2. vdom 的应用，核心 API 是什么？（讲透）
    3. **介绍**一下 diff 算法（非常复杂，介绍即可）


## 4.1. 什么是 vdom ，如何使用 vdom
- 什么是 vdom 
    - virtual dom ，虚拟 dom
    - 用 js 模拟 DOM 结构
    - dom 变化的对比， 放在js层来做（因为在html、css、js 中只有 js 是图灵完备语言，即能实现各种逻辑的语言）
    - 目的是： 提高重绘性能

    ```html
    <!-- 真实的 DOM -->
    <ul id="list">
        <li class="item">Item 1</li>
        <li class="item">Item 2</li>
    </ul>
    ```
    ```javascript
    // 用 js 来描述 DOM 
    {
        tag: ul,
        attrs: {
            id: list
        },
        children: [
            {
                tag: "li",
                attrs: {
                    className: "item"
                },
                children: ["Item 1"]
            },
            {
                tag: "li",
                attrs: {
                    className: "item"
                },
                children: ["Item 2"]
            }
        ]
    }
    // 为啥是 className 而不是 class ？ 因为 class 是 js 的一个保留字
    ```
    - 补一句：**vdom 存在的价值**，因为现代浏览器执行 js 是非常快的，但是操作dom 是非常耗费性能的，这就是 vdom 存在的意义

- 设计需求场景
    ```javascript
    // 1. 将该数据展示成一个表格。 2. 随便修改一个信息，表格也跟着修改
    [
        {
            name: "张三",
            age: "20",
            adress: "北京"
        },
        {
            name: "李四",
            age: "21",
            adress: "上海"
        },
        {
            name: "王五",
            age: "22",
            adress: "广州"
        }
    ]
    ```
- 用jq实现的 demo（以下是用jquery实现的性能最好的方式，每次点击只渲染一次，即只append一次）
    ```html
    <div id="container"></div>
    <button id="btn-change">change</button>

    <script src="./jquery.js"></script>
    <script>
        var data = [
            {
                name: "张三",
                age: "20",
                adress: "北京"
            },
            {
                name: "李四",
                age: "21",
                adress: "上海"
            },
            {
                name: "王五",
                age: "22",
                adress: "广州"
            }
        ];

        // 渲染函数
        function rander(data){
            var $container = $("#container");

            // 清空现有内容
            $container.html("");

            // 拼接 table
            var $table = $("table");
            $table.append($("<tr><td>name</td><td>age</td><td>address</td></tr>"));
            data.forEach(function(item){
                $table.append($("<tr><td>" + item.name + "</td><td>" + item.age + "</td><td>" + item.adress + "</td></tr>"))
            });

            // 渲染到页面
            $container.append($table);
        }

        // 修改信息
        $("#btn-change").click(function(){
            data[1].age = 30;
            data[2].adress = "深圳";
            // re-render 再次渲染
            render(data);
        })

        // 初始化的时候渲染
        render(data);
    </script>
    ```
- 遇到的问题
    - 为什么说 dom 操作很昂贵呢？因为dom的结构很复杂，js 运行效率高
    - 尽量减少 dom 操作，而不是推到重来
    - 项目越复杂，影响就越严重
    - vdom 即可解决这个问题

    ```html
    <!-- 真实的 DOM -->
    <ul id="list">
        <li class="item">Item 1</li>
        <li class="item">Item 2</li>
    </ul>
    ```
    ```javascript
    // 用 js 来描述 DOM 
    {
        tag: ul,
        attrs: {
            id: list
        },
        children: [
            {
                tag: "li",
                attrs: {
                    className: "item"
                },
                children: ["Item 1"]
            },
            {
                tag: "li",
                attrs: {
                    className: "item"
                },
                children: ["Item 2"]
            }
        ]
    }
    // 为啥是 className 而不是 class ？ 因为 class 是 js 的一个保留字
    ```

### 4.1.1. 问题解答
- virtual dom ，虚拟 dom
- 用 js 模拟 DOM 结构
- dom 操作非常 “昂贵”
- 将dom对比放在js层，提高重绘性能

## 4.2. 使用 vdom 
1. vdom 如何应用，核心 API 是什么
2. 介绍 [snabbdom](https://github.com/snabbdom/snabbdom)
3. 重做之前的 demo
4. 总结核心 API : h 、 patch
  
- 我们举个简单的例子：

    ```html
    <div id="container"></div>
    <button id="btn-change">change</button>
    <script src="https://cdn.bootcss.com/snabbdom/0.7.3/snabbdom.js"></script>
    <script src="https://cdn.bootcss.com/snabbdom/0.7.3/snabbdom-class.js"></script>
    <script src="https://cdn.bootcss.com/snabbdom/0.7.3/snabbdom-props.js"></script>
    <script src="https://cdn.bootcss.com/snabbdom/0.7.3/snabbdom-style.js"></script>
    <script src="https://cdn.bootcss.com/snabbdom/0.7.3/snabbdom-eventlisteners.js"></script>
    <script src="https://cdn.bootcss.com/snabbdom/0.7.3/h.js"></script>
    ```
    ```javascript
    var snabbdom = window.snabbdom;

    // 定义 patch
    var patch = snabbdom.init([
        snabbdom_class,
        snabbdom_props,
        snabbdom_style,
        snabbdom_eventlisteners
    ]);

    // 定义 h
    var h = snabbdom.h

    // 生成 vnode
    var vnode = h("ul#list", {}, [
        h("li.item", {}, "Item 1"),
        h("li.item", {}, "Item 2")
    ])

    var container = document.getElementById("container");
    patch(contatiter, vnode);

    // 模拟改变
    var btnChange = document.getElementById("btn-change");
    btnChange.addEventListener("click", function(){
        // 生成 newVnode
        var newVnode = h("ul#list", {}, [
            h("li.item", {}, "Item 111"),
            h("li.item", {}, "Item 222"),
            h("li.item", {}, "Item 333")
        ]);
        patch(vnode, newVnode);
    })

    // 解释一下：

    // h 函数接收 三个参数： 
    // 第一个：节点的选择器（字符串），
    // 第二个：节点的属性（对象）
    // 第三个：节点的子元素，如果是一个，那就传一个 vnode 对象，如果是多个那就传一个数组，在数组中包含多个 vnode 对象

    // patch 函数接收 两个参数，分两种情况
    // 情况 A ：第一个参数是空的dom节点，第二个是vnode，结果是把 vnode 生成的元素塞到 空节点中
    // 情况 B ：两个都是 vnode ，结果是对比两个 vnode 的产差别，用最小的改动将第一个替换为第二个
    ```
- 使用 vdom 重做 demo
    ```html
    <div id="container"></div>
    <button id="btn-change">change</button>

    <script src="https://cdn.bootcss.com/snabbdom/0.7.3/snabbdom.js"></script>
    <script src="https://cdn.bootcss.com/snabbdom/0.7.3/snabbdom-class.js"></script>
    <script src="https://cdn.bootcss.com/snabbdom/0.7.3/snabbdom-props.js"></script>
    <script src="https://cdn.bootcss.com/snabbdom/0.7.3/snabbdom-style.js"></script>
    <script src="https://cdn.bootcss.com/snabbdom/0.7.3/snabbdom-eventlisteners.js"></script>
    <script src="https://cdn.bootcss.com/snabbdom/0.7.3/h.js"></script>

    <script>

        var snabbdom = window.snabbdom;

        // 定义 patch
        var patch = snabbdom.init([
            snabbdom_class,
            snabbdom_props,
            snabbdom_style,
            snabbdom_eventlisteners
        ]);

        // 定义 h
        var h = snabbdom.h

        var data = [
            {
                name: "张三",
                age: "20",
                adress: "北京"
            },
            {
                name: "李四",
                age: "21",
                adress: "上海"
            },
            {
                name: "王五",
                age: "22",
                adress: "广州"
            }
        ];

        // 把表头也放在 data 中
        data.unshift({
            name: "姓名",
            age: "年龄",
            address: "地址"
        });

        // 获取 container 和 button 
        var container = document.getElementById("container");
        var btnChange = document.getElementById("btn-change");

        var vnode
        // 渲染函数
        function rander(data){
            var newVnode = h("table", {}, data.map(function(item){
                var tds = [];
                var i;
                for(i in item){
                    if(item.hasOwnProperty(i)){
                        tds.push(h("td", {},  item[i] + ""))
                    }
                }
                return h("tr", {}, tds);
            }));
            
            if(vnode){
                // re-render
                patch(vnode, newVnode);
            }else{
                // 初次渲染
                patch(container, newVnode);
            }

            // 存储当前 vndoe
            vnode = newVnode;
        }

        // 初次渲染
        render(data);

        btnChange.addEventListener("click", function(){
            data[1].age = 30;
            data[2].adress = "深圳";
            // re-render 再次渲染
            render(data);
        })
    </script>
    ```
- 问题解答
- 如何使用？ 可以用 snabbdom 用法来举例
- 核心 API : h 函数、 patch 函数


## 4.3. 介绍一下 Diff 算法
- 什么是 diff 算法
- 去繁就简
- vdom 为何用 diff 算法
- diff 算法的实现流程

### 4.3.1. 什么是 diff 算法
- Linux diff 命令
    ```shell
    diff log1.txt log2.txt
    ```
- git diff
- 在线的对比器

### 4.3.2. 去繁就简
- diff 算法非常复杂，实现难度很大，源码量很大
- 去繁就简，讲明白核心流程，不关心细节（二八原则）并不是偷懒，而是高效的学习
- 面试官也大部分不清楚细节，但是很关心核心流程
- 去繁就简之后，依然具有很大的挑战性，并不简单

### 4.3.3. vdom 为何用 diff 算法
- DOM 操作是昂贵的，因此要尽量减少 DOM 操作
- 产出本次 DOM 必须更新的节点来更新，其他的不更新
- 这个 “找出” 的过程就需要 diff 算法

### 4.3.4. diff 算法的实现
- ```patch(container, vnode)```
    - 这个操作的核心问题，是如何把 vnode 转变为一个 真实的 dom 结构（把dom塞到容器里还是很简单的，不是重点）

    ```javascript
    // vdom
    {
        tag: ul,
        attrs: {
            id: list
        },
        children: [
            {
                tag: "li",
                attrs: {
                    className: "item"
                },
                children: ["Item 1"]
            }
        ]
    }
    ```
    ```html
    <!-- 真实的 DOM -->
    <ul id="list">
        <li class="item">Item 1</li>
    </ul>
    ```
    - 大体的实现方式（假定都是 tag 没有text、没有注释、等等）
    ```javascript
    function createElement(vnode){
        var tag = vnode.tag,
            attrs = vnode.attrs || {},
            childdren = vnode.children || [];
        
        if(!tag){
            return null;
        }

        // 创建真实的 DOM 元素
        var elem = document.ceeatElement(tag);
        // 属性
        var attrName;
        for(attrName in attrs){
            if(attrs.hasOwnProperty(attrName)){
                // 给 elem 添加属性
                elem.setAttribute(attrName, attrs[attrName])
            }
        }

        // 子元素
        children.forEach(function(childVnode){
            // 给 elem 添加子元素
            elem.appendChild(createElement(childVnode));    // 递归
        })

        // 返回真实的 DOM 元素
        return elem;

    }
    ```

- ```patch(vnode, newVnode)```
    - 前提：vnode 节点能和真实的 dom 节点对应上（对应并不复杂）
    - 

    ```javascript
    // vnode
    {
        tag: ul,
        attrs: {
            id: list
        },
        children: [
            {
                tag: "li",
                attrs: {
                    className: "item"
                },
                children: ["Item 1"]
            },
            {
                tag: "li",
                attrs: {
                    className: "item"
                },
                children: ["Item 2"]
            }
        ]
    }
    // newVnode
    {
        tag: ul,
        attrs: {
            id: list
        },
        children: [
            {
                tag: "li",
                attrs: {
                    className: "item"
                },
                children: ["Item 1"]
            },
            {
                tag: "li",
                attrs: {
                    className: "item"
                },
                children: ["Item 2222"]
            },
            {
                tag: "li",
                attrs: {
                    className: "item"
                },
                children: ["Item 3"]
            }
        ]
    }

    // 只考虑最简单的情况
    function updateChildren(vnode, newVnode){
        var children = vnode.children || [];
        var newChildren = newVnode.children || [];
        // 解释一下为啥获取 children ：我们默认这个最外层的盒子是一样的，只有内层会发生变化  

        // 遍历现有的 children
        children.forEach(function(child, index){
            var newChild = newCildren[index];
            if(newChild == null){
                return;
            }
            if(child.tag === newChild.tag){
                // 两者 tag 一样 ， 继续向下对比 （递归）
                updateChildren(child, newChild);
            }else{
                // 两者 tag 不一样
                replaceNode(child, newChild);
            }
        })
    }

    function replaceNode(vnode, newVnode){
        var elem = vnode.elem;       // 真实的 DOM 节点
        var newElem = createElement(newVnode);  

        // 替换
    }
    ```
> 所有的 **递归** 都是因为 **可能有无限循环** 的特点
- diff 算法的实现不仅仅是以上的内容
    - 节点新增和删除
    - 节点重新排序
    - 节点属性、样式、事件绑定
    - 如何极致压榨性能
    - .....
- diff 实现过程
    - ```patch(containter, vnode)``` 和 ```patch(vnode, newVnode)```
    - createElement
    - updateChildren
- 问题解答（介绍一下 diff 算法）
    - 知道什么是 diff 算法， 是 linux 的基础命令
    - vdom 中应用 diff 算法是为了找出需要更新的节点
    - diff 实现： ```patch(containter, vnode)``` 和 ```patch(vnode, newVnode)```
    - 核心逻辑： ```createElement``` 和 ```updateChildren```

## 4.4. 总结

<!-- 
end at 66h 35min 预计用时 3h 实际用时 3h 30min
-->



# 5. MVVM 和 vue
<!-- 
6+8+9+10+3+5+6+3+6+9+11+11+2+3+7+7+5+9+8+12+21+7+7+3+11+11+4+9
213 min

start at 66:35

213 * 1.44 = 307 min 也就是 5 小时
-->

- 说明一下使用 jquery 和使用 框架的区别
- 说一下对 MVVM 的理解
- vue 如何实现响应式
- vue 如何解析模板
- vue 的整个实现流程

## 5.1. 从 jquery 到 框架
- jquery 实现 todo-list
    ```html
    <div>
        <input type="text" name="" id="txt-title">
        <button id="btn-submit">submit</button>
    </div>
    <div>
        <ul id="ul-list"></ul>
    </div>

    <script src="./jquery.js"></script>
    <script>
        var $txtTitle = $("#txt-title");
        var $ulList = $("#ul-list");
        var $btnSubmit = $("#btn-submit");

        $btnSubmit.click(function(){
            var title = $txtTitle.val();
            var $li = $("<li>" + title + "</li>");

            $ulList.append($li);
            $txtTitle.val("");
        })
    </script>
    ```
- vue 实现 todo-list
    ```html
    <div id="app">
        <div>
            <input type="text" v-model="title">
            <button v-on:click="add">submit</button>
        </div>
        <ul>
            <li v-for="item in list">{{item}}</li>
        </ul>
    </div>

    <script src="./vue.js"></script>
    <script>
        var vm = new Vue({
            el: "#app",
            data: {
                title: "",
                list: []
            },
            methods: {
                add: function(){
                    this.list.push(this.title);
                    this.title = "";
                }
            }
        });
    </script>
    ```
- jquery 和 框架 的区别
    1. 框架的数据和视图的分离
        - jquery 的 视图和数据是混在一起的
        - jquery 不符合开放封闭原则
        - jquery 直接操作dom
        - vue 的数据都在 data 中
    2. 框架以数据驱动视图
        - jquery 除了修改数据 还需要修改视图
        - vue 修改数据，识图自动更新
- 小结：
    - 数据视图分离，解耦（开放封闭原则：对扩展开饭，对修改封闭）
    - 以数据驱动视图，只关心数据变化，DOM操作被封装
    
## 5.2. 如何理解MVVM 
- MVC
    - M : Model 数据模型
    - V : View 视图、界面
    - C : Controller 控制器、逻辑处理
    - 用户操作 view ，view 触发事件（controller），controller 修改数据（model）， model 修改 view 
    - 还有一种，永辉直接操作 controller ，controller 修改数据（model）， model 修改 view 
- MVVM
    - M : Model 数据模型
        ```javascript
        var data = {
            title: "",
            list: []
        };
        ```
    - V : View 视图、模板（视图和数据模型的是分离的）
        ```html
        <div id="app">
            <div>
                <input type="text" v-model="title">
                <button v-on:click="add">submit</button>
            </div>
            <ul>
                <li v-for="item in list">{{item}}</li>
            </ul>
        </div>
        ```
    - VM : viewModel - 链接 Model 和 View
        ```javascript
        var vm = new Vue({
            el: "#app",
            data: data,
            methods: {
                add: function(){
                    this.list.push(this.title);
                    this.title = "";
                }
            }
        });
        ```
        - 数据通过 viewModel 中的 ```Data Bindings``` 完成了数据的绑定
        - 视图通过 viewModel 中的 ```DOM Listeners``` 完成了事件的处理
        - viewModel 是 视图 和 数据连接的一个桥
- viewModel
    - MVVM 不算是一种创新
    - 其中的 ViewModel 确实是一种创新
    - 真正结合前端场景应用的创新

- 问题解答：
    - MVVM : Model View viewModel
    - 三者之间的联系，以及如何对应到各段代码
    - 对 viewModel 的理解， 联系 view 和 model 的桥梁

## 5.3. vue 三要素（实现的三要素）
- 再次分析 demo
- 三要素： 
    - **响应式**： vue 如何监听到 data 的每个属性变化？
    - **模板引擎**： vue 的模板引擎如何被解析？ 指令如何处理？
    - **渲染**： vue 的模板如备选染成 html ？ 以及渲染过程

### 5.3.1. vue 中如何实现响应式？
- 什么是响应式
    - 修改 data 属性之后， vue 立刻监听到
    - data 属性被代理到 vm 上，也就是内部用的 this 的指向
- Object.defineProperty
    ```javascript
    var obj = {
        name: "zhangsan",
        age: 25
    }
    console.log(obj.name);
    obj.age = 20;

    // 怎么监听呢？
    var obj = {};
    var _name = "zhangsan";

    // 第一个参数，监听的对象； 第二个参数， 对象的属性名； 第三个参数： 一个对象，包含 get 和 set 方法
    Object.defineProperty(obj, "name", {
        get: function(){
            console.log("get", _name);
            return _name;
        },
        set: function(newVal){
            console.log("set", newVal);
            _name = newVal;
        }
    })
    obj.name = "lisi";
    console.log(obj.name);
    ```
- 模拟实现
    ```javascript
    var vm = {};    // 模拟 vue 实例
    var data = {
        name: "zhangsan",
        age: 20
    };

    
    var key, value;
    for(key in data){
        // 因为命中了闭包。所以新建了一个函数，保证 key 的独立作用域
        (function(key){
            Object.defineProperty(vm, key, {
                get: function(){
                    // 监听
                    console.log("get", data[key]);

                    // 把 data 代理到 vm 上
                    return data[key];
                },
                set: function(newVal){
                    // 监听
                    console.log("set", newVal);

                    // 把 data 代理到 vm 上
                    data[key] = newVal;
                }
            })
        })(key)
    }
    ```
- 问题解答：
    - **关键是理解 Object.defineProperty**
    - **将 data 的属性代理到 vm 上** （补充：methods 中的方法也会被代理到 vm ，即 vue 的实例上，so ： data 中的属性最好不要和 methods 中的方法名相同？？？ ）

### 5.3.2. vue 中如何解析模板？
- 模板是什么
    ```html
    <div id="app">
        <div>
            <input type="text" v-model="title">
            <button v-on:click="add">submit</button>
        </div>
        <ul>
            <li v-for="item in list">{{item}}</li>
        </ul>
    </div>
    ```
    - 本质：字符串
    - 有逻辑， 如 v-if v-for 等
    - 与 HTML 很像（标签格式很像），但有很大差别
    - 最终还是会转换为 html 
- 模板最终必须转换成 JS 代码，因为：
    - 有逻辑，必须 JS 才能实现（图灵完备）
    - 转换成 HTML 渲染页面，必须用js 才能实现
    - 因此，模板最终要转换成一个 js 函数（render 函数，这个 render 是个泛指，指渲染函数）

- render 函数
- render 函数 与 vdom


### 5.3.3. render 函数
1. 先了解一下 with 的用法（平时开发，千万不要用，他有很多问题）
    ```javascript
    var obj = {
        name: "zhangsan",
        age: 20,
        getAddress: function(){
            alert("beijing");
        }
    }

    // 不使用 with
    function fn(){
        alert(obj.name);
        alert(obj.age);
        obj.getAddress();
    }
    fn();

    // 使用 with
    function fn1(){
        with(obj){
            alert(name);
            alert(age);
            getAddress();
        }
    }
    fn1();
    ```
2. render 函数（分析模板中的逻辑：v-if 、 v-for 、 v-on 等问题）
    ```html
    <div id="app">
        <p>{{price}}</p>
    </div>

    <script src="./vue"></script>
    <script>
        var vm = new Vue({
            el: "#app",
            data: {
                price: 100
            }
        });
        
        // 以下是手写的 render 函数
        // this 就是 vue 的实例
        with(this){
            return _c(                          // this._c
                "div",
                {
                    attrs: {"id": "app"}
                },
                [
                    _c("p", [_v(_s(price))])    // this._c  this._v  this._s
                ]
            )
        }
    </script>
    ```
   - 从哪里可以看到 render 函数？
       - 打开 vue.2.5.13 源码 ，搜索 ```code.render``` 大概在 10679 行
       - 在这个代码块的return之前输入 alert(code.reder) 保存，刷新页面（demo 的例子）
       - 得到输出的 render 就是 当前页面模板的 render 函数
   - 以之前的 todo-list 来举例， 它的 render 函数是什么样子的？
    ```html
    <div id="app">
        <div>
            <input type="text" v-model="title">
            <button v-on:click="add">submit</button>
        </div>
        <ul>
            <li v-for="item in list">{{item}}</li>
        </ul>
    </div>
    ```
    ```javascript
    // 在 vue 源码中打断点得到的 render 函数
    with(this) {
        return _c('div', {
            attrs: {
                "id": "app"
            }
        },
        [_c('div',[_c('input', {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: (title),
                expression: "title"
            }],
            attrs: {
                "type": "text"
            },
            domProps: {
                "value": (title)
            },
            on: {
                "input": function($event) {
                    if ($event.target.composing) return;
                    title = $event.target.value
                }
            }
        }), _v(" "), _c('button', {
            on: {
                "click": add
            }
        },
        [_v("submit")])]), _v(" "), _c('ul', _l((list),
            function(item) {
                return _c('li', 
                    [_v(_s(item))]
                )
            }
        ))])
    }
    ```
   - v-if v-for v-on 都是怎么实现的？
       - v-if : if - else 判断
       - v-for : js 中的遍历 （ **vm._l 中是用 for 循环实现的** ）
       - v-on : js 给 DOM 节点绑定事件
3. 模板 生成 HTML 的问题
    - 复习一下 vdom 的知识： snabbdom （ h 函数、 patch 函数 ）
    - vm._c 其实就相当于 snabbdom 中的 h 函数（ 返回 vnode ）
    - render 函数执行之后 **返回的是 vnode** ，也就是说 _c 返回的是 vnode

    ```javascript
    vm._update(vnode){
        // 旧的 vnode
        const prevVnode = vm._vnode;
        
        // 新的 vnode
        vm._vnode = vnode;

        // vm.__patch__ 新旧对比
        if(!prevVnode){
            // 把 vnode 放到空的容器 vm.$el 中
            vm.$el = vm.__patch__(vm.$el, vnode)l
        }else{
            // 把 新的 vnode 和 旧的 vnode 对比
            vm.$el = vm.__patch__(prevVnode, vnode)l
        }
    }

    function updateComponent(){
        // vm._render 即上边的 render 函数， 返回 vnode
        vm._update(vm._render());
    }
    ```
    - updateComponent 中实现了 vdom 的 patch 
    - 页面首次渲染执行 updateComponent （走的是 patch 的第一种用法）
    - data 每次修改的时候，执行 updateComponent （走的是 patch 的第二种用法）

### 5.3.4. 问题解答
- 模板： 本质是字符串、有逻辑、可以嵌入js变量
- 模板必须转换为 JS 代码 （ 有逻辑 、 渲染 HTML 、 JS 变量 ）
- render 函数是什么样子的 ？（ 有 with ，类似 vdom 的 h 函数 ）
- render 函数执行返回的是 vnode
- updateComponent 中执行 patch （ 首次渲染啥样？非首次渲染啥样？ ）


## 5.4. vue 的整个实现流程
- 第一步：解析模板成 render 函数
    - with 的用法
    - 模板中所有信息都被 render 函数包含
    - 模板中用到的 data 中的属性， 都变成了 JS 变量
    - 模板中的 v-model v-for v-on 都变成了 JS 变量
    - render 函数返回 vnode
- 第二步：响应式开始监听
    - 实现响应式的核心是 Object.defineProperty
    - 将 data 的属性代理到 vm 上 ( 这里和 render 函数中的 with 的使用有很大的关系，只有把 data 和 methods 代理到 vm 上，才能直接访问 )
- 第三步：首次渲染，显示页面，**且绑定依赖** （ 绑定依赖这里保留疑问，后边会讲 ）
    - 初次渲染，执行 updateComponent ， 执行 vm._render()
    - 执行 render 函数，会访问到 vm.list 和 vm.title （ 这是 data 中的两个变量 ）
    - 访问这两个变量的时候，会被响应式的 get 方法监听到
        - 疑问： 为啥要监听 get ？ 直接监听 set 不行吗？
        - 答案：data 中有很多属性，有些会被用到，有些不会被用到
        - 被用到的会走 get ，不会被用到的不会走 get
        - **未走到 get 中的属性， set 的时候我们也无需关心**
        - 目的：避免不必要的的重复渲染
    - 执行 updateComponent ，会走到， vdom 的 patch 方法
    - patch 将 vdom 渲染成 DOM ， 初次渲染完成
- 第四步：data 属性变化，触发 rerender （ render 函数的再次执行， vnode 的重新 patch ）
    - 数据变化，被响应式的 set 监听到
    - set 中会执行 updateComponent 
    - updateComponent 会重新执行 vm._render()
    - 生成的 vnode 和 prevVnode，通过 patch 进行对比
    - 渲染到 html 中



<!-- 
end at 72h 45min 预计用时 5h 实际用时 6h 10min
-->


# 6. 组件化 和 React
<!-- 
6+10+13+6+6+3+7+14+13+12+3+10+10+12+10+4+8+4+3+7+4+8+17 
190 min

start at 72h 51min

190 * 1.44 = 273 min 也就是 7 小时
-->
- 是否做过 React 开发？
- react 以及组件化的一些概念
- 实现流程
- 题目：
    1. 说一下对组件化的理解
    2. JSX 的本质是什么？
    3. JSX 和 vdom 的关系
    4. 说一下 setState 的过程
    5. 阐述一下自己对 react 和 vue 的认识

## 6.1. todo-list demo
1. 安装 React 脚手架
    ```shell
    sudo npm i create-react-app -g
    ```
2. 创建并初始化 react 项目
    ```shell
    # 初始化 react 项目 后边跟项目的名字 会帮你创建一个名为 react-test 的文件夹
    create-react-app react-test
    ```
3. 在 /src 目录下创建一个 components 文件夹 写入：
    ```javascript
    // 创建 src/components/todo/index.js
    import React, { Component } from "react";
    import List from "./list/index.js"
    import Input from "./input/index.js"

    class Todo extends Component {
        constructor(props){
            super(props);

            // state 保存了 当前这个组件的所有变量
            this.state = {
                list: []
            }
        }

        render(){
            return (
                <div>
                    <Input addTitle={this.addTitle.bind(this)}/>
                    <List data={this.state.list}/>
                </div>
            )
        }

        addTitle(title){
            const currentList = this.state.list;
            this.setState({
                list: currentList.concat(title)
            })
        }
    }
    export default Todo;

    // 创建 src/components/todo/list/index.js
    import React, { Component } from "react";

    class List extends Component {
        constructor(props){
            super(props);
        }

        render(){
            const list = this.props.data;
            return (
                <ul>
                    {
                        list.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            )
        }
    }

    export default List;

    // 创建 src/components/todo/input/index.js
    import React, { Component } from "react";

    class Input extends Component {
        constructor(props){
            super(props);

            this.state = {
                title: ""
            }
        }

        render(){
            return (
                <div>
                    <input value={this.state.title} onChange={this.changeHandler.bind(this)}/>
                    <button onClick={this.clickHandler.bind(this)}>submit</button>
                </div>
            )
        }

        changeHandler(event){
            this.setState({
                title: event.target.value
            })
        }

        clickHandler(){
            const title = this.state.title;

            // 把 title 添加进列表
            const addTitle = this.props.addTitle;
            addTitle(title);    // 重点

            this.setState({
                title: ""
            })
        }
    }

    export default Input;


    // 修改 src/App.js 
    import React from 'react';
    import logo from './logo.svg';
    import './App.css';

    import Todo from "./components/todo/index.js"


    function App() {
        return (
            <div className="App">
                <Todo/>
            </div>
        );
    }

    export default App;
    ```
> TIPS: 看起来是比 vue 的写法复杂了不少，但这次是以做项目的情况来写的，看似复杂，实则是为了之后使用的简单
- 这种组件化的方式（ vue 也是可以的 ）来做大型的项目的开发，才是最好的方式
- 数据和视图分离
- 修改数据驱动视图变化，不直接操作 DOM


## 6.2. 什么是组件（说一下对组件化的理解）
1. 组件的封装
    - **识图** 可以封装
    - **数据** 可以封装
    - **变化逻辑**（ 数据驱动视图变化 ）可以封装
2. 组件的复用
    - props 传递参数 ， 以实现复用

> TIPS: 面向对象三大特性， 五大原则：
<br> 三大特性是：封装,继承,多态  
<br> **封装** ，也就是把客观事物封装成抽象的类，并且类可以把自己的数据和方法只让可信的类或者对象操作，对不可信的进行信息隐藏。封装是面向对象的特征之一，是对象和类概念的主要特性。 简单的说，一个类就是一个封装了数据以及操作这些数据的代码的逻辑实体。在一个对象内部，某些代码或某些数据可以是私有的，不能被外界访问。通过这种方式，对象对内部数据提供了不同级别的保护，以防止程序中无关的部分意外的改变或错误的使用了对象的私有部分。
<br>
<br> **继承** ，是指可以让某个类型的对象获得另一个类型的对象的属性的方法。它支持按级分类的概念。继承是指这样一种能力：它可以使用现有类的所有功能，并在无需重新编写原来的类的情况下对这些功能进行扩展。 通过继承创建的新类称为“子类”或“派生类”，被继承的类称为“基类”、“父类”或“超类”。继承的过程，就是从一般到特殊的过程。要实现继承，可以通过“继承”（Inheritance）和“组合”（Composition）来实现。继承概念的实现方式有二类：实现继承与接口继承。实现继承是指直接使用基类的属性和方法而无需额外编码的能力；接口继承是指仅使用属性和方法的名称、但是子类必须提供实现的能力；
<br>
<br> **多态** ，就是指一个类实例的相同方法在不同情形有不同表现形式。多态机制使具有不同内部结构的对象可以共享相同的外部接口。这意味着，虽然针对不同对象的具体操作不同，但通过一个公共的类，它们（那些操作）可以通过相同的方式予以调用。 
<br>
<br> 五大基本原则 
<br> **单一职责原则SRP(Single Responsibility Principle)** ： 是指一个类的功能要单一，不能包罗万象。如同一个人一样，分配的工作不能太多，否则一天到晚虽然忙忙碌碌的，但效率却高不起来。
<br>
<br> **开放封闭原则OCP(Open－Close Principle)** ： 一个模块在扩展性方面应该是开放的而在更改性方面应该是封闭的。比如：一个网络模块，原来只服务端功能，而现在要加入客户端功能，那么应当在不用修改服务端功能代码的前提下，就能够增加客户端功能的实现代码，这要求在设计之初，就应当将服务端和客户端分开，公共部分抽象出来。
<br>
<br> **替换原则(the Liskov Substitution Principle LSP)**  ： 子类应当可以替换父类并出现在父类能够出现的任何地方。比如：公司搞年度晚会，所有员工可以参加抽奖，那么不管是老员工还是新员工，也不管是总部员工还是外派员工，都应当可以参加抽奖，否则这公司就不和谐了。
<br>
<br> **依赖原则(the Dependency Inversion Principle DIP)** ： 具体依赖抽象，上层依赖下层。假设B是较A低的模块，但B需要使用到A的功能，这个时候，B不应当直接使用A中的具体类： 而应当由B定义一抽象接口，并由A来实现这个抽象接口，B只使用这个抽象接口：这样就达到了依赖倒置的目的，B也解除了对A的依赖，反过来是A依赖于B定义的抽象接口。通过上层模块难以避免依赖下层模块，假如B也直接依赖A的实现，那么就可能造成循环依赖。一个常见的问题就是编译A模块时需要直接包含到B模块的cpp文件，而编译B时同样要直接包含到A的cpp文件。
<br>
<br> **接口分离原则(the Interface Segregation Principle ISP)**  ： 模块间要通过抽象接口隔离开，而不是通过具体的类强耦合起来

## 6.3. JSX 本质


### 6.3.1. 语法演示
1. HTML 形式
2. 引入 JS 变量和表达式
    ```javascript
    function App() {
        const name = "zhangsan";
        const show = true;
        const age = "";
        return (
            <div>
                <p>姓名： {name}</p>
                <p>年龄： {age || 20}</p>
            </div>
        );
    }
    ```
3. if...else...
    ```javascript
    function App() {
        const age = "";
        return (
            <div>
                {show ? <img src="https://www.bilibili.com/favicon.ico"/> : ""}
            </div>
        );
    }
    ```
4. 循环
    ```javascript
    function App() {
        const list = ["1", "2", "3", "4"];
        return (
            <div>
                <ul>
                    {list.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </div>
        );
    }
    ```
5. style 和 className
    ```javascript
    function App() {
        const styleConfig = {
            fontSize: "40px",
            color: "blue"
        };
        return (
            <div className="container">
                <p style={styleConfig}>this is a p</p>
                <p style={{fontSize: "40px",color: "blue"}}>this is a p</p>
            </div>
        );
    }
    // 两种写法都行
    ```
6. 事件


### 6.3.2. 解析成 JS
- JSX 无法被浏览器解析
- 那么它在如何在浏览器运行的？
    ```javascript
    /* JSX 代码 */
    var profile = <div>
                    <img src="avatar.png" className="profile" />
                    <h3>{[user.firstName, user.lastName].join(" ")}</h3>
                  </div>;
    // 解析结果
    var React.createElememt(
        "div", 
        null, 
        React.createElememt("img", { src: "avatar.png", className: "profile" }),
        React.createElememt("h3", null, [user.firstName, user.lastName].join(" "))
    );

    // React.createElememt 参数说明（两种用法）
    React.createElememt("div", {attrKey: "attrValue"}, child1, child2, child3, ...)
    React.createElememt("div", {attrKey: "attrValue"}, [...])

    // 下边是第二种用法 map 方法返回的是一个数组
    render(){
        const list = this.props.data;
        return (
            <ul>
                {
                    list.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        )
    }
    // 解析结果
    render(){
        const list = this.props.data;
        return React.createElememt(
            "ul",
            null,
            list.map((item, index) => {
                return return React.createElememt(
                    "li",
                    { key: index},
                    item
                )
            })
        )
    }
    ```
- JSX 其实是语法糖
- 开发环境将 JSX 编译成 JS 代码
- JSX 的写法大大降低了学习成本和编码工作量
- 同时， JSX 也会增加 debug 的工作量

### 6.3.3. 独立的标准
- JSX 是 React 引入的，单不是 React 独有的
- React 已经将他作为一个独立标准开放，其他项目也可以用
- React.createElememt 是可以自定义修改的
> 说明： JSX 本身的功能已经完备； 和其他标准兼容和扩展性没有问题 <br>
> 另： 有机会会录制《1000行代码实现 React》，就用 JSX 标准
- 代码演示：
    ```shell
    # 创建测试项目的文件夹
    mkdir jsx-test && cd jsx-test 

    # 初始化项目，名称就叫 jsx-test 
    npm init
 
    # 全局安装 bable （ 我安装的时候 babel 已经更名为 babel-cli ）
    sudo npm i babel-cli -g

    # 在项目内安装 jsx 插件
    npm install --save-dev babel-plugin-transform-react-jsx

    ```
    - 在 jsx-test 目录下创建 demo1.jsx  并写入：
    ```javascript
    class Input extends Component {
        render(){
            return (
                <div>
                    <input value={this.state.title} onChange={this.changeHandler.bind(this)}/>
                    <button onClick={this.clickHandler.bind(this)}>submit</button>
                </div>
            )
        }
    }
    ```
    - 在 jsx-test 目录下创建 demo2.jsx  并写入：
    ```javascript
    var profile = <div>
        <img src="avatar.png" className="profile" />
        <h3>{[user.firstName, user.lastName].join(" ")}</h3>
    </div>;
    ```
    - 在 jsx-test 目录下创建 .babelrc 文件，并写入
    ```
    {"plugins": ["transform-react-jsx"]}
    ```
    - 在 jsx-test 目录下执行以下命令，编译
    ```shell
    babel --plugins transform-react-jsx demo1.jsx 
    babel --plugins transform-react-jsx demo2.jsx 
    ```
    ```javascript
    // demo1.jsx 编译结果
    class Input extends Component {
        render() {
            return React.createElement(
                "div",
                null,
                React.createElement("input", { value: this.state.title, onChange: this.changeHandler.bind(this) }),
                React.createElement(
                    "button",
                    { onClick: this.clickHandler.bind(this) },
                    "submit"
                )
            );
        }
    }

    // demo2.jsx 编译结果
    var profile = React.createElement(
        "div",
        null,
        React.createElement("img", { src: "avatar.png", className: "profile" }),
        React.createElement(
            "h3",
            null,
            [user.firstName, user.lastName].join(" ")
        )
    );
    ```
    - 在 demo1.jsx or demo2.jsx 顶部添加以下代码，再进行编译，可以更改 React.createElement 方法名为 h （叫任何其他名字都可以）
    ```javascript
    // 顶部加入这行代码
    /* @jsx h */

    // demo1.jsx 加入 /* @jsx h */ 的编译结果
    /* @jsx h */
    class Input extends Component {
        render() {
            return h(
                "div",
                null,
                h("input", { value: this.state.title, onChange: this.changeHandler.bind(this) }),
                h(
                    "button",
                    { onClick: this.clickHandler.bind(this) },
                    "submit"
                )
            );
        }
    }
    // demo2.jsx 加入 /* @jsx _c */ 的编译结果
    /* @jsx _c */
    var profile = _c(
        "div",
        null,
        _c("img", { src: "avatar.png", className: "profile" }),
        _c(
            "h3",
            null,
            [user.firstName, user.lastName].join(" ")
        )
    );
    ```
    - 所以我们是可以 **自定义 React.createElement** 的

### 6.3.4. 总结（问题解答）
- JSX 语法 （ 标签 、 JS 表达式 、 判断 、 循环 、 事件绑定 ）
- JSX 是语法糖，最重要被解析成 JS 才能运行
    - 要联想到两点：第一，vue 中的模板是被怎样解析成模板的？
    - 第二，JSX 最终被解析成的 JS 的格式是啥样的？
        - React.createElement 类似于 vdom 中的 h 函数
- JSX 是独立的标准，可以被其他项目使用


## 6.4. JSX 和 vdom 的关系
- 分析： 为何需要 vdom
- React.createElement 和 h
- 何时 patch ？ 
- 自定义组件的解析 

### 6.4.1. vdom 回顾
- vdom 是 React 推广开来的， 他和 JSX 是分不开的
- JSX 就是模板，最终要渲染成 HTML
- 初次渲染 + 修改 state 之后的 re-render
- 正好符合 vdom 的应用场景
- vdom 如何应用， 核心 API 是什么？
    - 如何使用？ 可以用 snabbdom 用法来举例
    - 核心 API : h 函数、 patch 函数

### 6.4.2. 何时 patch
- 初次渲染 - ```ReactDOM.render(<App />, container);```
- 会触发 ```patch(container, vnode);```
- re-render - ```setState()```
- 会触发 ```patch(vnode, newVnode);```
- 代码演示：
    ```javascript
    // 之前的 react-test 项目中 src/index.js 中有如下代码：
    ReactDOM.render(<App />, document.getElementById('root'));
    // 会触发 patch(container, vnode);

    // 之前的 react-test 项目中 src/component/todo/index.js 中有如下代码：
    this.setState({
        list: currentList.concat(title)
    });
    // 会触发 patch(vnode, newVnode);
    ```

### 6.4.3. 自定义组件的处理

- 在 jsx-test 目录下创建 demo3.jsx  并写入：
    ```javascript
    import List from "./list/index.js"
    import Input from "./input/index.js"

    function render(){
        return (
            <div>
                <p>this is demo</p>
                <Input addTitle={this.addTitle.bind(this)}/>
                <List data={this.state.list}/>
            </div>
        )
    }
    ```
- 在 jsx-test 目录下执行以下命令，编译
    ```shell
    babel --plugins transform-react-jsx demo3.jsx 
    ```
    ```javascript
    // demo3.jsx 编译结果
    import List from "./list/index.js";
    import Input from "./input/index.js";

    function render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "p",
                null,
                "this is demo"
            ),
            React.createElement(Input, { addTitle: this.addTitle.bind(this) }),
            React.createElement(List, { data: this.state.list })
        );
    }
    ```
- ```'div'``` 直接渲染为 ```<div></div>``` 即可， vdom 可以做到
- Input 和 List 是自定义组件（ class ） ， vdom 默认是不认识的
- 因此 Input 和 List 自定义的时候必须声明 render 函数
- 根据 props 初始化实例， 然后执行实例对象的 render 函数
    ```javascript
    // List 的使用
    <List data={this.state.list}/>

    // 上边的 JSX 转换成了下边的 JS 代码
    React.createElement(List, { data: this.state.list })

    // 可以理解为这样：
    var list = new List({ data: this.state.list });
    return list.render();

    // 最后执行的是 List 组件的 render 函数
    render(){
        const list = this.props.data;
        return (
            <ul>
                {
                    list.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        )
    }
    // 最终还是由原生的 HTML 标签承载
    ```
- render 函数返回的还是 vnode 对象


### 6.4.4. 问题解答：jsx 和 vdom 有什么关系？
- 为何需要 vdom ： JSX 需要渲染成 HTML ， 数据驱动识图
- React.createElement 和 h 函数 ， 都生成 vnode 
    - 他俩的区别在于 h 函数的第一个参数名称就是 HTML 原生标签
    - React.createElement 第一个参数除了原生标签还有 **自定义组件的名称**
- 何时 patch ： ReactDOM.render() 和 setState 的时候
- 自定义组件的解析： 初始化实例，然后执行 render

## 6.5. setState
- 问题：说一下 React setState 的过程
- setState 是异步的
- vue 修改属性也是异步的
- setState 的过程

### 6.5.1. 异步
- 用之前的 addTitle 测试一下：
    ```javascript
    addTitle(title){
        const currentList = this.state.list;
        console.log(this.state.list);           // ["a", "b"]
        this.setState({
            list: currentList.concat(title)     // "c"
        })
        console.log(this.state.list);           // ["a", "b"]
    }
    ```
- setState 为何需要异步？
    - 可能会一次执行多次 setState 
    - 无法规定、限制用户（开发者）如何使用 setState 
    - 没必要每次 setState 都重新渲染，考虑性能
    - 即使是每次重新渲染，用户也看不到中间的效果
    - 只看到最后的结果即可

### 6.5.2. 回顾 vue 修改属性也是异步的
- 效果、原因和 setState 一样
- set 中执行 updateComponent 是异步的

### 6.5.3. setState 的过程
- 每个组件实例，都有 renderComponent 方法（ 继承自 Component ）
- 执行 renderComponent 的时候，会重新执行实例的 render
- render 函数返回 newVnode ， 然后拿到 prevVnode
- 执行 ```patch(prevVnode, newVnode);```

### 6.5.4. 问题解答：说一下 React setState 的过程
- setState 是异步的： 效果、原因
- vue 修改属性也是异步的： 效果、原因
- setState 过程： 最终走向了 ```patch(prevVnode, newVnode);```


## 6.6. 总结
- 说一下多组件化的理解
    - 组件的封装：封装试图、数据、变化逻辑
    - 组建的复用：props 传递（实现差异化）、复用
- JSX 的本质是什么？
    - JSX 语法 （ 标签 、 JS 表达式 、 判断 、 循环 、 事件绑定 ）
    - JSX 是语法糖，最重要被解析成 JS 才能运行
        - 要联想到两点：第一，vue 中的模板是被怎样解析成模板的？
        - 第二，JSX 最终被解析成的 JS 的格式是啥样的？
            - React.createElement 类似于 vdom 中的 h 函数
    - JSX 是独立的标准，可以被其他项目使用
- JSX 和 vdom 的关系
    - 为何需要 vdom ： JSX 需要渲染成 HTML ， 数据驱动识图
    - React.createElement 和 h 函数 ， 都生成 vnode 
        - 他俩的区别在于 h 函数的第一个参数名称就是 HTML 原生标签
        - React.createElement 第一个参数除了原生标签还有 **自定义组件的名称**
    - 何时 patch ： ReactDOM.render() 和 setState 的时候
    - 自定义组件的解析： 初始化实例，然后执行 render
- 说一下 setState 的过程
    - setState 是异步的： 效果、原因
    - vue 修改属性也是异步的： 效果、原因
    - setState 过程： 最终走向了 ```patch(prevVnode, newVnode);```

- 阐述一下自己对 React 和 Vue 的认识 （内容比较多，看下一节）

## 6.7. react 和 vue 对比
> 前言 <br>
> 文无第一，武无第二，技术选型没有绝对的对错 <br>
> 技术选型考虑的因素非常多 <br>
> 作为面试者，你要有自己的主见 <br>
> 和面试官的观点不一致没关系，只要你能说出理由 <br>

### 6.7.1. 两者本质的区别
- vue 本质是 **MVVM 框架** ，由 MVC 发展而来
- React 本质是 **前端组件化框架** ，由后端组件化框架发展而来
- 这并不妨碍两者都能实现相同的功能
- 模板的区别
    - vue - 使用模板（最初由 angular 提出）
    - React - 使用 JSX
    - 模板语法上，我更加倾向于 JSX
        - JSX 只需要知道一个规则，便是大括号中的都是可以执行的 js 表达式
        - 而 vue 模板中 在 ```v-if="isShow"``` 和 ```{{userName}}``` 中都使用的 js 的变量，没有一个统一的规则
    - 模板分离上，我更加倾向于 vue
        - JSX 模板和 JS 混在一起，未分离
        ```javascript
        return (
            <div>
                <Input addTitle={this.addTitle.bind(this)}/>
                <List data={this.state.list}/>
            </div>
        )
        ```

### 6.7.2. 看模板和组件化的区别
- React 本身就是组件化，没有组件化就不是 React
- vue 也支持组件化，不过是在 MVVM 上的扩展
- 查阅 vue 组件化的文档，洋洋洒洒很多（侧面反映）
- 所以对于组件化，我更倾向于 React ， 做得更彻底更清晰

### 6.7.3. 两者的共同点
- 都支持组件化
- 都是数据驱动识图

### 6.7.4. 总结问题的答案
- 国内使用，首推 vue 文档更易读、易学、社区够强大（ 文档写的非常好， 滴滴又一个前端专门研究 vue 还出了书 叫啥？？？ ）
- 团队水平较高的，还是推荐使用 React ，因为组件做的更彻底 而且 JSX 也成为了标准



<!-- 
end at 77h 57min 预计用时 7h 实际用时 5h 06min
-->


# 7. hybrid
<!-- 
6.5+11+7+11.4+5.5+10.5+5.5+10.7+6+6+7+9.5+3.3+4.8
105 min

start at 78h 00min

106 * 1.44 = 150 min 也就是 2.5 小时
-->
- 移动端占大部分流量，已经远超 PC 
- 一线互联网公司都有自己的 APP
- 这些 APP 中有很大比例的前端代码（页面）
- 拿微信举例，你每天浏览的微信内容，有多少是前端？

## 7.1. hybrid 是什么，为什么用？
- hybrid 文字解释
    - hybrid 即“混合”， 即前端和客户端的混合开发
    - 需前端开发人员和客户端开发人员配合完成
    - 某些环节也可能设计到 server 端
    - PS : 不要以为自己是前端就可以不理会客户端 or server 端的知识
- 存在价值，为何会用 hybrid
    - 可快速迭代更新【关键】（ 无需 app 审核，思考为何？ ）
    - 体验流畅（ 和 NA 的体验基本类似 ）
    - 减少开发和沟通成本，双端公用一套代码
- webview
    - 是 app 中的一个组件（ app 可以有 webview ，也可以没有 ）
    - 用于加载 h5 页面，即一个小型的浏览器内核
- ```file://``` 协议
    - 其实在一开始接触 HTML 开发，就已经使用了 ```file://``` 协议
    - 只不过当时你没有 “协议” 、 “标准” 等这些概念
    - 再次强调 “协议” 、 “标准” 的重要性 ！！！
    - ```file://``` 协议： 本地文件，快
    - ```http(s)://``` 协议： 网络加载，慢
- hybrid 实现流程
    - 不是所有场景都适合使用 hybrid
    - 使用 NA ： 体验要求机智，变化不频繁（ 如头条首页 ）
    - 使用 hybrid ： 体验要求高，变法频繁（ 如头条的新闻详情页 ）
    - 使用 h5 ： 体验无要求，不常用（ 如举报、反馈等页面 ）
    - 具体实现：
        - 前端做好静态页面（ html 、 css 、 js ），将文件交给客户端
        - 客户端拿到前端静态页面，以文件形式存储在 app 中
        - 客户端在一个 webview 中，使用 file 协议加载静态页面
        - 遗留问题：
            - app 发布之后，如何上线更新
            - 静态页面如何获取内容？
### 7.1.1. 问题解答：hybrid 是什么，为什么用？
- hybrid 是客户端和前端的混合开发
- hybrid 存在的核心意义在于快速迭代，无需审核
- hybrid 实现流程，以及 webview 和 file 协议


## 7.2. 介绍一下 hybrid 更新上线流程？
- 回顾 hybrid 的实现流程
- 思考 （ 目的、实现途径 ）
    - 要替换每个客户端的静态文件
    - 只能客户端来做（ 客户点也是我们的客户端同事开发的 ）
    - 客户端去 server 下载最新的静态文件
    - 我们去维护 server 的静态文件
- 更新流程
    - 分版本，有版本号， 如 201909081708
    - 将静态文件 **压缩成 zip 包** ，上传到服务器
    - 每次客户端启动，都去服务端 **检查版本号**
    - 如果服务端版本号大于客户端版本号，就去下载最新的 zip 包
    - 下载完成之后解压包，将现有文件覆盖

### 7.2.1. 问题解答： 介绍一下 hybrid 更新上线流程？
- 掌握流程图
- 要点1： 服务端的版本和 zip 包维护
- 要点2： 更新zip 包之前，先对比版本号
- 要点3： zip 下载解压和覆盖


## 7.3. hybrid 和 h5 的比较
- hybrid 相对 h5 的优点
    - 体验更好，跟 NA 体验基本一致
    - 可快速迭代，无需 app 审核【关键】
- hybrid 相对 h5 的缺点
    - 开发成本高：联调、 测试 查 bug 都比较麻烦
    - 运维成本高：参考更新上线流程（要搭建一个工更新的服务器，支持上传，支持分版本，支持打包，还要考虑一些 **安全问题** ：防作弊呀，验证呀）
- 适用场景
    - hybrid ： 产品的稳定功能，体验要求高，迭代频繁
    - h5 ： 单次运营活动（ 如XX红包 ）或不常用功能

### 7.3.1. 问题解答 ： hybrid 和 h5 的比较
- hybrid 相较 h5 优点： 体验好，可快速迭代
- hybrid 相较 h5 缺点： 开发成本高，运营成本高
- 使用场景： hybrid 适合产品型 ， h5 适用于运营型

## 7.4. JS 和客户端通讯
- 回顾之前遗留的问题：静态页面如何获取内容？
- JS 和客户端通讯的基本形式
- schema 协议简介和使用（ 前端和客户端通信的一个协议 ）
- schema 使用的封装
- 内置上线

### 7.4.1. 之前遗留的问题： 新闻详情页使用 hybrid ，前端页面如何获取新闻内容？
- 不能使用 ajax 获取，因为两个问题：第一 跨域 ，第二 速度慢 
- 客户端获取内容（相比 js 的优势就在于可以在页面加载完成之前就开始获取），然后 JS 通讯拿到内容，再渲染

### 7.4.2. 基本形式：
- JS 访问客户端能力，传递参数和会调函数
- 客户端通过回调函数返回内容

### 7.4.3. schema 协议
- 简介和使用
    - 之前就介绍了 ```http(s)://``` 和 ```file://``` 协议
    - schema 协议 —— 前端和客户端通讯的约定
- 网上找的一些微信的 schema 协议（ 内容正确与否不确定 ，但是格式肯定是对的 ）
    ```
    weixin://dl/general
    weixin://dl/favorites 收藏
    weixin://dl/scan 扫一扫
    weixin://dl/feedback 反馈
    weixin://dl/moments 朋友圈
    weixin://dl/settings 设置
    weixin://dl/notifications 消息通知设置
    weixin://dl/chat 聊天设置
    weixin://dl/general 通用设置
    weixin://dl/officialaccounts 公众号
    weixin://dl/games 游戏
    weixin://dl/help 帮助
    weixin://dl/feedback 反馈
    weixin://dl/profile 个人信息
    weixin://dl/features 功能插件
    ```
- 演示：
    ```javascript
    /* 以下代码只是演示，无法正常运行，微星有着严格的权限验证，外部页面不能随意使用 schema  */

    function invokeScan(){
        var iframe = document.createElement("iframe");
        iframe.style.display = "none";
        iframe.src = "weixin://dl/scan";        // iframe 访问 schema
        var body = doucment.body || document.getElementByTagName("body")[0];
        body.appendChild(iframe);

        // 用完之后删掉，防止多次使用的情况下创建多个 iframe ，造成内存泄漏
        // 使用异步的方式将 iframe 移除，因为异步不会影响当前的执行 
        setTimeout(function(){
            body.removeChild(iframe);       // 销毁 iframe
            iframe = null;
        });
    }

    document.getElementById("btn").addEventListener("click", function(){
        invokeScan();
    })


    /* 如果要加上参数 和 callback ， 那就这么写 */
    // 用于客户端调用前端的代码
    window['_weixin_sacn_callback'] = function(resault){
        alert(resault);
    }

    // 省略...
    iframe.src = "wexin://dl/sacn?k1=v1&k2=v2&k3=v3&callback=_weixin_sacn_callback"
    // 省略...
    ```
- schema 使用的封装
    ```javascript
    // 封装的结果：傻瓜式调用， 而且不用自己在定义全局函数
    window.invoke.share({title: "xxx", content: "yyyyy"}, function(result){
        if(result.erron === 0){
            alert("分享成功");
        }else{
            // 分享失败
            alert(result.message);
        }
    })
    ```
    - 具体实现
    ```javascript
    // 分享
    function invokeShare(data, callback){
        _invoke("share", data, callback);
    }

    // 登录
    function invokeLogin(data, callback){
        _invoke("login", data, callback);
    }

    // 打开扫一扫
    function invokeScan(data, callback){
        _invoke("scan", data, callback);
    }

    // 暴露给全局
    window.invoke = {
        share: invokeShare,
        login: invokeLogin,
        scan: invokeScan
    }


    function invoke(action, data, callback){
        // 拼接 schema 协议
        var schema = "myapp://utils";
        schema += "/" + action;

        schema += "?a=a"
        var key;
        for(key in data){
            if(data.haOwnProperty(key)){
                schema += "&" + key + "=" data[key];
            }
        }

        // 处理 callback
        var callbackName = "";
        if(typeof callback === "string"){
            callbackName = callback;
        }else{
            callbackName = action + Date.now()
            window[callbackName] = callback;                // ？？？？
        }

        schema += "callback=" + callbackName;

        // iframe 中调用 schema
        var iframe = document.createElement("iframe");
        iframe.style.display = "none";
        iframe.src = schema;        // iframe 访问 schema
        var body = doucment.body || document.getElementByTagName("body")[0];
        body.appendChild(iframe);

        setTimeout(function(){
            body.removeChild(iframe);
            iframe = null;
        });
    }

    // 调用 扫一扫
    document.getElementById("btn1").addEventListener("click", function(){
        window.invoke.scan({}, function(){});
    });
    // 调用 分享
    document.getElementById("btn2").addEventListener("click", function(){
        window.invoke.share({
            title: "分享标题",
            content: "分享分内容",
            function(result){
                if(result.erron === 0){
                    alert("分享成功");
                }else{
                    // 分享失败
                    alert(result.message);
                }
            }
        });
    })
    ```
- 内置上线
    - 将以上代码打包，叫做 invoke.js ，内置到客户端
    - 客户端每次启动 webview ， 都默认执行 invoke.js 
    - 本地加载，免去网络加载的时间， 更快
    - 本地加载，没有网络请求，黑客看不到 schema 协议，更安全

- 问题解答：前端 JS 如何和 客户端通讯？
    - 通讯的基本形式： 调用能力、传递参数、监听回调
    - 对 schema 协议的理解和使用
    - 调用 schema 代码的封装
    - 内置上线的好处： 更快、更安全


## 7.5. 总结
- hybrid 是什么？ 为什么用 hybrid ？
    - hybrid 是客户端和前端的混合开发
    - hybrid 存在的核心意义在于快速迭代，无需审核
    - hybrid 实现流程，以及 webview 和 file 协议
- 介绍一下 hybrid 更新上线流程？
    - 掌握流程图
    - 要点1： 服务端的版本和 zip 包维护
    - 要点2： 更新zip 包之前，先对比版本号
    - 要点3： zip 下载解压和覆盖
- hybrid 和 h5 的主要区别
    - hybrid 相较 h5 优点： 体验好，可快速迭代
    - hybrid 相较 h5 缺点： 开发成本高，运营成本高
    - 使用场景： hybrid 适合产品型 ， h5 适用于运营型
- 前端 JS 和客户端如何通讯？
    - 通讯的基本形式： 调用能力、传递参数、监听回调
    - 对 schema 协议的理解和使用
    - 调用 schema 代码的封装
    - 内置上线的好处： 更快、更安全

<!-- 
end at 81h 10min 预计用时 2.5h 实际用时 5个番茄钟 即 2h 5min
-->



# 8. 课程总结

<!-- 
5+12+8
25 min

start at 81h 10min

25 * 1.44 = 36 min 也就是 0.5 小时
-->

## 8.1. nodejs
- 为何不讲 nodejs
    - 小白程序员到 nodejs 的距离： 10公里
    - java 程序员到 nodejs 的距离： 3公里
    - 纯前端程序员到 nodejs 的距离： 7公里
- nodejs 到底是什么？
    - nodejs —— 为了做后端开发，选用了 JS 这门语言 
    - 你了解后端开发吗？光会一门语言的语法可远远不够！
    - 后端开发和前端开发完全是不一样的思路和设计
    - stream - server 端的概念
    - fs 或存储 - server 端的概念
    - 以及，服务器的运维（ 均衡、监控、报警等 ）
    - nodejs 并不是像原型、异步一样，隶属于 JS 的一个模块
    - nodejs 是一个独立的技术栈，只不过用了 JS 的语法而已

<!-- 会规划一门课程 专门讲 nodejs 面试技巧 -->

## 8.2. 如何热爱编程
- 热爱！
- 怎么证明？
    1. 看书
        - 手不离书
        - 看书是构建知识体系的最好方式
        - 自己买书，不要借书，不要买电子书
        - 看书有技巧，做标记，做折页
        - 想要 2w 的月薪？那你先看完 2k 的书！
        - 看书要有产出：读书笔记（ 哪些看懂的？那些没看懂 ）
    2. 写博客
        - 合格程序员的必备
        - 写博客的经历和感悟
        - 是一个自我总结的过程
        - 也是一个与别人交流的过程
        - 如何让更多的人看？（ 选择合适的平台 ， 公众号 ，博客平台 github 等 ）
        - 面对质疑和打击怎么看待？
    3. 做开源
       - github 的 star 是硬通货
       - 开源的经理和感悟
       - 做什么？ 另外，立刻开始写，不要思考太多！（前怕狼后怕虎）
       - 要做好官网和文档，以及 QQ 群、 微信群等社区
       - 及时回复 issue ， 及时迭代发版
       - 如何推广？写博客等，以及推广过程中的质疑 


<!-- 
end at 81h 41min 预计用时 0.5h 实际用时 0.5h 
-->
# JavaScript

## 1.1. ES6 语法

### 1.1.1. 【问题】ES6 模块化如何使用，开发环境怎么打包
- 语法： import export （ 注意有无 default ）
- 环境：babel 是用来编译 ES6 语法的， 模块化可以用 webpack 和 rollup 
- 扩展：说一下自己对模块化标准统一的期待

### 1.1.2. 【问题】Class 和普通构造函数有何区别
- Class 在语法上更加贴合面向对象的写法
- Class 实现继承更加易读、易理解
- 更易于写 java 等后端语言的使用
- **本质**还是语法糖，使用 prototype 
- 所有的语法糖都需要了解本质

### 1.1.3. 【问题】Promise 的基本使用和原理
- 创建 Promis 实例，传入一个回调函数，函数要有 resolve 和 reject 这两个参数
- 在这个回调函数里你可以定义什么情况执行 resolve （一般是成功）， 什么情况执行 reject （一般是失败）
- 使用 Promise 实例的 .then() 监听结果，处理相应的 成功回调 或者 失败回调

### 1.1.4. 【问题】总结一下 ES6 的常用功能
- let/const
- 多行字符 / 模板字符串 （都得用反引号）
- 解构赋值
- 块级作用域（ 在代码块 ```{}``` 中声明的变量，在块外访问不到 ）
- 函数默认参数
- 箭头函数
    > 这些功能要么是解决了 JS 的问题，要么是让写法更简洁，容易阅读容易理解

## 1.2. 原型 

### 1.2.1. 【问题】说一个原型的实际应用
- 描述一下 jQuery 如何使用原型
- 描述一下 zepto 如何使用原型
- 自己的项目经验中哪些用到了原型

### 1.2.2. 【问题】原型如何实现它的扩展性
- 先说一下 jQuery 和 zepto 的插件机制
- 结合自己的开发经验，做过的基于原型的插件

## 1.3. 异步

### 1.3.1. 【问题】什么是单线程？和异步有什么关系？ 
- 单线程就是同一时间只能做一件事儿，两段js不能同时执行
- 原因就是为了避免 DOM 渲染的冲突
- 异步是一种 “无奈” 的选择，虽然有很多问题（回调地狱、书写顺序和执行顺序不一样）

### 1.3.2. 【问题】什么是 event-loop ？
- 也叫事件轮询，是 JS 实现异步的**具体解决方案**
- 同步的代码，直接在主进程（or 线程？）中执行
- 异步函数先放在 **异步队列** 中（如果有延时就延时放在异步队列中）
- 待同步代码执行完毕， **轮询执行** 异步队列代码

### 1.3.3. 【问题】是否用过 jQuery 的 Deferred 
- jQuery 1.5 前后的 ajax 改变举例
- 说明如何简单封装，使用 Deferred （最好提及 开放封闭原则）
- 说明 promise 和 Deferred 的区别
    - Deferred 对象有 reslove reject 这种主动触发的函数，也有 then done fail 这种被动监听的函数，这些函数都能被访问是不行的，容易被滥用
    - 通过生成一个 promise 对象类隔离， promise对象只能被动监听
    
### 1.3.4. 【问题】Promise 的基本使用和原理
- 基本语法（创建实例，创建的时候定义啥时候成功、啥时候失败；实例 .then .catch）
- 如何捕获异常（ Error 和 reject 都考虑，都可以通过 catch 捕获）
- 多个串联 - 链式执行 
- Promise.all 和 Promise.race
- Promise 标准，状态变化的方向 ， then 函数

### 1.3.5. 【问题】介绍一下 Async/Await （和 Promise 的区别、联系）
- 讲一下 async / await 的基本语法
- async / await 使用了  Promise ，并没有和 Promise 冲突
- 完全是同步的写法，再也没有回调函数
- 但是：改变不了JS单线程、异步的本质

### 1.3.6. 【问题】总结一下当前 JS 解决异步的方案
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

## 1.4. 虚拟 DOM

### 1.4.1. 【问题】vdom 是什么？为何会存在vdom？（讲透）
- virtual dom ，虚拟 dom
- 用 js 模拟 DOM 结构
- dom 操作非常 “昂贵”
- 将dom对比放在js层，提高重绘性能

### 1.4.2. 【问题】vdom 的应用，核心 API 是什么？（讲透）
- 如何使用？ 可以用 snabbdom 用法来举例
- 核心 API : h 函数、 patch 函数

### 1.4.3. 【问题】**介绍**一下 diff 算法（非常复杂，介绍即可）
- 知道什么是 diff 算法， 是 linux 的基础命令
- vdom 中应用 diff 算法是为了找出需要更新的节点
- diff 实现： ```patch(containter, vnode)``` 和 ```patch(vnode, newVnode)```
- 核心逻辑： ```createElement``` 和 ```updateChildren```

## 1.5. MVVM 和 vue

### 1.5.1. 【问题】说明一下使用 jquery 和使用 框架的区别
- 框架的数据和视图的分离
    - jquery 的 视图和数据是混在一起的
    - jquery 不符合开放封闭原则
    - jquery 直接操作dom
    - vue 的数据都在 data 中
- 框架以数据驱动视图
    - jquery 除了修改数据 还需要修改视图
    - vue 修改数据，识图自动更新
    
### 1.5.2. 【问题】说一下对 MVVM 的理解
- MVVM : Model View viewModel
- 三者之间的联系，以及如何对应到各段代码
- 对 viewModel 的理解， 联系 view 和 model 的桥梁

### 1.5.3. 【问题】vue 如何实现响应式
- **关键是理解 Object.defineProperty**
- **将 data 的属性代理到 vm 上** （补充：methods 中的方法也会被代理到 vm ，即 vue 的实例上，so ： data 中的属性最好不要和 methods 中的方法名相同？？？ ）

### 1.5.4. 【问题】vue 如何解析模板
- 模板： 本质是字符串、有逻辑、可以嵌入js变量
- 模板必须转换为 JS 代码 （ 有逻辑 、 渲染 HTML 、 JS 变量 ）
- render 函数是什么样子的 ？（ 有 with ，类似 vdom 的 h 函数 ）
- render 函数执行返回的是 vnode
- updateComponent 中执行 patch （ 首次渲染啥样？非首次渲染啥样？ ）

### 1.5.5. 【问题】vue 的整个实现流程
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

## 1.6. 组件化 和 React

### 1.6.1. 【问题】说一下对组件化的理解
- 组件的封装
    - **识图** 可以封装
    - **数据** 可以封装
    - **变化逻辑**（ 数据驱动视图变化 ）可以封装
- 组件的复用
    - props 传递参数 ， 以实现复用
    
### 1.6.2. 【问题】JSX 的本质是什么？
- JSX 语法 （ 标签 、 JS 表达式 、 判断 、 循环 、 事件绑定 ）
- JSX 是语法糖，最重要被解析成 JS 才能运行
    - 要联想到两点：第一，vue 中的模板是被怎样解析成模板的？
    - 第二，JSX 最终被解析成的 JS 的格式是啥样的？
        - React.createElement 类似于 vdom 中的 h 函数
- JSX 是独立的标准，可以被其他项目使用

### 1.6.3. 【问题】JSX 和 vdom 的关系
- 为何需要 vdom ： JSX 需要渲染成 HTML ， 数据驱动识图
- React.createElement 和 h 函数 ， 都生成 vnode 
    - 他俩的区别在于 h 函数的第一个参数名称就是 HTML 原生标签
    - React.createElement 第一个参数除了原生标签还有 **自定义组件的名称**
- 何时 patch ： ReactDOM.render() 和 setState 的时候
- 自定义组件的解析： 初始化实例，然后执行 render

### 1.6.4. 【问题】说一下 setState 的过程
- setState 是异步的： 效果、原因
- vue 修改属性也是异步的： 效果、原因
- setState 过程： 最终走向了 ```patch(prevVnode, newVnode);```

### 1.6.5. 【问题】阐述一下自己对 react 和 vue 的认识
- 国内使用，首推 vue 文档更易读、易学、社区够强大（ 文档写的非常好， 滴滴又一个前端专门研究 vue 还出了书 叫啥？？？ ）
- 团队水平较高的，还是推荐使用 React ，因为组件做的更彻底 而且 JSX 也成为了标准

## 1.7. hybrid

### 1.7.1. 【问题】hybrid 是什么，为什么用？
- hybrid 是客户端和前端的混合开发
- hybrid 存在的核心意义在于快速迭代，无需审核
- hybrid 实现流程，以及 webview 和 file 协议

### 1.7.2. 【问题】介绍一下 hybrid 更新上线流程？
- 掌握流程图
- 要点1： 服务端的版本和 zip 包维护
- 要点2： 更新zip 包之前，先对比版本号
- 要点3： zip 下载解压和覆盖

### 1.7.3. 【问题】hybrid 和 h5 的比较？
- hybrid 相较 h5 优点： 体验好，可快速迭代
- hybrid 相较 h5 缺点： 开发成本高，运营成本高
- 使用场景： hybrid 适合产品型 ， h5 适用于运营型

### 1.7.4. 【问题】JS 和客户端怎么通讯？
- 通讯的基本形式： 调用能力、传递参数、监听回调
- 对 schema 协议的理解和使用
- 调用 schema 代码的封装
- 内置上线的好处： 更快、更安全

## 1.8. 课程总结

### 1.8.1. 关于 nodejs
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


### 1.8.2. 【问题】你热爱编程吗？ 怎么证明？
- 热爱！怎么证明：
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
        - 开源的经历和感悟
        - 做什么？ 另外，立刻开始写，不要思考太多！（前怕狼后怕虎）
        - 要做好官网和文档，以及 QQ 群、 微信群等社区
        - 及时回复 issue ， 及时迭代发版
        - 如何推广？写博客等，以及推广过程中的质疑 

# CSS

# HTML
# 面试记录2020

- [1. 58同城（内推）](#1-58同城内推)
	- [1.1. 一面](#11-一面)
	- [1.2. 二面](#12-二面)
	- [1.3. 三面](#13-三面)
- [2. 华米](#2-华米)
    - [2.1. 一面](#21-一面)
- [3. 滴滴](#3-滴滴)
    - [3.1. 一面](#31-一面)
    - [3.2. 二面](#32-二面)
- [4. 美术宝](#4-美术宝)
    - [4.1. 一面](#41-一面)
    - [4.2. 二面](#42-二面)
- [5. 百度地图](#5-百度地图)
    - [5.1. 一面、二面、三面 20200519 15:00](#51-一面二面三面-20200519-1500)
        - [5.1.1. 一面](#511-一面)
        - [5.1.2. 二面](#512-二面)
        - [5.1.3. 三面](#513-三面)
    - [5.2. 第二次去现场](#52-第二次去现场)
        - [5.2.1. 第二次三面 😭](#521-第二次三面-)
        - [5.2.2. 技术经理面](#522-技术经理面)
- [6. 腾讯](#6-腾讯)
    - [6.1. 一面 20200518 15:00](#61-一面-20200518-1500)
- [7. 启航考研（爱启航）](#7-启航考研爱启航)
    - [7.1. 一面](#71-一面)
    - [7.2. 二面](#72-二面)
    - [7.3. HR 面](#73-hr-面)
- [8. 百望股份 （做电子税务的服务平台：百望云）](#8-百望股份-做电子税务的服务平台百望云)
    - [8.1. 一面](#81-一面)
- [9. 美团](#9-美团)
    - [9.1. 一面](#91-一面)
- [10. 百度](#10-百度)
    - [10.1. 一面](#101-一面)
    - [10.2. 二面](#102-二面)
- [11. 阿里巴巴-高德地图业务部](#11-阿里巴巴-高德地图业务部)
- [12. 度小满金融](#12-度小满金融)
    - [12.1. 电话面试](#121-电话面试)
    - [12.2. 技术一面](#122-技术一面)
- [13. 微吼（内推）](#13-微吼内推)
    - [13.1. 提问](#131-提问)
    - [13.2. 笔试题](#132-笔试题)
    - [13.3. 提问部分](#133-提问部分)

## 1. 58同城（内推）

### 1.1. 一面
时间 20200603 11:00

- 自我介绍 
    - 工作内容，有什么成绩？
- 如何规范小组成员的代码质量
    - 怎么保证工作流程会严格按照规范执行
    - 规范中用的比较多的是啥？或者说你最多提的修改意见是什么？
    - 你会每一行都看吗？除了人肉解决有没有想过用工具来解决这个问题？
    - 除了代码规范之外还有其他的规范吗？（我觉得这里言外之意是 在工程化上还做了哪些方面的事情？ ）
    - 如果遇到了问题，你想知道具体的哪次 commit 出的问题，你会怎么做？
- vue 的 webpack 是自己配置的还是 cli 生成的？ 自己有通过配置实现自定义的功能吗？
- vue 响应式的原理是什么？
    - 2 、 3 有什么不同？优缺点
    - vue 做 H5 如何适配不同的屏幕呢？
    - vw 了解吗？ 为啥不用 vw ？
- 什么情况下会出现跨域？
    - 58.com 和 m.58.com 会出现跨域问题吗？
    - 两个服务器之间也会跨域吗？
    - 怎么解决跨域问题？
    - jsonp 有哪些缺点？还有什么更好的方法？
    - 能详细的讲一下 CORS 的头有哪些吗？
    - Access-Control-Allow-Origin 配置 * 和 确定的域名有什么区别？
    - **如果希望 CORS 能携带 cookie 需要怎么配置**
- 我希望一个页面即希望他打开快一些，希望他竟可能缓存，又希望他能在服务端更新后尽可能快的更新，该怎么配置缓存的策略？
- 网络攻击的常见形式有哪些？
    - 说一下 CSRF 吧 
- node 有做过吗？
- 【编程题】结账的时候 抹掉 0 ，接收两个参数，第一个参数是总价，第二个参数是抹零的位数：1 的话抹掉分位，2 的话抹掉 角和分，3 的话抹掉元角分位，有哪些方法？
    - 我回答的第一个方法是字符串转数组，在一个一个改，
    - 面试官追问有没有更简单的，想到了直接用扩大100倍，然后除以10的抹零位数次方，取整，再除以100 
- 有没有什么我没问到的你比较擅长的，你讲一下。。。举个例子
- 有什么要问我的？
    - 有什么可以提升的？
        > 你的状况现在在对东西有深入的了解，更进一步的话，需要扩大技术视野
        > 后端、数据库、大数据、统计方面的、原生开发方面
        > 比较好学的一个人，一顿夸


### 1.2. 二面
时间 20200604 14:00 
- 先简单的做一下自我介绍
- 最近半年（空窗期）在做什么？
    - 你在学哪些前端的知识？
    - 为什么学 vue 呢？你之前已经用它做过项目了
- 有收到 offer 吗？
- 离职原因是什么？
- **找一个比较有代表性的项目，有挑战性的，讲一下**
    - 讲了秒杀中的倒计时，遇到的问题和解决
        1. 用服务器时间
        2. 定时器长时间后不准的问题
        3. 切面切换到后台变慢的问题
        4. 请求到服务器的时间差的问题（网络传输的时间）
            > 发请求的时候你给服务器传一个时间，
    - 有考虑过时差吗，时区的差别（这个没考虑过）
- 还有吗？（我没准备，也没说上来，其实可以讲一下文件分片上传的项目）
- 看你有些规范的制定，你做了那些事儿
    - 怎么去保证呢大家按照规范来做呢？
        > eslint 辅助你 review 的时候在你的编辑器中一眼看出哪里有问题
        > 严格的控制的话你可以把它集成到你的脚手架中去
- 你们打包是怎么打包的？
- 组件封装是怎么做的？
- 项目内开发组件是常规的操作，那跨项目的组件共享会怎么做？（主要考虑两个问题：存在哪，怎么引用？）
- 同一个页面在浏览器中和 app 中的区别的逻辑你是如何做的？
    - 如果有很多端，要写很多 if else 吗？
    - 策略，执行的时候怎么知道我该用哪个策略呢？
- 项目中有做过哪些优化的事情？
    - 性能优化
    - 工具链优化
    - 工作流程优化
- spa 项目，首页白屏时间比较长，有做过优化吗？
    - 首页白屏主要是哪一块耗时比较长？按这个思路去优化
    - 首页的接口有考虑过是没有化方式吗？
    - PWA 了解过吗？
- 有什么问题想问吗？


### 1.3. 三面
时间 20200607 18:30

- 介绍一下你自己
- 空窗期在干嘛？
    - 你都学了那些东西？
- POST 和 GET 的区别？
    - 【我答】 1. 传参方式不同 2. 参数长度限制不同 3. 用处不同：一个获取数据，一个修改数据
- 想跨域 POST 的话怎么做？ 还有其他办法吗？
    - 【我答】 CORS 
- jQuery 源码有看过吗？
    - 用 jquery 删除节点怎么删？ 用原生呢？
- 关于 “问题快速定位和解决” 你都做了那些事情？
    - 有做一些工具，或者系统来解决这个问题呢？
- **平时有没有用（或者开发）一些工具来提高效率呢？**
- 平时是在什么地方学习的？
- **302 是什么意思？**
    - 【注】详细了解一下
- 304 呢？ 500 呢？
- **假如你的页面打开是空白的，你怎么去查问题呢？**
    - 假设你不能复现呢？
    - 【我答】 提前为项目部署错误监控
    - 怎么去监控呢？
- 监控这个你没做过，那你是从哪里学来的呢？
- 你平时在那里学习呀？
    - 【我答】掘金、Stack Overflow、github、公众号、国内优秀前端团队的技术博客（ alloyTeam 、 凹凸实验室 、360 奇舞团 ）、 看书
- 管理问题：假如你手下的项目成员，按照原来的时间点完成不了了，你会怎么做？





## 2. 华米
### 2.1. 一面
时间 20200601 14:00
现场面试

- 数组扁平化并去重
- 判断 this 指向的题目
- ```str = "xxx/{a}/xxx/{b}/?xxx={c}&xxxx={d}"``` 从对象 ```obj = {a: 1, b: 2, c: 3, d: 4}``` 中取出来填进去
- 星级打分的 css 样式题目，不用交互，只要设计一个 N 星、 N 星半 的样式就行
- vue 组建通信的方式有哪些？
- vuex 哪些是异步的 哪些是同步的？
- call apply 不传参数，会将this 指向到哪里？（window）



## 3. 滴滴 

### 3.1. 一面
时间 20200527 15:00
在线面试 zoom

- module.export 和 export default 的区别 （ 两种模块化 ）
- 说一下 flex 布局吧 
    - 我把有哪些属性都说了一遍 balbal...
- 一个盒子有多个（多于4个）子元素，要求一行 4个 ，并且间距自适应 ，子元素宽度固定比如 100px 父级 大于 400 ，  怎么实现（这道题问的我很懵，后来想想 grid 或许可以）
- promise 的使用方法， **用 fetch 写一个 超时的** （没写过），那写个 setTimeout 吧
- http 状态码， 说一下  301 302 304 的区别
- 说一下浏览器的缓存策略
    - 我答 强缓存 、 协商缓存 ，相关字段
    - 强缓存的字段，优先级哪个高？
- 我看你 webpack用的挺多， **你们 webpack 优化一般有哪些策略？**
- 配置项用过哪些 loader 或者 插件 什么的？
- 其他的你们项目里的优化做了哪些？
- 浏览器的 eventLoop 了解吗？ 说一下它的过程
- **浏览器的几个线程知道吗？**
- react 用过吗？
- **vue 的渲染原理，了解吗？** vue 1 - 2 - 3 的优化过程有过了解吗？
- **vue 对虚拟树的操作，整个的数据流 有了解吗？**
- 数组的操作，有哪些方法会改变原数组？
    - xxx
    - xxx
- 你说你们没有用 fetch 用的是啥呢？ （答axios 和 ajax） 这两个有什么区别？
- 说一下跨域吧
    - 解决跨域的方式有哪些？
    -  CROS 比 jsonp 好在哪？
- 有什么要问我的？
    - 我做什么？
    - 如果我要胜任这项工作，您觉得我还需要从哪里提高
- 你带项目中会遇到什么挑战和问题呢？说说技术上的挑战


### 3.2. 二面 
时间 20200529 15:00

- 离职原因
- 除了滴滴 还有去其他公司面试吗？ 你更倾向于去哪家呢？
- 在上一家公司有什么地方，是你不是很满意的？
- 你自身的优势你觉得是什么呢？
    > **如果你提的建议，他们不接纳呢？**
    - 你觉得你的优势，对你的项目有哪些积极的影响呢？
- 你觉得自己不足的地方有哪些？
- 你打算（或者已经做的）用怎样的方式去弥补这些不足呢？
- 前端工程化所了那些事情？ 你觉得前端工程化应该包含哪些东西？（这里的回答应该围绕 **效率** 和 **质量** 这两个面来思考）
- 规范化有什么作用呢？
- 你会不会去关注你负责的项目，它本身存在的问题？不论是，后端、前端、业务流程、业务方向 上存在的问题，有去关注吗？
- 上司分给你个任务，是你不擅长的，没接触过的，你会怎么做？
- 编码规范怎么去保证大家都按照规范去做？如果要强制规范化，该怎么做？

- promise 的用法
- module.exports 和 exports default 有什么区别？
- css 写一个左边定宽，右边宽度自适应的布局
    - （我用 flex 写的）还有别的方法吗？ （回答：左边浮动 + 右边设置 margin； 或者定位实现）
- 块元素怎么让他水平垂直居中？有多少种方案？
- 一个数字数组，怎么计算数组所有元素的和？（es6 reduce）
- **如果把元素换成异步请求的 url ，怎么去串联的请求每个 url？** （promise， 和 reduce 结合）
    - 如何捕获整体的错误？而不是
    - promise 是怎么捕获错误的？捕获错误的机制是什么？（最后 catch 去捕获）
    - then 里的 第二个 回调函数 和 catch 有什么区别？
- 有什么要问我的，
    - 我欠缺的点有哪些？
        > 你关注的点把它放大一些，不要把太多的注意力放在太细节的问题上
        > 欠缺的点：你现在对 工程化 的了解和应用还不够，这会成为你眼界的一个限制
        > **确定方向** 和 **自我推动** 是最重要的



## 4. 美术宝 
### 4.1. 一面
时间 20200521 15:00
在线

- 先介绍一下自己吧
- 用 weex 原生接触的多吗？
- vue 用了多久？
- **做负责人的时候，做了那些事儿？怎么落地的呢？**
- codereview 是在什么上边做的？
    - 如果遇到些的不规范，你是怎么提醒的？
    - 你的批注是对应行的吗？
- 工程化，用了哪些工具来提高效率呢？
- webpack 配置是用的生成的还是自己配置的？
- **webpack 有哪些组成部分？分别是做什么的？**
    - **有自己开发过 plugin 吗？怎么开发的？** （要实操一下）
- new 的时候做了什么事情？
- **plugin 中是怎么样调用 生命周期的方法的？** （还是要实操一下）
    - 面试官解答：apply 方法，apply 方法中监听生命周期的方法
- 你们的 分支管理是怎么做的？ （git workflow）
- 那你们上线是怎么样的一个步骤？
- **性能优化 做过什么？**
- **跨平台兼容 做过什么？**
- cdn 你们这块是怎么上传 cdn 的？
    - 放到 cdn 之后域名不会变吗？ cdn 一般都会有 单独的 cdn 
- 上线的过程，你们的文件时怎么上到线上的？
- 你平时会写一些类似的脚本，提高你们开发的效率吗？
- css 定位有哪几种？
    - relative 设置 top left 会怎样？（相对于自身去偏移）
- css 动画 ： ```transition``` ```transform``` ```animation``` 有什么区别？
- **css 选择器的优先级什么？**
    - 选择器的解析方式？
- **伪类 和 伪元素 有什么区别？**
- 让一个元素看不见有几种方式？
- display: none 和 visbality: hidden; 有什么区别
- script 的 async 和 deffer 有什么区别？
    - 答案：
        - async 异步加载，加载完立即执行； deffer 会在页面解析完 触发 onload 之前执行
        - deferer 会按顺序 执行，  async 不会按顺序
- cookie sessionStroage localStroage 区别
    - 他们各自都是存在什么地方？
        > localStroage 存在本地文件中， sessionStroage 存在内存中
    - 两个标签一个域名的 sessionStroage 可以互相拿到吗？
    - 如果要 localStroage 定时过期，怎么做呢？
        - 你的方案，如果操作的很频繁的话，频繁的操作 ```JSON.stringify``` 和 ```JSON.parse```，性能会不好
        - 
- ajax 的原理是什么？ 他是怎么实现的？
- **浏览器的缓存策略有了解吗？**
    - 怎么判断这个请求命中了强缓存还是协商缓存？
- 用过 TS 吗？之前有看过吗？
- 平时会关注一些前端的新技术吗？有没有尝试？解决了什么问题？能用在哪里？
    - deno 出了正式版本
    - flutter 有尝试过吗？ flutter 的语言是什么？
- Electron 有了解过吗？
- 你有什么问题？
    - 如何保证团队目标的完成的？
    - codeReview 是怎么做的？
        > 使用了 google 一个叫 ARC 平台， 两到三个人 review 同一份代码


### 4.2. 二面 
时间 20200523 16:00

- 为什么离职？
- 带过多少人
- 性能优化做了那些事情？
    - CDN 的原理有了解过吗？
    - 浏览器缓存分为几种？有什么区别？
        - 状态码分别是多少？
        - 304 什么意思？
    - vue-cli 打包生成的 静态资源有几个文件？
        - 分别是什么？ vendor 是什么？作用是啥？
            > 业务代码 和 依赖的代码 分成了两个文件， 目的是缓存一部分代码，vendor 基本不会变化
        - **异步加载是怎么做到的？**
    - 图片懒加载的实现思路？
    - 防止 onscroll 
    - 节流、防抖分别是什么意思？节流函数，怎么实现？
- vue 的双向绑定原理？ vue3 是怎么做的？ 比 vue2 好在哪里？
    - vue 初始化的时候 compile （编译） 是做什么事情的？得到什么结果？
    - 你当时看源码是怎么看的？
    > vue 的双向绑定，除了数据劫持，还有一个重要的点 就是观察者模式，观察者做了什么？ wacher 类 ， dep 
- new 一个构造函数的时候 会发生什么事清？
- 两个数组合并 [1,2,3] [4,5,6] 用 es6 怎么做？
- 数组去重怎么办？用ES6
- 为什么能转成数组？什么样的东西能转成数组？ 原理是什么？
    > 有 Iterator 接口(迭代器)
- 有什么要问我的？





## 5. 百度地图

### 5.1. 一面、二面、三面 20200519 15:00
现场面试

#### 5.1.1. 一面

- 实现一个 防抖函数
- 防抖和节流的区别
- setTimeout 和 setInterval 的区别
- bind call apply 三者的区别
    - 【答案】bind 并不会执行，而是返回一个函数；c 与 a 的区别是 a 传参是数组的形式，c 是 逗号传参
- **箭头函数和普通函数的区别？**
    - [MDN 上有讲](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
        1. 没有单独的 this ， 也不能通过 call apply bind 绑定 this
        2. 不绑定 arguments ，若要获取 arguments 使用 剩余参数（ ...arg ） 是个好的方案
        3. 不能使用 new 操作符：箭头函数不能用作构造器，和 new一起用会抛出错误
        4. 箭头函数没有 prototype 属性
        5.  **yield 关键字**通常不能在箭头函数中使用（除非是嵌套在允许使用的函数内）。因此，箭头函数不能用作函数生成器
- 写一个函数让数组扁平化，多维数组边一维（考察递归）【手写】
- vue 组件之间通信？ 兄弟之间？ eventbus? （ inject ？ ）
- vue 应用的问题
- 如何实现一个 数据监听，或者劫持
- **vuex 如何对表单的数据进行双向绑定**
- **vue 中的 observer watcher 是啥？**

#### 5.1.2. 二面
- 问了一下一面的感觉怎么样
- 现在主要的技术栈是啥？
- 管理，做了那些事儿？
    - 有没有想过用工具去辅助你解决一些重复的事儿
- 对工程化的理解
- 公用的组件、类库、你们是怎么抽离的？
- 
- 你觉得4年的前端应该是什么程度？
    - 你对比这个标准，践行的怎么样？
- 如何达成目标？
- 项目中遇到过什么印象深刻的困难，怎么解决的？


> 面试官： 新技术的落地是有一套方**法论的**，一定要敢想，敢做
> 思考：你一直惧怕做事情，怕出错的事情，是不是已经有一套成熟的方法论了，

#### 5.1.3. 三面
- 忘了


### 5.2. 第二次去现场
时间 20200525 15:00

#### 5.2.1. 第二次三面 😭
- 浏览器的兼容测试，是怎么做的？人肉吗？还是有工具？可以自动化测试吗？
- 优化性能做了那些事儿呢？举个例子
- 【小插曲】看我简历没有提 ajax 觉得我没用过 😭
- 双向绑定原理讲一下
- git merge 和 git rebace 有什么区别
    - git 的 \-ff 有用过吗？（没用过） 【面试官也说不清楚】
- 前端设计一个转盘抽奖的功能都要考虑哪些？
    - 点击节流 or 防抖，怎么实现
    - 中奖动画是怎么做的？ 如何减速？如何不让他很快就得到结果？如果返回结果很慢如何会怎样？
    - 如果前端来控制 中奖率 要这么做？
- 公用的库怎么设计？
    - 我举了例子是 封装 app 通信方法新旧兼容的库，描述没描述好（应该把核心，解决了 新旧方法调用的问题，使用者只需要调用方法，不需要管新旧，不需要管 安卓 还是 ios）
- 是离职态吗？离职原因是啥？
- **之前在小组中制定规范的事儿做了哪些？怎么落地？**
- **前端和后端对技术方案存在争议，你会怎么做？**

> 华为手机 和 其他手机 人民币 符号 有个有意思的区别 可能会出现一横


#### 5.2.2. 技术经理面
- 介绍一下
- 放松一点
- 管理 7 人，打绩效吗？
- 了解了一下人员情况
- 你们的绩效是怎么管理的？
- 离职原因
- 为啥半年内没有找工作？
- 空窗期干啥了？学习？**如何证明你学习了？ 【刁钻】**
- 做管理之后，你的精力是怎么分配的？ （xxx 50%  xxx 20% ....）
- 你管理时期做的这些事儿，都是怎么落地的呢？
- **你觉得你在技术方面，你觉得哪些地方做的比较好？是你的优势，做起来比较得心应手的**
- 想做技术，还是想做管理，为什么？
- 你自己的一些缺点有哪些？
    > 技术视野没有打开，你才会觉得很难
    > 现在让你重新设计一个倒计时，怎么设计，让大家看到的都很准
- 面试官的引导：描述一个新的方案的时候，怎么样描述能让人更清楚：过去的方案有什么问题？现在的方案怎么解决这个问题？要达到什么样的一个效果？
- **希望我快速上手**
- 如果有一个事情遇到一个新语言，不会给你时间学习，排期是一样的
- php 最起码要拿下来
- 有什么要问我的
    - 如何保证员工成长
        > 这边研发是核心角色，所以研发同学的能力就要具备非常强的综合能力
        > 从产品的设计、一直到上线，要有非常强的沟通和协调能力
    - 我该提升哪些？
        > 延伸技术的深度和广度，判断问题和分析问题的一些认识，需要提升
        > 软件设计思想
        > 算法数据结构
        > 程序员该有的基本功
        > 技术面 向后端扩展




## 6. 腾讯
### 6.1. 一面 20200518 15:00
现场面试

- 一个盒子，水平垂直居中怎么做？
- flex: 0 0 1; 是什么意思？
- 同时设置了 flex-bases 和 width  哪个会生效？
    - 我回答 bases 会生效，**得看看到底是不是**
- 文字垂直居中，怎么做？
    - 你说设置 ```line-height```  如果我设置 ```line-height: 1.5;``` 是什么意？
        - 我回答应该是 fontsize 的1.5倍 蒙对了
- 左边定宽右边自适应，怎么做？
- 怎么做的移动端适配？
    - 遇到过什么问题？
    - 我答 1px 的问题，但是没解决好，
    - 面试官给了一种解决方案，获取到他是多少倍屏幕，用 scal 去针对性的缩放
- 【管理】**怎么提升你的小组的开发效率呢？**
    - 代码风格是一方面
    - 团队协作的效率问题，
    - 工具链是什么用的？
    - 通用组件是怎么开发的？
        - 在面试官看来我只是一个任务分配者，（35:35）没有真正做技术管理者的工作，思考如何带领团队 让大家的协作效率有个大幅度的提升，带团队不是说我自己的能力有多强。而是说我们团队在一起能有多强
        - 你虽然有做分享，那大家应用的怎么样？实施的怎么样？效果怎么样？
        - 考察的时候，标准是什么？怎么计算的 kpi 
        - 你的目标是什么？工作派下去了 怎么验收？
- 拿到一个页面中的所有 node ，去重、排序，怎么做？
    - 怎么获取 dom ？
    - 怎么去重？
        - 回答，对比去重
            - from 用过吗？会通过它创建一个数组
            - includes 是哪个版本的？
        - 有想过 set 吗？ set 是干嘛的？
        - 怎么把一个 set 转成一个数组呢？
    - 怎么排序？
        - **sort 的参数、function 的返回值是什么样的？**
- 怎么创建一个函数？有多少种方法？
- **generator 用过吗？**
- 函数调用有多少种方式？
- 构造函数和普通的函数有什么区别？
    - 一般 大写字母开头，
    - 构造函数没有返回值？
        - **如果有返回值会怎样**？
    - new 一个构造函数的时候发生了什么事情？
- 如何 实现继承？
    - class 怎么实现继承？（你可以写一写这个代码）
        - 我写的重新指定 构造函数的时候，少些了个 prototype 面试官给两个提醒
    - class 和 构造函数有什么区别？
- function 和 class 声明前 new 这个 类/class （考察 变量提升）
- **说说你对工程化的理解的使用** 
    - 我只回答了 我们的 vue 项目是用脚手架搭的
- 说说 webpack 的打包流程
- webpack plugin 是怎么实现的 你能写一个 plugin 吗？
    - 回答 plugin 是一个类 class ，通过 webpack 的事件钩子，去做一些事情
- **git workflow ： 你们是怎么管理分支的？ 怎么合并代码的？**
    - 我没了解过 git workflow ，（这个感觉减分了），回答了一下在之前公司的做法
- (没有像样的工作流吗？) 那你们是怎么上线的？
- **node 写过吗？**
    - 回答写过一个脚本 、 打包 js 的脚本 哎~
- 前后端这么通信？
    - ajax
    - axios 实现原理是什么？用的 fetch 还是 XHR ? 你能实现一个吗？
    - fetch 用过吗 ？
- 本地存储有哪些？有什么区别？
    - cookie
    - localStroage
    - SessionStroage 
- promise 用过吗？  promise 用过  为啥  fetch 没用过...
    - promise 解决了什么问题？
        - 我回答回调地狱，面试官笑了（这答案我听过无数遍了）
        - 面试官和我讲实际解决的问题是 状态的变化是单向的，不可逆的，这才是真正的解决的问题
- **面试官建议：**
    - 花点儿时间去学习学习 异步编程
    - 简历上体现出你强的专业性很重要，那些有的没的还是别写了，要体现出哪些是你的强项
    - 多出来那些 php nginx ，如果面试官深入问，你也答不上来，反而减分了
    - 东西做的还是比较浅
- 你用 vue 觉得他对你项目帮助特别大的点
    - 回答了双向绑定，
    - 提问，如果添加了新的属性，或者删除了属性，还想实现监听，怎么实现呢？
        - 我没答上来
    - **面试官建议：如果项目没有特点，说不上来会很吃亏**

- 你有什么问题，要问我？
    - 您觉得我该从哪些方向去提升呢？
        - **异步编程**，有哪些形式？
        - 带团队干活，怎么提升工程的质量，开发效率这一块
            - 工程师的“工程”，体现在两个方面：一个是效率，一个是质量。这两个方向把握好了才能称为工程师，而不是码农
            - 大前端的形式下，项目越来越大，怎么提升团队的工作效率？
            - 包括你在做性能相关的优化时，你们是怎么通过一些指标，通过一些手段去改善这些指标的？
            - 空间还是蛮大的
        - 还有一点，你要对自己有信心，你还没被我 pass 掉
    - 如何保证成员的持续成长的？
        - 如果你周报里说你要学习，那学成什么样？怎么检验你学习的成果？ （ 做事情要有产出 ）
        - 你怎么把你做的事情跟别人说明白？（ 沟通 还有 总结 的能力 ）
    - 之前那个 demo 还有哪些地方是可以提升的？
        - 如果没有样式，没有脚本能不能正常提交？
        - 如何高效的去操作 DOM ？
        - 语义化
        - 体验 比如 placeholder 的动画
    - 面试官问我：你不想了解一下你进来干啥吗？
        - 我觉得我可能凉了。。。（ 靠！不自信 ）
    - 那我进来干啥？
        - 腾讯新闻 app 的用户增长方向业务
        - 边说边打开手机，给我看他们做的东西，主要是 “我的” tab 下的内容

- 录音：时间点
    - 12:25 询问电梯
    - 14:39 倒水
    - 17:35 开始
    - 17:50 自我介绍
    - 20:00 开始问问题
    - 1:38:20 say byebye




## 7. 启航考研（爱启航）

### 7.1. 一面
时间 20200518 10:30
电话面试

- 介绍一下自己
- 什么时候开始做管理工作的？
- 是离职状态码？
- **从浏览器输入一个网址，到页面的展现发生了那些事情**
- 你知道状态码 304 是干嘛的吗？
- 前端**性能优化**有丰富的经验，你都做了那些事儿？
    - 你们是**怎么样来监测这个性能的提升的？**
- 你们平时是 怎么发现线上的报错呀 bug 呀，是怎么收集的？（**自动化上报**）
    - sentry 是做这个的
- 工具控的话你都是用什么开发的？（**怎么体现你是工具控的？ 这个我没有准备**）
- 有用过 TS 吗？
- 你能说一下 JS 优秀的地方和糟糕的地方吗？ （ 《js 精粹》 了解一下）
- 问一些**前端工程化**的东西，熟练使用 webpack ，说一说 **项目构建呀，上线的流程** 
    - 有用 J肯s？ 构建上去的吗？
    - 自己有了解好的自动化构建方案啊吗？
    - 如果构建的文件也提交到 git 上的话，你们的 git 仓库应该会很大
- git 的 merge 和 rebace 的区别？（用 rebace 解决提交日志过多混乱的问题）
- **webpack 是怎么把一个项目打包出来的？打包流程**
- **有遇到过 webpack 打包比较慢的情况吗？ 怎么解决的？**
- 有了解过 vue 的服务端渲染吗？ （没有 T.T）
- 你的跨浏览器兼容的经验，介绍一下
- 移动端的样式适配，有了解过 **1px 的高清方案**吗？
- 移动端的点击延时你们是怎么解决的？ vue 你们是怎么解决这个问题
- 微信的微信支付有做过吗？
    - 微信登录有做吗？
    - 微信分享有做吗？
- 你有什么问题？
    - 技术团队规模，
        > 目前10个，新招5人做新业务）
    - 有什么技术栈？
        > 后台管理： React + Ant-d + TS
        > 学生端 pc + h5 ，用 vue + TS
    - 最近的加班状况

- 这家面试官很年轻，技术也不错，哎 自愧不如


### 7.2. 二面
时间 20200521 10:00 
现场面试

- 打开电脑看我之前的项目页面
- **缓存策略怎么配置的**
- **你们用的这个 HTTP 1.1 和 2 有什么区别？**
- 做了几道输入输出的题目， 数组的 ```map``` ```reduce```
- concat 了解过吗？
    ```js
    var a = [{a: 1, b: 2}, {c: 3, d: 4}];
    a = a.concat(a);
    a[0].a = 0;

    console.log(a[1].a);  // 输出什么？ 为什么？
    ```
- **新技术敏感，能举个例子吗？**



### 7.3. HR 面
- 期望薪资，之前的工资情况
- 之前的工资有底薪和绩效吗？
- 对您日常工作的考核标准是什么？
    - 考核对您的影响是什么？
- 你们的公司规模？你走的时候公司什么状态？
- 除了北京在其他地方还有员工吗？
- 前端组有多少人？
- **离职导向在时间也不短了，你做了什么？**
- 给自己职业的规划大概是什么样子？比如行业的选择呀？
- 有收到 offer 吗？
- 住在哪？ 距离能接受还是会搬家？
- 介绍了一下公司的情况： 
    - 98年成立 ， 600 人 ，考研培训， 
    - 包含：线上互联网培训公司，出版公司，电商公司
    - 目前技术团队 30 人，计划扩展到 50 人左右
    - 前端，不到 10 人

> **HR 的问题也得重视**



## 8. 百望股份 （做电子税务的服务平台：百望云）

### 8.1. 一面
时间 20200513 18:30

- 上家公司工作情况了解
    - 介绍一下公司原来做的啥
    - 讲讲管理方面如何保证代码质量，如何帮助员工成长
    - 公用的代码库结构怎么设计的？
    - 如何处理缓存？更新公用代码会对缓存有什么影响？怎么解决？
- vue
    - 自己实现一个 input 组件 实现数据双向绑定
        - 我回答 父子组建通信的方法，可能面试官不是问这个，又问了下边的问题
        - ```v-model``` 是怎么实现双向绑定的？
    - 响应式原理 、 双向绑定原理，**这俩问题是一个吗？**
    - 了解过 vue3 吗？ 和 2 有哪些区别？
        - ```porxy``` 和 ```Object.defineProperty``` 有何区别
    - router 的两种模式是啥？他们有什么区别？ 
        - 如果要切换到另一种模式，要注意什么事情？（这个我没明白人家的考点是啥）
        - 路由懒加载是啥？
    - 用脚手架还是自己配置呢？
    - ```webpack``` ```gizp``` 压缩 （没用过 就没往下问）
- 网络
    - ```HTTP``` 协议的 ```1 / 1.1 / 2``` 版本都更新了哪些内容？
    - ```HTTP``` 与 ```HTTPS``` 有啥区别？
    - SSL 证书是怎么加密的？

- 我的问题
    1. 新人如何培训
        1.  业务培训
        2. 技术培训
            - 开发规范，代码仓库熟悉
            - 针对成员之前的工作经历做个性化的培训
    2. 我去了做什么？
        - 前端三个组： 中小微客户组、大客户组、技术支持组
        - 现在是 技术支持组 在招人
    3. 加班还好  弹性工时



## 9. 美团
美团买菜
### 9.1. 一面
时间 20200512 15:30

- 介绍一下工作情况
    - 开发和管理的时间比例是怎样的？
    - 管理的动作主要有哪些？
- 编码题
    1. 实现 hasProperty(o, 'x.y.z') 方法，可以判断 o.x.y.z 路径是否存在 hasProperty(obj, path)
        - 06:34 - 28:00  用时 20 分钟
        - hasOwnProperty 不能判断原型链上的属性对吧，那如果我想判断原型上的属性呢？
        - 遍历一个对象，既要包含原型属性，也要包含自有属性，该怎么办？
    2. 两个升序数组的第 K 个数
        - ```[3,5,6,7,8,9]```
        - ```[1,10,11,13,14]```
        - K为3 返回 [2，1] 代表两个数组合起来的 从小到大的第三个数字在第二个数组中，索引为 1 的位置
        - 排序的 sort API 用的排序方式是啥？ 时间复杂度是多少？
        - 39:30 - 56:00  用时 15 分钟

- 外联的 js 脚本下载完成后会不会立刻执行
    - 如果要等页面中的资源加载完成后执行该咋办？
- ```Promise```
    ```js
    p.then(()=>{
        return Promise.resolve(new Promise(res => res(123)))
    }).then( data => ?)
    ```
    - ```promise``` 怎么捕获异常？
    - ```try catch``` 可以捕获 ```promise``` 的异常吗？
    - 如何捕获 awaite 的错误
- vue 
    - for 遍历中的 key 是干什么的？你一般写什么？
    - 用 index 有什么问题吗？
- http 状态码 
    - 504 啥意思？
    - 403 啥意思？
    - 304 呢？ 什么情况下会 304 ？




## 10. 百度
部门不清楚

### 10.1. 一面
时间：20200512 10:30

- 元素水平居中垂直居中有哪些方法？
- 实现一个 0.5px 的线 怎么做？  **这个问题，硬件能支持吗？ 高倍屏幕或许可以** 
- ```scripts``` 标签上的 ```deffer```  和 ```async``` 属性分别是什么意思？
- 手写 ```ajax```
- 实现一个 斐波那契数列
- 本地存储有哪些？有啥区别？
- 如何理解闭包？常用在哪里？
- 什么地方会用到递归？
- **手写一个防抖函数**


### 10.2. 二面
时间：20200512 19:30

- vue 
    - 实现一个 ```my-input``` 组件，考察父子组件如何通信
    - 如果想给 子组件传很多值  ```props```  有点儿麻烦 ，有没有别的办法
    - **你写过哪些组件，遇到过什么问题？**
    - 插槽是啥，怎么用？
        - 放入插槽中的模板怎么访问组件内部的数据？
    - **什么是递归组件？**
        - 面试官的解答：有个递归结束条件，有个 ```name```
    - vue 是如何实现响应式的？
        - ```Object.defineProperty()``` 有几个参数，分别是啥意思？
        - **你自己能实现一个 ```Object.defineProperty()``` 的数据劫持吗？**
    - vue 怎么解决 ```SEO``` 问题
- 从输入 ```url``` 到页面展示发生了什么？
    - DNS 怎么查询的？
    - ```http``` 请求的是怎么发送的？（考察TCP连接的建立和断开）
- 数据可视化怎么做的？
    - 有没有 框架实现不了的自己手写的?
- **简历上说阅读过 vue 的源码  就给我好好看看啊喂**




## 11. 阿里巴巴-高德地图业务部
时间：20200319 15:00

- 简单介绍一下你上家公司做什么事情？
- 为啥子不用 react ？
- **你在现在团队中最有技术挑战的事情是什么？**
    - 答了weex ，遇到了很多坑
- weex 主要遇到了哪些坑呢？
    - 答样式，哎，太 low 了
- 网页主要做移动端的吗？
- 需要兼容IE9以下的浏览器吗？
- flex 布局熟吗？
    - 左边定宽 200px 右边撑满，右边怎么做？
        - 答 flex 1 
    - flex 1 是怎么计算的呢？
    - 三列布局，第一列的文字会比较多（文字可以做截断，或者 overflow hidden 都可以），要三列等宽，该怎么做呢？
        - 答 猜测 三个 flex ： 1 应该是错的 后来自相矛盾了，衰
    - flex 的横轴纵轴是怎么理解的？
    - flex-shrink 有用过吗？ 什么意思？
    - 要实现一个九宫格的布局怎么实现呢？三行三列的布局
    - flex 换行怎么弄呢？一共5个 ，前三个在一行，后两个下一行，有最小宽度
    - （面试官OS：忘这么多？）你平时用 flex 解决什么问题呢？
- rem em 是做什么的？
    - 一般给 根元素设置的 fontsiez 多大呢？
- **BFC 是什么有了解过吗？**
    - 举个例子咧？
- css 动画用那些动画形式啊？
    - 答 transition  animation 
- css3 用的比较多吧？ 用过哪些伪类？
    - checkbox 伪类用过吗？
    - 兄弟元素 伪类用过吗？
    - 用 css 实现一个 checkbox 的样式你能实现吗？
    - **为啥 这种（伪类）不用写 js 就能实现呢？**  这个问题最懵逼
- js 有哪些数据类型啊？
    - 引用类型呢？
    - 数组和对象？ 那 Function 呢？
    - 怎么判断数据类型啊？
- 这个等式是 true 还是 false ？ 
    ```js
    let obj = {}
    function fn(obj) {
        obj.a = 1;
        return obj
    }
    obj === fn(obj)
    ```
    - 这个不刁钻吧
- vue 中父子之间通信？
    - **props 在父子组件中传值 传的是拷贝还是引用啊？**
        - 答拷贝吧
    - 你可以试一下子组件中改 props 的值  看父组件变不变
- ES6 用的多吗？
    - **es6 的箭头函数和 function 的区别**
    - this 指向问题？
        ```js
        const obj = {
            fn: function{
                console.log(this);
                const fn = () => {
                    console.log(this);
                }
                fn();
            }
        }
        obj.fn();

        // 改改
        const obj = {
            fn: () => {
                console.log(this);
            },
            a: 1
        }
        // obj.fn();
        const fn = obj.fn;
        fn();
        ```
    - 怎么去改变 this 的指向呢？
        - 答 js 的 function 三个方法，call apply bind 可以改变，
        - **问 箭头函数 可以吗？**
- 这段代码的输出顺序如何啊？
    ```js
    setTimeout(()=>{
        console.log(1);
        Promise.resolve().then(()=>{
            console.log(2);
        });
    }, 0);

    setTimeout(()=>{
        console.log(3);
        Promise.resolve().then(()=>{
            console.log(4);
        });
    }, 0);
    ```
    - 答 1324 ， 正确答案  1234
    - setTimeout 和 primise 的优先级谁高？
    - **微任务 和 宏任务 了解过吗？**
- 编程题目 ： 请实现方法 `curry(Function) => Function` ，传入一个多参函数，返回单参函数 （考的是**函数柯里化**）
    - example 
    ```js
    // 和业务无关，你不用关心它内部做了什么事情
    const sub = function(a, b, c, d) {
        return ....;
    }
    const subCurry = curry(sub);
    sub(1,2,3,4) = subCurry(1)(2)(3)(4);
    ```
- 你平时做 vue 比较多是吧？ **vue 中的 key 是干什么用的？ 不写 key 会有什么问题？**
- vue 中的 vdom 知道吗？ **vdom 是怎么计算 dom 变化的？ diff 算法有了解过吗？**
- **keep-alive 用过吗？ 他是做什么用的？ 使用 keep-alive 有遇到过什么问题吗？keepalive 缓存的是什么东西呢？**
- vue-router 有那些模式？平时用哪种模式啊？ **输了一个错误的路由地址，你们是怎么处理的？（路由404怎么处理？）**
- 看你有了解过 vue 响应式原理的实现是吧？说一下 vue 双向绑定是怎么实现的？
    - **比如说 data 中有 a、b、c、d 四个值 ，模板中只使用了 a 、 b ，那 c 、 d 变化的时候会引 template 去 rander 吗？**
    - 这块其实就是双向绑定的模块了， 你有了解过吗？
- 简历上写了 关于 HTTP 协议，做了哪些关于 HTTP 协议的优化呢？
- 对于 网络慢的，请求比较多的，这种优化就不行了，还有没有更多的优化？
- 预加载有了解过吗？
- 现在 vue 项目是 spa 吗？ 第一次要加载多大的 js 吗？有想把它打包成多个 js 分开加载吗？
- **webpack 打包做过什么优化吗？**
- 6、7 万行代码打包一次会很费时间？ 这样的情况能做什么优化呢？
- 分享一下管理的经验吧？

- 你有什么问题要问我吗？关于面试有什么反馈？
    - 混合开发，网页开发
    - 做工具，做业务，每个方向对你的要求也是不一样的
    - 每个人都有个阶梯性的目标

- 一个是基础，一个是用到的东西深入加强一下




## 12. 度小满金融
### 12.1. 电话面试
时间 20200410 16:10

- 先介绍了一下人家的业务（H5 、 小程序 等），然后问是否符合我的预期
- 是否在职？
- 之前负责什么工作？
- 详细说一下负责的业务线
    - 这个回答的不好，只讲了我管理别人 才引出人家问我的下一个问题，
    - 我应该回答转管理是为了腾出的时间，去钻研新技术了，然后就是新技术的布道
- 是纯管理吗？
- 什么时候做的管理？
- 做管理之前做的什么？
- 之前的薪资情况？
- 期望薪资？

### 12.2. 技术一面
时间 20200415 15:00

- 先做一个简单的自我介绍
<!-- css -->
- 有写CSS吗？CSS 选择器有哪些？ 优先级是如何？
    - 行内的 style 样式呢？ importent？
- 清除浮动有使用过吗？简单介绍一下
- 描述一下盒模型的构成，标准的和怪异的有何不同？
    - （自己想到一个问题，思考：怪异模式下，如果 padding + border 大于 设置的宽高会怎样？）
- 将一个元素水平垂直居中有哪些方法？

<!-- js -->
- js 有哪些基本数据类型
- typeof null 返回什么？ 为什么？
- typeof NaN 是什么？
- 为啥 js 中的 0.1 + 0.2 不等于 0.3 呢？
- [] == false 返回 true 还是 false？ （我答错了）
- 简单描述一下原型
- new 一个对象的时候内部发生了什么？
    ```js
    // 回答？
    a = new XXX()
    a = {}
    XXX.bind(a)
    a.prototype = XXX.prototype
    return a;
    ```
- js 在执行时，有哪几种执行上下文(作用域)
- 讲一讲 ES6 常用的语法
    - var 和 let const 有啥区别呢？ let 和 const 有啥区别呢？
        - 先访问 a 再 var a 会有什么问题会报错吗？
        - 先访问 a 再 let a 会有什么问题会报错吗？会报什么错误？
        - 聊到了 const 声明引用类型为啥可以改
    - 箭头函数和普通函数的区别？
        - 箭头函数有 name 吗？
    - 扩展运算符用过吗？
- call apply bind 的区别？
- 项目中使用过 promise 吗？ promise 常用的方法有哪些？能手写一个 promise 吗？
- 用过 generater 吗？
- async await 有了解过吗？ 了解过他俩的实现吗？

<!-- vue -->
- vue 常用的指令有哪些？
    - 答  v-if / v-else 、 v-show v-for v-bind(:) v-modle v-on(@)
- vue 实现双向绑定的原理？通过那个方法做数据的监视呢？能简单说一下里边做了什么吗？
- 为啥会有 vdom 这个东西？ 直接操作 dom 有什么不好吗？（我自己也有疑问，为啥说 js 操作 dom 效率低）
- vue 有哪些生命周期呢？

<!-- 网络的知识 -->
- post 请求和 get 请求的区别？
- 常见的 http 请求的状态码，以及他们代表的意思
- 你有了解过缓存有哪些缓存吗？有什么区别？
    - 答 强缓存、协商缓存 ，区别忘了
- ping 了一个网站，用时 100ms 那我要向这个网站发一个 http 请求，多久能收到结果呢？


## 13. 微吼（内推）
时间：20200319 16:30

### 13.1. 提问

1. 是否在北京
2. 是否在职
3. 离职原因

### 13.2. 笔试题
- [微吼笔试题](./interviewQuestions/vhall.md)

### 13.3. 提问部分
- 左边 200 右边自适应布局
    - 细节：先让我保存一下，这个我自己可以改进
- 接着 左边200 右边自适应宽度的问题
    - 实现一个弹窗，宽高200 居中
    - 实现一个弹窗，宽高不定，居中
- vue 的问题
    - 组件与组件之间通信，事件机制，EventBus 有了解过吗？（我没回答上来，否则还是）
    - 有自己实现过组件吗？
        - 购物车中实现一个组件 ```- 1 +``` 怎么实现？
        - 实现之后怎么通知外部？
- JS 的基础的问题
    - ul > li li li 
        - 点击 li 输出他是第几个？
            - 我回答 index 
            - 追问，这是jquery 的实现吗？你能不能实现这个功能
        - 你知道 事件冒泡和事件捕获有什么区别吗？
        - 那怎么阻止事件冒泡？
    - web 中常用的本地存储有哪些方式？他们有什么区别？
    - 我们能不能对 localStroage 做一层封装，让 localStroage 可以过期？
    - 如何封装 localStroage 让它可以保存对象？
- 项目问题？
    - 有没有让你觉得很有挑战的项目？
        - 第一个回答 weex 相关的，
            - 追问了一个事件总线的东西，跨页通信相关的，没答上来
        - 追问，还有没有其他的项目
- 你对自己有没有什么规划
    - 具体一点
    - 未来一年、两年你希望自己有什么样的提升，你打算怎么去做？
- 最后：有什么要问面试官的吗？
    - **平时会处理哪些任务？**
        - **直播**
        - 个性化的需求
        - 对组件库做贡献、文档、
    - **针对新员工有哪些培训？**
        - 入职导师，一周熟悉环境，导师会伴随你整个的试用期
        - 内部的学习氛是围自发的
        - 流媒体部门：分享
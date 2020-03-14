# Vue 笔记

## 基础认识

### 生命周期
- 生命周期函数不能用箭头函数，因为箭头函数没有 this


### 模板语法
- 文本插值： 双大括号
    - ```v-once``` 指令：数据改变时，有该指令节点的值不会更新
- ```v-html``` 指令
- ```v-bind```
- [使用 js 表达式](https://cn.vuejs.org/v2/guide/syntax.html#%E4%BD%BF%E7%94%A8-JavaScript-%E8%A1%A8%E8%BE%BE%E5%BC%8F)

- [指令的 . 修饰符](https://cn.vuejs.org/v2/guide/syntax.html#%E4%BF%AE%E9%A5%B0%E7%AC%A6)

### class 和 style 绑定

### 列表渲染
- ```v-for``` 不仅可以遍历数组，还可以遍历对象的 ```value ,key```












# Vue 源码剖析

## 目标
- 调试环境搭建
- 理顺 vue 源码学习整体流程
- 数据响应式


## Vue 源码调试环境搭建

### 获取 Vue
```shell
git clone https://github.com/vuejs/vue.git
```
- 当前版本号：2.6.10
    - 怎么看版本号？ ```package.json``` 文件中有 ```version``` 
- 克隆到本地之后会有很多分支，想看其他的分支你可以随便切

### 测试环境
- 克隆之后，安装依赖
    ```shell
    npm i
    ```
- 安装 rollup 打包工具
    ```shell
    npm i rollup -g
    ```
- 修改一下 dev 脚本 ，添加 ```--sourcemap``` 选项， 目的：方便浏览器调试
    ```
    "dev": "rollup -w -c scripts/config.js --sourcemap --environment TARGET:web-full-dev",
    ```
- 改完之后就可以尝试打包了
    ```shell
    npm run dev
    ```
    - 中途只要生成 覆盖了 vue.js 就可以 ```control + C``` 中断了，不需要监测修改
- 打包成功后，会生成 vue.js 还会生成 map 文件
- **创建测试文件，引入 vue.js** ：在 examples 目录下 新建 test 目录 ，test 目录下新建 ```01-test.html``` 引入 dist 下的 vue.js 就可以调试了


### 文件夹结构
- 你应该关注的目录
    - ```dist``` 输出的版本说明
        - 带 common ， cjs 支持 webpack1 ， browserfiry
        - esm ， 支持 webpack2+
        - umd ， 兼容 cjs 和 amd
        - runtime ， 仅包含运行时，没有编译器 (cmd?)
        - 你看源码应该关注 umd 也就是 vue.js 这个版本
    - ```examples``` 中有一些例子，我们写测试程序也可以在这里边写，去调试
    - ```flow```  都是一些类型说明
    - ```packages``` 独立于 Vue 核心的模块，比如服务端渲染、 weex 等
    - ```scripts``` 打包脚本
    - ```src``` 最重要的 源码目录
        - ```compiler``` 编译器
        - ```core``` vue 核心
        - ```platforms``` 平台测试的代码，两个平台 web weex
        - ```server``` 服务端渲染
        - ```sfc``` 单文件解析器
        - ```shared``` 公共的帮助代码
    - ```types``` 给 typescript 写的一套类型说明



## 探寻入口文件
- 从 package.json 中入手
    ```
    "dev": "rollup -w -c scripts/config.js --sourcemap --environment TARGET:web-full-dev",
    ```
- 根据这个文件 ：```scripts/config.js``` 中的 这个配置 ： ```web-full-dev``` ，很容易找到 ```entry```
    ```
    entry: resolve('web/entry-runtime-with-compiler.js'),
    ```
- ```'web/entry-runtime-with-compiler.js'``` 是啥？
    - 定位到 ```resolve``` 这个方法就知道是怎么来的了
- 就能找到入口文件 ```src/platforms/web/entry-runtime-with-compiler.js```


## vue 初始化流程分析

### 入口文件 src/platforms/web/entry-runtime-with-compiler.js

- ```lin:17``` 扩展了 $mount 方法， （可以理解为针对 web 平台的个性化扩充）
- ```line:32``` 处理 template 和 el ， ```line:34``` 没有 render 时才考虑 template 和 el  
    - 优先级： ```render > template > el``` 
- ```line:59``` 编译，将 template 字符串转换为 ```render 函数``` 
- 结论：**不管用 template 还是 el 最终都会变成 render 函数，挂载到 options 中**

### Vue 的构造函数从哪里来的呀？
- ```import Vue from './runtime/index'``` 找到文件 ```src/platforms/web/runtime/index.js``` 做了什么事？
    - 实现了 ```__patch__``` 方法 
    - 定义了 ```$mount``` 方法， 执行挂载 ```mountComponent(this, el, hydrating)```
- ```import Vue from 'core/index'``` 找到文件 ```src/core/index.js``` 做了什么事？ 
    - ```initGlobalAPI(Vue)``` 定义全局API ， 追一下就能找到：```src/core/global-api/index.js```
        ```js
        Vue.set = set
        Vue.delete = del
        Vue.nextTick = nextTick 
        initUse(Vue)
        initMixin(Vue)
        initExtend(Vue)
        initAssetRegisters(Vue)
        ```
        - 等等...
- ```import Vue from './instance/index'``` 找到文件 ```src/core/instance/index.js``` 中， 构造函数的定义点
    ```js
    function Vue (options) {
        // 初始化
        this._init(options)
    }

    initMixin(Vue)      // 实现了 _init()
    stateMixin(Vue)     // $data,$props,$set,$delete,$watch  等组件状态相关的方法
    eventsMixin(Vue)    // $on,$emit,$once,$off 等事件相关的方法
    lifecycleMixin(Vue) // _update, $forceupdate, $destory  等生命周期相关的方法
    renderMixin(Vue)    // $nextTick, _render 渲染相关的方法
    ```

- ```src/core/instance/init.js``` 初始化函数的实现
    ```js
    vm._self = vm
    initLifecycle(vm)       // 初始化 $parent,$root,$children,$refs
    initEvents(vm)          // 处理父组件传递的监听器
    initRender(vm)          // $slots, $scopedSlots, _c(), $createElement()
    callHook(vm, 'beforeCreate')
    initInjections(vm) // 获取注入数据
    initState(vm)       // 初始化组件中 props、methods、data、computed、watch
    initProvide(vm) // 提供数据注入
    callHook(vm, 'created')
    ```

## 数据响应化流程分析

### 数据响应式

- 响应式的入口点 ```src/core/instance/state.js```
    - 数据初始化
    - initData() ： 判断重复，调用 observe
    - observe() ： 返回一个 Observer 对象的实例
- Observer ```src/core/observer/index.js``` 
    - 判断数据对象的类型，做相应的处理
    - ```defineReactive``` ： 给 data 中每一个 key 定义响应化（定义数据的劫持）
- Dep ```src/core/observer/dep.js```
    - 维护和管理若干 wacher
- Watcher ```src/core/observer/watcher.js```
    - 


### 数组响应化原理
- 看数组的处理要去 Observer ```src/core/observer/index.js``` 找起
- 数组的响应化处理 ```src/core/observer/array.js```
    - 数组不能用索引 否则不能响应化
    - 七君子：  'push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'











# vue 知识查漏补缺 看文档
- watch
- computed 计算属性
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
- 安装 rollup
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
        - runtime ， 仅包含运行时，没有编译器
        - 你看源码应该关注 umd 也就是 vue.js 这个版本
    - ```examples``` 中有一些例子，我们写测试程序也可以在这里边写，去调试
    - ```flow```  都是一些类型说明
    - ```packages``` 独立于 Vue 核心的模块，比如服务端渲染， weex 等
    - ```scripts``` 打包脚本
    - ```src``` 最重要的 源码目录
        - ```compiler``` 编译器
        - ```core``` vue 核心
        - ```platforms``` 平台测试的代码，两个平台 web weex
        - ```server``` 服务端渲染
        - ```sfc``` 单文件解析器
        - ```shared``` 公共的帮助代码
    - ```types``` 给 typescript 写的一套类型说明


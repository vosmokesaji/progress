# React 学习

<!-- 
尚硅谷课程
https://www.bilibili.com/video/BV1wy4y1D7JT
-->

## 简介

### React 全家桶
- 全家桶包括
    - react 基础
    - react-router
    - pubsub
    - ant-design
    - ...等等
- react 是什么： 用户构建用户**界面**的 JavaScript 库
    - 老师的翻译： react 是一个将数据渲染为 HTML 视图的开源 JavaScript 库
- 谁开发的： Facebook
- 为啥学：写码效率、dom 操作效率
- react 特点：
    - 组件化
    - 声明式编码（老的是 命令式编码）
    - react-native 可以使用react语法进行移动端开发
    - 使用 虚拟 dom + 优秀的 diff 算法，尽量减少与真实 dom 进行交互
- 学 react 之前需要掌握的 JavaScript 基础知识
    - 判断 this 指向
    - class
    - es6 语法规范
    - npm 包管理器
    - 原型、原型链
    - 数组常用方法
    - 模块化

### react 开发依赖文件
- 先讲旧版本：16.8 ，之后慢慢讲新版本
    - 需要的依赖
        - `bable.min.js` ES6 转 ES5、 jsx 转 js
        - `prop-type.js` 先不用管
        - `react-dom.js` react 的 dom 操作库
        - `react.js` 核心库
    - 顺序：核心库必须最先引入
        - `react.js `之后 `react-dom.js` 之后 `bable.min.js`
    - js 逻辑的 script 标签，要注意 type
         ```html
        <script type="text/babel"></script>
        ```
## 创建 虚拟 dom 的两种形式

### 为啥要用 jsx （从内心深处接受 jsx， 才能学好）
- 使用 jsx 创建虚拟 dom
    ```jsx
    const VDOM = <h1 id="title">Hello, React!</h1>
    ``` 
- 使用原生 js 创建 虚拟 dom
    ```js
    const VDOM = React.createElement("h1", {id: "title"},"Hello, React!");
    ```
- 复杂的 dom 结构用原生 js 写会非常复杂，而用 jsx 会舒服很多
- jsx 是原生js 创建虚拟 dom 的语法糖，

### 关于 虚拟dom
1. 本质是 Object 类型的对象 （一般对象）
2. 虚拟dom比较“轻”，真实dom比较“重”，因为虚拟dom是 react 内部使用，无需真是 dom 上那么多的属性
3. 虚拟 dom 最终会被 react 转化为真实 dom，呈现在页面上。


## jsx 语法规则
- 全称 JavaScript XML
    - XML 早期用于存储和传输数据
        ```xml
        <student>
            <name>Tom</name>
            <age>19</age>
        </student>
        ```
    - 后来被 json 替代
        ```json
        {"name": "Tom", "age": 19}
        ```
- 语法规则：
    1. 定义虚拟dom时，最外层不要写引号
    2. 标签内要用 js 的表达式，要用 `{}` 包起来
    3. 类名指定 class 要写成 className， 因为 class 是 js 关键字
    4. 内联样式要用 `style={{key: value, key2: value2}}` 的形式写
    5. 不能有多个 跟标签，只能有一个
    6. 标签必须闭合
    7. 标签首字母
        1. 小写开头，会转为 html 同名元素，入html 中无该标签同名元素
        2. 大写开头，react 就去渲染对应的组件，如果组件没有定义，就去报错


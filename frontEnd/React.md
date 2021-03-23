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
        2. **大写开头**，react 就去渲染对应的组件，如果组件没有定义，就报错





## state
- react 组件的数据都放在状态对象 state 中
- 通过 this.state.xxx 访问
### 操作state
- react 不允许直接改变 state 的值，直接改变值不会刷新视图
- 要使用 setState({key: value})
- setState 是使用合并覆盖的方式修改原 state 的
- react 中事件 用小驼峰  比如 onClick

### this 指向问题
- 例子：
    ```jsx
    class Weather extends React.Component{
        constructor(props){
            super(props);
            this.state = {isHot: true}

            // 关键点
            // 因为 onClick 处调用时只是保存了 changeWeather 这个函数的引用，其中的this 因为严格模式（class 会在方法内部开启严格模式，禁止 this 指向 window），this 的值是 undefined，所以要在  constructor 中将 changeWeather 的this 绑定到实例上
            // constructor 中的this 必然指向实例对象
            this.changeWeather = this.changeWeather.bind(this)
        }

        render(){
            const {isHot} = this.state;
            return <h1 onClick={this.changeWeather}>今天天气很{isHot ? "炎热" : "凉爽"}</h1>   
        }

        changeWeather(){
            const {isHot} = this.state;
            this.setState({isHot: !isHot})
        }
    }
    ```






<!-- 32 课 -->
## react 中的事件处理
- 为了更好的兼容性，react 做了一次二次封装
- react 中的事件时以事件委托方式处理的
- 通过 event.target 得到发生时间的 Dom 元素对象
    - 事件触发的元素正好是你要操作的元素，可以省略 ref， 用 event.target





<!-- 33 课 -->
## 非受控组件
- 组件中所有输入类的 dom（input select checkbox 等） 的值是 **现用现取** 的，就是非受控组件





<!-- 34 课 -->
## 受控组件
- 组件中所有输入类的 dom（input select checkbox 等） 随着你的输入能实**时将值维护到状态（state）中**的，等需要**用的时候从状态中取出来**，就是受控组件

- 建议写受控组件，因为受控组件能省略掉 ref
- *疑问？？？ 受控是指受什么控制？*



<!-- 35 课 -->
## 高阶函数 函数柯里化
- 之前都是往状态里边存东西，重复度有点儿高
    ```jsx
    saveUsername = (event) => {
        this.setState({username: this.target.value});
    }
    savePassword = (event) => {
        this.setState({password: this.target.value});
    }

    render(){
        return(
            用户名： <input onChanghe={this.saveUsername} type="text" name="username" />
            密码： <input onChanghe={this.savePassword} type="password" name="password" />
        )
    }
    //...
    ```

- 换种写法：
    ```jsx
    // 改方法为 saveFormData 用来保存表单数据
    
    saveFormData = (dataType) => {

        // 事件处理实际调用的是这个返回的函数
        return (event) => {
            this.setState({
                // 这的 dataType 想要当做变量读取，就需要加 方括号
                [dataType]: event.target.value
            })
        }
    }
    render(){
        return(
            // this.saveFormData("username") 返回一个函数，给到 onChange
            用户名： <input onChanghe={this.saveFormData("username")} type="text" name="username" />
            密码： <input onChanghe={this.saveFormData("password")} type="password" name="password" />
        )
    }
    ```
- 以上的 `saveFormData` 就是一个高级函数
    - 那，什么是**高阶函数**： 如果一个函数符合下边两个规范中的任何一个，那该函数就是高阶函数
        1. 若A函数，接收的参数是一个函数
        2. 若A函数，的返回值是一个函数
    - 常见的高阶函数有哪些？
        - Promise
            - 传入执行器函数
        - setTimeout
        - setInterval
        - arr.map  等数组上的一些方法
    - **函数柯里化**：通过函数调用继续返回函数的方式，实现多次接收参数与最后统一处理的函数编码形式。

- `tips` 如果你的大段注释折叠不起来，就这么写， 用 `//#region` 和 `//#endregion`
    ```js
    //#region
        /*
          balabala....
        */
    //#endregion
    ```
- 演示函数柯里化
    ```js
    function sum(a,b,c){
        return a+b+c;
    }
    sum(1,2,3)    // 6
    ```    
    - 柯里化写法
    ```js
    function sum(a){
        return (b) => {
            return (c) => {
                return a + b + c;
            }
        }
    }
    sum(1)(2)(3)    // 6
    ``` 

<!-- 36 课 -->
## 不用柯里化的写法

    ```jsx
    saveFormData = (dataType, value) => {
            this.setState({
                [dataType]: value
            })
        }
    }
    render(){
        return(
            // 传一个函数，内部调用 saveFormData
            用户名： <input onChanghe={(event)=>{this.saveFormData("username", event.target.value)}} type="text" name="username" />
        )
    }
    ```




<!-- 37 课 -->
## 引出生命周期
- 生命周期
    - 组件从创建到更新到销毁
    - 挂载 mount
    - 卸载 unmount

- 卸载方式 `React.unmountComponentAtNode(document.getElementById("test"))` 
- 组件挂载完毕
    ```js
    componentDidMount(){
        //....
    }
    ```
- 组件将要卸载
    ```js
    componentWillUnmount(){
        //....
    }
    ```



<!-- XX 课 -->





<!-- XX 课 -->






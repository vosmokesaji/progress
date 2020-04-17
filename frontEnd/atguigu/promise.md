# Promise深入 + 自定义Promise
## 1. 准备
### 1.1. 函数对象与实例对象
1. 函数对象: 将函数作为对象使用时, 简称为函数对象
2. 实例对象: new 函数产生的对象, 简称为对象

### 1.2. 回调函数的分类
1. 同步回调: 
    - 理解: 立即执行, 完全执行完了才结束, 不会放入回调队列中
    - 例子: 数组遍历相关的回调函数 / Promise的excutor函数
2. 异步回调: 
    - 理解: 不会立即执行, 会放入回调队列中将来执行
    - 例子: 定时器回调 / ajax回调 / Promise的成功|失败的回调

### 1.3. JS中的Error
1. 错误的类型
    - Error: 所有错误的父类型
    - ReferenceError: 引用的变量不存在
        ```js
        console.log(aaq)

        // 报错：
        // Uncaught ReferenceError: aaq is not defined
        ```
    - TypeError: 数据类型不正确的错误
        ```js
        let b;
        console.log(b.xxx)

        // 报错：
        // Uncaught TypeError: Cannot read property 'xxx' of undefined
        ```
    - RangeError: 数据值不在其所允许的范围内
        ```js
        function fn(){
            fn()
        }
        fn()

        // 报错：
        // Uncaught RangeError: Maximum call stack size exceeded
        ```
    - SyntaxError: 语法错误
        ```js
        const a = """"

        // 报错：
        // Uncaught SyntaxError: Unexpected string
        ```
2. 错误处理
    - 捕获错误: try ... catch
        ```js
        try{
            let d
            console.log(d.xxx)
        }catch(error){
            console.log(error.message)
            console.log(error.stack)
        }

        console.log("aaaa")
        ```
    - 抛出错误: throw error
        ```js
        // 抛出错误: throw error
        function something(){
            if(Date.now()%2 === 1){
                console.log("当前时间为奇数");
            }else{
                throw new Error("当前时间为偶数");
            }
        }

        // 捕获处理异常
        try{
            something();
        }catch(error){
            console.log(error.message);
        }
        ```

    1. 错误对象
        message属性: 错误相关信息
        stack属性: 函数调用栈记录信息

## 2. Promise的理解和使用 (WWH : What Way How )
- 学习有点儿深度的内容，一定要搞清楚这三个东西 WWH

### 2.1. Promise是什么?
1. 抽象表达: 
    - Promise是JS中进行异步编程的新的解决方案(旧的是谁? 纯回调形式)
2. 具体表达:
    - 从语法上来说: Promise是一个构造函数
    - 从功能上来说: promise对象用来封装一个异步操作并可以获取其结果
3. promise的状态改变(只有2种, 只能改变一次)
    - pending变为resolved
    - pending变为rejected
4. promise的基本流程
![promise基本流程](http://vipkshttp1.wiz.cn/ks/share/resources/49c30824-dcdf-4bd0-af2a-708f490b44a1/92b8cbfb-a474-4859-943b-6048e9dc66f6/index_files/9b2b980e2959c4f996cafddb03fa5d4d.png)
5. promise 基本使用
    ```js
    // 1. 创建一个新的promise对象
    const p = new Promise((resolve, reject) => {// 执行器函数  同步回调
        console.log('执行 excutor')
        // 2. 执行异步操作任务
        setTimeout(() => {
            const time = Date.now() // 如果当前时间是偶数就代表成功, 否则代表失败
            // 3.1. 如果成功了, 调用resolve(value)
            if (time % 2 == 0) {
                resolve('成功的数据, time=' + time)
            } else {
                // 3.2. 如果失败了, 调用reject(reason)
                reject('失败的数据, time=' + time)
            }
        }, 1000);
    })
    console.log('new Promise()之后')

    p.then(
        value => { // 接收得到成功的value数据    onResolved
            console.log('成功的回调', value)
        },
        reason => {// 接收得到失败的reason数据  onRejected
            console.log('失败的回调', reason)
        }
    )
    ```

### 2.2. 为什么要用Promise?
1. 指定回调函数的方式更加灵活: 
    - 旧的: 必须在启动异步任务前指定
    - promise: 启动异步任务 => 返回promie对象 => 给promise对象绑定回调函数(甚至可以在异步任务结束后指定)
2. 支持链式调用, 可以解决回调地狱问题
    - 什么是回调地狱? 回调函数嵌套调用, 外部回调函数异步执行的结果是嵌套的回调函数执行的条件
    - 回调地狱的缺点?  不便于阅读 / 不便于异常处理
    - 解决方案? promise链式调用
    - 终极解决方案? async/await
    ```js
    // 回调地狱
    doSomething(function(result) {
        doSomethingElse(result, function(newResult) {
            doThirdThing(newResult, function(finalResult) {
                console.log('Got the final result: ' + finalResult)
            }, failureCallback)
        }, failureCallback)
    }, failureCallback)
    /* 
    2.2. 使用promise的链式调用解决回调地狱
    */
    doSomething()
    .then(function(result) {
        return doSomethingElse(result)
    })
    .then(function(newResult) {
        return doThirdThing(newResult)
    })
    .then(function(finalResult) {
        console.log('Got the final result: ' + finalResult)
    })
    .catch(failureCallback)

    /* 
    2.3. async/await: 回调地狱的终极解决方案 （以下是伪代码）
    */
    async function request() {
        try {
            const result = await doSomething()
            const newResult = await doSomethingElse(result)
            const finalResult = await doThirdThing(newResult)
            console.log('Got the final result: ' + finalResult)
        } catch (error) {
            failureCallback(error)
        }
    }
    ```


### 2.3. 如何使用Promise?
1. 主要API
    1. Promise构造函数: Promise (excutor) {}
        excutor函数: 同步执行  (resolve, reject) => {}
        resolve函数: 内部定义成功时我们调用的函数 value => {}
        reject函数: 内部定义失败时我们调用的函数 reason => {}
        说明: excutor会在Promise内部立即同步回调,异步操作在执行器中执行

    2. Promise.prototype.then方法: (onResolved, onRejected) => {}
        onResolved函数: 成功的回调函数  (value) => {}
        onRejected函数: 失败的回调函数 (reason) => {}
        说明: 指定用于得到成功value的成功回调和用于得到失败reason的失败回调
              **返回一个新的promise对象** （promise 链式调用的前提）

    3. Promise.prototype.catch方法: (onRejected) => {}
        onRejected函数: 失败的回调函数 (reason) => {}
        说明: then()的语法糖, 相当于: then(undefined, onRejected)

    4. Promise.resolve方法: (value) => {}
        value: 成功的数据或promise对象
        说明: 返回一个成功/失败的promise对象

    5. Promise.reject方法: (reason) => {}
        reason: 失败的原因
        说明: 返回一个失败的promise对象

    6. Promise.all方法: (promises) => {}
        promises: 包含n个promise的数组
        说明: 返回一个新的promise, 只有所有的promise都成功才成功, 只要有一个失败了就直接失败
    7. Promise.race方法: (promises) => {}
        promises: 包含n个promise的数组
        说明: 返回一个新的promise, 第一个完成的promise的结果状态就是最终的结果状态
2. 几个重要问题
    1. 如何改变promise的状态?
    2. 一个promise指定多个成功/失败回调函数, 都会调用吗?
    3. promise.then()返回的新promise的结果状态由什么决定?
    4. 改变promise状态和指定回调函数谁先谁后?
    5. promise如何串连多个操作任务?
    6. promise异常传(穿)透?
    7. 中断promise链

## 3. 自定义Promise
1. 定义整体结构
2. Promise构造函数的实现
3. promise.then()/catch()的实现
4. Promise.resolve()/reject()的实现
5. Promise.all/race()的实现
6. Promise.resolveDelay()/rejectDelay()的实现
7. ES6 class版本

## 4. async与await
1. async 函数
    - 函数的返回值为promise对象
    - promise对象的结果由async函数执行的返回值决定

2. await 表达式
    - await右侧的表达式一般为promise对象, 但也可以是其它的值
    - 如果表达式是promise对象, await返回的是promise成功的值
    - 如果表达式是其它值, 直接将此值作为await的返回值

3. 注意:
    - await必须写在async函数中, 但async函数中可以没有await
    - 如果await的promise失败了, 就会抛出异常, 需要通过try...catch来捕获处理

## 5. JS异步之宏队列与微队列
![宏队列与微队列](http://vipkshttp1.wiz.cn/ks/share/resources/49c30824-dcdf-4bd0-af2a-708f490b44a1/92b8cbfb-a474-4859-943b-6048e9dc66f6/index_files/60b9ff398449db2dcfef9197e2187ae6.png)

1. 宏列队: 用来保存待执行的宏任务(回调), 比如: 定时器回调/DOM事件回调/ajax回调
2. 微列队: 用来保存待执行的微任务(回调), 比如: promise的回调/MutationObserver的回调
3. JS执行时会区别这2个队列
    - JS引擎首先必须先执行所有的初始化同步任务代码
    - 每次准备取出第一个宏任务执行前, 都要将所有的微任务一个一个取出来执行


## 补充：
- 回调函数的三个特点：缺一不可
    - 你定义的
    - 你不亲自调用，但是他最后应该是执行了
    - 会执行
- 回调函数的两种分类：同步回调函数（比如数组的 forEach 的回调函数），异步回调函数（比如 ajax 的 success 回调）

- ```Uncaught ReferenceError: a is not defined```
    - Uncaught 表示没有捕获error 下边的代码不会执行
- 面试中的 2(超过别人甚至他)+2(和别人一样)+1(不如别人) 


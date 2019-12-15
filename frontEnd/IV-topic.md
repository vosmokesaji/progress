# 面试题
1. 观察下边这段代码：
    ```javascript
    var F = function(){}
    Object.prototype.a = function(){ console.log("梧"); }
    Function.prototype.b = function(){ console.log("桐"); }
    var f = new F();
    ```
    问 f 是否可以同时拿到 a 和 b 两个方法？为什么？

2. 写出下面这段函数的输出结果
    ```javascript
    let getNumber = (arg) => {
        return new Promise(function(resolve, reject){
            if(arg <= 10){
                console.log(5);
                showNumber();
                resolve(arg);
            } else {
                console.log(81);
                showNumber();
                reject(arg);
            }
        })
    }
    ```

3. [问题二](https://juejin.im/post/5d2d146bf265da1b9163c5c9)
    ```javascript
    var a = 10;
    function foo() {
        console.log(a); // ??
        let a = 20;
    }
    foo();
    ```
    - 为啥报错？
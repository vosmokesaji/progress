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


# Part1-JS进阶

## 创建对象
- 创建一个对象很简单，那创建四个呢？
    - 可以复制，但如果有很多很多呢？所以，复制是解决不了根本问题的
    - 有很多的简单的方法让我们创建很多很多的对象
- 工厂模式：函数传参，返回相应的对象。
    - 有一个严重的问题：无法证明这个工厂造的这个对象杯子是“杯子”
 
### 聊聊函数

#### ```arguments```
- 是一个对象，不是数组，是类数组，有 length 属性。
- 建议不要滥用，比如使用 ```arguments[0]``` 会很影响代码可读性
- 非常适合动态参数（参数数量不定）的场景

```javascript
function superAdd(){
    var len = arguments.length,
        result = 0,
        i;

    if(len){
        for(i = 0; i < len; i ++ ){
            result = result + arguments[i];
        }
    }
    return result;
}
superAdd(1, 2);
superAdd(1, 2, 3);
superAdd(1, 2, 3, 4);
```

#### ```this```
- 全局作用域指向 ```window```；
- 对象的方法中的 ```this``` ，指向这个对象；
- ```this``` 的指向并不能在定义时确定，在调用时才能确认。


```javascript
window.name = "jero";
var o = {
    name : "henry"
};

function sayName() {
    console.log(this.name);
}

sayName();          // "jero"

o.sayName = sayName;
o.sayName();        // "henry"
```

- 改变 ```this``` 的指向

    - bind 传入一个对象，将 ```this``` 指向这个对象

    ```javascript
    window.name = "jero";
    var o = {
        name : "henry"
    };

    function sayName() {
        console.log(this.name);
    }

    o.sayName = sayName.bind(window);
    o.sayName();        // "jero"
    ```

    - ```call, apply``` 改变 ```this``` 的指向

    ```javascript
    window.name = "jero";
    var o = {
        name : "henry"
    };
    function sayName(){
        console.log(this.name);    
    }
    // apply
    sayName.apply(o);       // "jero"
    // call
    sayName.call(o);        // "jero"

    // apply 和 call 的区别：传参的时候 apply 要传数组，call 直接逗号传就可以，e.g.
    function sayName(){
        console.log(this.name , arguments); 
    }
    sayName.call(o , 1 , 2);
    sayName.apply(o , [1 , 2]); 
    ```

#### 函数的属性
- 函数名 ```name```
- 形参的个数 ```length``` ，在函数声明的时候就确认了
    - 区别：实参的个数 ```arguments.length``` ，在函数被调用的时候确才认的
- 原型 ```prototype``` 是一个对象，继承的关键

#### 函数是一等公民 
- 一等公民其实是 ```First Class``` 的翻译，（毫无疑问这是个糟糕的翻译）
- ```First Class``` 其实是数据类型的一类，以下这三类分类是跨语言的
    - ```First Class``` 可以作为函数的参数和返回值，也可以赋给变量
    - ```Second Class``` 可以作为函数的参数，但不能从函数返回，也不能赋给变量
    - ```Third Class``` 不能作为函数的参数

```javascript
var add = function(a, b){
    return a + b;
}

// 另一种声明方式：最后的参数是 函数体，前边的参数就是参数
var add = new Function("a", "b", "return a + b");

// 函数 可以作为 函数的参数 的例子：回调函数
[1, 2, 3].sort(function(a, b){
    return a < b;
});

// 函数作为返回值 
function createScope(member){
    return function(){
        return member;
    }
}

var getHenry = creatScope("henry");
getHenry();

var getJero = creatScope("jero");
getJero();

// 上边这个例子涉及到一个非常重要的思想：不可修改的变量，也叫私有变量
// 这样创建私有变量、私有方法 的方法称之为 闭包
```

#### 闭包 
- **闭包** 是指有权访问另一个函数作用域中变量的函数。——《JavaScript高级程序设计》
- 怎么理解这句话？分两步：
    - 闭包是**函数**。什么样的函数？
    - 有权访问另一个**函数作用域**中变量 的**函数**。

```javascript
function foo(){
    var a = "test";

    function bar(){
        console.log(a);
    }
    bar();
}
foo();
```
- 这个函数闭包的部分可以理解为这样，所以闭包又叫**带有数据的函数**

```javascript
var a = "test";

function bar(){
    console.log(a);
}
```

```javascript
function foo(){
    var a = "test";

    function bar(){
        console.log(a);
    }
    return bar;
}

var bar = foo();
bar();
```

### 构造函数
- ```instanceof``` 判断对象是否是构造函数的实例

```javascript
// 原生构造函数
var obj = new Object();
var add = new Function("a", "b", "return a + b");

console.log(obj instanceof Object);     // true
console.log(add instanceof Function);   // true

// 同理 构造函数
var bottle = new Bottle("杯子", 59, true);
console.log(bottle instanceof Bottle);  // true

// 构造函数的声明
function Bottle(name, price, isKeepWarm){
    this.name = name;
    this.price = price;
    this.isKeepWarm = isKeepWarm;
}
// 约定：如果作为构造函数，要首字母大写
// 特点1：没有显示的创建对象
// 特点2：将 属性 和 方法 挂载到 this 上
// 特点3：没有 return 语句

// new 会做什么事儿？
// 1. 创建一个空对象
// 2. 
// 3. 
// 4. 
```
 
### 构造函数的不足之处

```javascript
function Bottle(name, price, isKeepWarm){
    this.name = name;
    this.price = price;
    this.isKeepWarm = isKeepWarm;

    
    this.sayHello = function(){
        console.log("hello!");
    };

    // 这里的 sayHello 是一个 function 实例
    // this.sayHello = new Function({"console.log('hello!');"});
}

var bottle1 = new Bottle("马克杯", 29, false);
var bottle2 = new Bottle("保温杯", 99, true);

// 创建两个 Bottle 的实例伴随着创建了两个 sayHello 方法，并没有复用
// 这就是构造函数的缺陷：功能相同的函数，重复的声明消耗内存
// 要想解决这个问题，就要用到 “原型”
```

### 原型
- **原型** 是函数的一个属性，是一个对象

#### constructor

- ```constructor``` 指向它的构造函数
```javascript
Object.prototype.constructor === Object     // true
```
#### 读写
- 原型 是可读，可写的
    ```javascript
    function Bottle(){
        this.sayName = function(){}
    }

    // 原型可写
    Bottle.prototype.name = "保温杯";
    Bottle.prototype.price = 99;
    Bottle.prototype.sayHello = function(){
        console.log("hello");
    };

    var bottle1 = new Bottle();
    console.log(bottle1);
    // 输出一个 Bottle 对象，只有一个属性 __proto__ ，这就是它的原型
    // 我们在代码里一定一定不要使用 __proto__ ，而要用 prototype 去访问原型
    // 疑惑：为啥代码中不能用 __proto__ ？

    console.log(bottle1.name);      // "保温杯"
    bottle1.sayHello();             // "hello!"

    // 那怎么证明解决了内存的问题呢？
    var bottle2 = new Bottle();
    console.log(bottle1.sayName === bottle2.sayName);       // false
    console.log(bottle1.sayHello === bottle2.sayHello);     // true
    ```
- 通过构造函数生成的对象都会共享这个构造函数的原型。

#### isPrototypeOf
- 检验实例是否挂了这个构造函数的原型

```javascript
console.log(Bottle.prototype.isPrototypeOf(bottle1));   // true
```









```javascript

```
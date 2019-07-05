

- [1. Part1-JS进阶](#1-Part1-JS%E8%BF%9B%E9%98%B6)
  - [1.1. 创建对象](#11-%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1)
    - [1.1.1. 聊聊函数](#111-%E8%81%8A%E8%81%8A%E5%87%BD%E6%95%B0)
      - [1.1.1.1. ```arguments```](#1111-arguments)
      - [1.1.1.2. ```this```](#1112-this)
      - [1.1.1.3. 函数的属性](#1113-%E5%87%BD%E6%95%B0%E7%9A%84%E5%B1%9E%E6%80%A7)
      - [1.1.1.4. 函数是一等公民](#1114-%E5%87%BD%E6%95%B0%E6%98%AF%E4%B8%80%E7%AD%89%E5%85%AC%E6%B0%91)
      - [1.1.1.5. 闭包](#1115-%E9%97%AD%E5%8C%85)
    - [1.1.2. 构造函数](#112-%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0)
    - [1.1.3. 构造函数的不足之处](#113-%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E7%9A%84%E4%B8%8D%E8%B6%B3%E4%B9%8B%E5%A4%84)
    - [1.1.4. 原型](#114-%E5%8E%9F%E5%9E%8B)
      - [1.1.4.1. constructor](#1141-constructor)
      - [1.1.4.2. 读写](#1142-%E8%AF%BB%E5%86%99)
      - [1.1.4.3. isPrototypeOf](#1143-isPrototypeOf)
      - [1.1.4.4. 小结](#1144-%E5%B0%8F%E7%BB%93)
      - [1.1.4.5. 原型的缺陷（共享的缺陷）](#1145-%E5%8E%9F%E5%9E%8B%E7%9A%84%E7%BC%BA%E9%99%B7%E5%85%B1%E4%BA%AB%E7%9A%84%E7%BC%BA%E9%99%B7)
    - [1.1.5. 构造函数 + 原型 （完美的创建对象的方式）](#115-%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0--%E5%8E%9F%E5%9E%8B-%E5%AE%8C%E7%BE%8E%E7%9A%84%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E5%BC%8F)
  - [1.2. 继承](#12-%E7%BB%A7%E6%89%BF)
    - [1.2.1. 继承的概念](#121-%E7%BB%A7%E6%89%BF%E7%9A%84%E6%A6%82%E5%BF%B5)
    - [实现继承](#%E5%AE%9E%E7%8E%B0%E7%BB%A7%E6%89%BF)
    - [原型链继承的缺陷](#%E5%8E%9F%E5%9E%8B%E9%93%BE%E7%BB%A7%E6%89%BF%E7%9A%84%E7%BC%BA%E9%99%B7)
        
        


# 1. Part1-JS进阶

## 1.1. 创建对象
- 创建一个对象很简单，那创建四个呢？
    - 可以复制，但如果有很多很多呢？所以，复制是解决不了根本问题的
    - 有很多的简单的方法让我们创建很多很多的对象
- 工厂模式：函数传参，返回相应的对象。
    - 有一个严重的问题：无法证明这个工厂造的这个对象杯子是“杯子”
 
### 1.1.1. 聊聊函数

#### 1.1.1.1. ```arguments```
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

#### 1.1.1.2. ```this```
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

#### 1.1.1.3. 函数的属性
- 函数名 ```name```
- 形参的个数 ```length``` ，在函数声明的时候就确认了
    - 区别：实参的个数 ```arguments.length``` ，在函数被调用的时候确才认的
- 原型 ```prototype``` 是一个对象，继承的关键

#### 1.1.1.4. 函数是一等公民 
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

#### 1.1.1.5. 闭包 
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

### 1.1.2. 构造函数
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
 
### 1.1.3. 构造函数的不足之处

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

### 1.1.4. 原型
- **原型** 是函数的一个属性，是一个对象

#### 1.1.4.1. constructor

- ```constructor``` 指向它的构造函数
```javascript
Object.prototype.constructor === Object     // true
```
#### 1.1.4.2. 读写
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
- 通过构造函数生成的对象都会 **共享** 这个构造函数的原型。利用这个特性，我们就能解决浪费内存的问题。

#### 1.1.4.3. isPrototypeOf
- 检验实例是否挂了这个构造函数的原型

```javascript
console.log(Bottle.prototype.isPrototypeOf(bottle1));   // true
```

#### 1.1.4.4. 小结
- **原型** 是函数的一个属性，是一个对象。
- 如果函数作为告诉早函数使用，那么这个构造函数的所有实例，都**共享**这个原型对象。

#### 1.1.4.5. 原型的缺陷（共享的缺陷）

- 先看一个例子

    ```javascript
    var price = 5;
    var priceCopy = price;

    priceCopy = 10;
    console.log(price, priceCopy);  // 5 ,10


    var color = ["红", "黄"];
    var coloCopy = color;

    colorCopy.push("蓝");
    console.log(color, colorCopy);  // ["红", "黄", "蓝"], ["红", "黄", "蓝"]
    ```
- 使用原型创建对象的例子

    ```javascript
    function Bottle(){}

    Bottle.prototype.color = ["红", "黄"];

    var bottle1 = new Bottle();
    var bottle2 = new Bottle();

    bottle1.color.push("蓝");

    console.log(bottle1.color);  // ["红", "黄", "蓝"]
    console.log(bottle2.color);  // ["红", "黄", "蓝"]
    ```
- 这样的共享会导致，我们不希望共享的属性被共享。

> 思考：多选题：一下哪些情形会有共享问题（变量 b 的值会受影响）

```javascript
// A
var a = 1;
var b = a;
a = 2;
console.log(b);

// B
var a = [1, 2, 3];
var b = a;
a.length = 2;
console.log(b);

// C
var a = {key : 1};
var b = a;
a = {key : 2};
console.log(b);

// D
var a = {key : 1};
var b = a;
a.key = 2;
console.log(b);


// 1
// [1, 2]
// {key: 1}
// {key: 2}
// 答案是 B D
```


### 1.1.5. 构造函数 + 原型 （完美的创建对象的方式）
- 通过 **构造函数** 创建独享的 **属性 & 方法**
- 通过 **原型** 创建共享的 **属性 & 方法**

    ```javascript
    // 通过 构造函数 创建独享的 属性 & 方法
    function Bottle(name, price, isKeepWarm){
        this.name = name;
        this.price = price;
        this.isKeepWarm = isKeepWarm;
    }

    // 通过 原型 创建共享的 属性 & 方法
    Bottle.prototype.sayName = function(){
        console.log(this.name);
    };
    Bottle.prototype.for = "盛水";

    var bottle = new Bottle("超级保温杯", 299, true);
    ```
- 注意几点
    - 属性的覆盖：如果构造函数和原型上都有这个属性，**构造函数中的属性会覆盖原型上的属性**
    - 判断对象有没有 某个属性。
        - ```in``` 操作符，只能判断对象有没有某个属性，不能判断是不是原型上的属性

            ```javascript
            console.log("name" in bottle);    // true
            console.log("for" in bottle);    // true
            ```
        - ```hasOwnProperty``` 操作符

            ```javascript
            console.log(bottle.hasOwnProperty("name"));    // true
            console.log(bottle.hasOwnProperty("for"));    // false
            ```

## 1.2. 继承
- 先看一段代码

    ```javascript
    // 飞机
    function Airliner(color){
        this.color = color;
        this.passengers = [];
    }
    Airliner.prototype.fly = function(){
        console.log("flying");
    }

    // 如果我们还需要战斗机
    function Fighter(color){
        this.color = color;
        this.bullets = [];
    }
    Airliner.prototype.fly = function(){
        console.log("flying");
    }
    Airliner.prototype.shoot = function(){
        console.log("biu biu biu");
    }

    // 我们发现 这些部分是一样的，这就造成了代码冗余，浪费内存的问题
    this.color = color;

    fly = function(){
        console.log("flying");
    }
    ```
- 有一种很好的模型可以解决这个问题，他就是继承

### 1.2.1. 继承的概念
- 继承可以使子类具有父类的属性和方法，而不需要重复编写相同的代码。
- 抽离共性作为父类用来继承，保留个性。

### 实现继承

- 目标：子类具有父类的方法和属性
- 做法：将 **子类的原型** 指向 **父类的实例**

```javascript
// 父类 Plane 飞机
function Plane(color){
    this.color = color;
}

// 父类的公有方法
Plane.prototype.fly = function(){
    console.log("flying");
}

// 子类 Fighter 战斗机
function Fighter(){
    this.bullets = [];
}

// 子类的原型指向父类的实例
Fighter.prototype = new Plane("blue");

// 子类的特有方法
Fighter.prototype.shoot = function(){
    console.log("biu biu biu");
}

// 检验一下继承的效果
var fighter = new Fighter();
console.log(fighter.color); // "blue"
fighter.fly();              // "flying"
```

### 原型链继承的缺陷

1. constructor 的指向问题

```javascript
// constructor 的指向问题 ： 子类的原型指向父类的实例之后，发现子类的构造函数是父类
Fighter.prototype = new Plane("blue");
var fighter = new Fighter();
console.log(fighter.constructor); // Plane

// 要解决这个问题也很简单，只要【手动】将子类的 constructor 指向自己就行了
Fighter.prototype = new Plane("blue");
Fighter.prototype.constructor = Fighter;
```

2. 属性共享问题

```javascript
fighter1.pilots.push("kevin");
console.log(fighter2.pilots);   // ["kevin"]
```

3. 参数的问题
如果是父类的参数，子类不好修改，比如上边例子中 Plane 的 color










```javascript

```






```javascript

```






```javascript

```
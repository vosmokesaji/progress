<!-- # [廖雪峰JS教程](https://www.liaoxuefeng.com/wiki/1022910821149312) -->
## Part 1 快速入门部分

- ```NaN``` 这个特殊的Number与所有其他值都不相等，包括它自己：

    ```javscript
    NaN === NaN; // false

    // 唯一能判断NaN的方法是通过isNaN()函数：
    isNaN(NaN); // true
    ```
- JavaScript 的设计者希望用 ```null``` 表示一个空的值，而 ```undefined``` 表示值未定义。事实证明，这并没有什么卵用，区分两者的意义不大。大多数情况下，我们都应该用 ```null``` 。 ```undefined``` 仅仅在判断函数参数是否传递的情况下有用。
- 变量在JavaScript中就是用一个变量名表示，变量名是大小写英文、数字、$和_的组合，且不能用数字开头。变量名也不能是JavaScript的关键字，如if、while等。
- ECMA在后续规范中推出了strict模式，在strict模式下运行的JavaScript代码，必须通过var申明变量，未使用var申明变量就使用的，将导致运行错误。
- 字符串：
    - 可以用 ```\``` 表示转义
    - 可以用 ```\x##``` ## 表示两位十六进制数，表示 ASCII 字符
    - 还可以用 ```\u####``` #### 表示四位16进制
    - ES6 多行字符串 ``` `多行字符串` ```
        ```javascript
        console.log(`多行
        字符串
        测试`);
        ```
    - ES6 模板字符串。涉及到多个变量和字符串做拼接，之前用的 ```+``` 号就比较麻烦
        - 要点1：要使用反引号 ``` ` ```
        - 要点2：使用 ```${变量名}``` 做占位符（占位符这个说法不知道准不准，我就是这么理解的）
        ```javascript
        var name = '小明';
        var age = 20;
        var message = '你好, ' + name + ', 你今年' + age + '岁了!';
        alert(message);
        
        // 模板字符串，表示方法和上面的多行字符串一样，但是它会自动替换字符串中的变量：
        var name = '小明';
        var age = 20;
        var message = `你好, ${name}, 你今年${age}岁了!`;
        alert(message);
        ```
    - 需要特别注意的是，字符串是不可变的，如果对字符串的某个索引赋值，不会有任何错误，但是，也没有任何效果：
        ```javascript
        var s = 'Test';
        s[0] = 'X';
        alert(s); // s仍然为'Test'
        ```
    -  ```toUpperCase``` ```toLowerCase``` ```substring``` 不会改变原始字符串
        ```javascript
        var s = "Hello, World",
            upper = s.toUpperCase(),
            lower = s.toLowerCase(),
            index = s.indexOf("W"),
            sub1 = s.substring(2,4),
            sub2 = s.substring(7);
        console.log(`${s} :: ${upper} :: ${lower} :: ${index} :: ${sub1} :: ${sub2}`);
        // 输出： Hello, World :: HELLO, WORLD :: hello, world :: 7 :: ll :: World
        ```
- 数组：
    - 请注意，直接给Array的length赋一个新的值会导致Array大小的变化
    - 注意，如果通过索引赋值时，索引超过了范围，同样会引起Array大小的变化
    - 大多数其他编程语言不允许直接改变数组的大小，越界访问索引会报错。然而，JavaScript的Array却不会有任何错误。在编写代码时，不建议直接修改Array的大小，访问索引时要确保索引不会越界。
    - ```sliice()``` 是对应 String 的 ```substring()``` 版本，它截取Array的部分元素，然后返回一个新的Array
        ```javascript
        var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        arr.slice(0, 3); // 从索引0开始，到索引3结束，但不包括索引3: ['A', 'B', 'C']
        arr.slice(3); // 从索引3开始到结束: ['D', 'E', 'F', 'G']
        ```





# ES6

## Set
- 也叫集合，不会包含重复元素，可以用来去重
- Set 认为 NaN 与 NaN 完全相等，所以添加两次 NaN，最终只会有一个
- 属性
    - `Set.prototype.constructor`
    - `Set.prototype.size`
- 操作方法
    - `Set.prototype.add(value)` ： 添加某个值，返回 Set 结构本身。
    - `Set.prototype.delete(value)` ： 删除某个值，返回一个布尔值，表示删除是否成功。
    - `Set.prototype.has(value)` ： 返回一个布尔值，表示该值是否为Set的成员。
    - `Set.prototype.clear()` ： 清除所有成员，没有返回值。
- 判断是否包含一个键，set 比对象更准确
    ```js
    // 对象的写法
    const properties = {
        'width': 1,
        'height': 1
    };

    if (properties[someName]) {
    // do something
    }
    // 如果键对应的值是 false 判断会出现错误 （这个问题面试中考过，没答上来）

    // Set的写法（不会有上边的问题）
    const properties = new Set();

    properties.add('width');
    properties.add('height');

    if (properties.has(someName)) {
        // do something
    }
    ```
- `Array.from` 方法可以将 Set 结构转为数组
    ```js
    const items = new Set([1, 2, 3, 4, 5]);
    const array = Array.from(items);
    ```
- 遍历方法
    - `Set.prototype.keys()` ：返回键名的遍历器
    - `Set.prototype.values()` ：返回键值的遍历器
    - `Set.prototype.entries()` ：返回键值对的遍历器
    - `Set.prototype.forEach()` ：使用回调函数遍历每个成员
- 需要特别指出的是，Set的遍历顺序就是插入顺序。这个特性有时非常有用，比如使用 Set 保存一个回调函数列表，调用时就能保证按照添加顺序调用

- weakSet 的应用没太看懂，回头多看几遍

## Map
- 为了解决 普通对象的 键 只能是字符串的限制问题而引入的 Map 结构

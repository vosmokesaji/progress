# 查漏补缺


## 知识点
- 【vue】vue 的 data  什么时候用对象？什么时候用函数内部返回对象？
    - 在组件中 必须写 函数
- 【js】 event.stopPropagation(); 原生有兼容性问题？
- 【vue】@click.stop="" 阻止事件冒泡  @click.prevent="" 阻止默认行为
- 【vue】按键修饰符 @keyup.13="" ，直接 点 keycode ，比如13 是指 enter 键，记不住？写名字 @keyup.enter="" 
- 【vue】 v-model 自动收集表单数据
- 【vue】生命周期中执行异步方法会有什么影响，怎么解决？
- 【vue】常用的生命周期方法： mounted  beforDestroy
- 【vue】生命周期
    - 初始化：
        - beforCreate
        - created
        - beforMount
        - mounted
    - 更新：
        - beforUpdate
        - updated
    - 销毁：
        - beforDestroy
        - destroyed
- 【github】 moment 
- 【vue】防止闪现 [v-cloak](https://cn.vuejs.org/v2/api/#v-cloak)
- 【vue】自定义指令的时候，不需要写 v- 使用自定义指令时要在你定义的指令名前加 v- 
    - 全局指令 通过 Vue 函数对象的 directive 方法指定的
        ```js
        // el 指令属性所在标签 DOM 对象
        // binding 包含指令相关信息的对象
        Vue.directive('my-directive', function(el, binding){
            el.innerHTML = binding.value.toupperCase();
        })
        ```
    - 局部指令 （实例的指令，就是只在当前 vm 管理的范围内有效）， 通过 配置完成的
        ```js
        directives: {
            'my-directive': {
                bind(el, binding){
                    el.innerHTML = binding.value.toupperCase();
                }
            }
        }
        ```
    - **对 binding 的理解是难点**
- 【vue】[插件](https://cn.vuejs.org/v2/guide/plugins.html)
- 【vue】脚手架工具 [vue-cli](https://cli.vuejs.org/zh/guide/) 帮你拷贝一个 **vue 模板项目**
- .babelrc 中的 rc 什么意思？ runtime control 运行时控制，来说明babel 是怎么运行的，也就是 babel 的一个配置文件
- 【组件化】拆分组件的时候，数据放在那里？看谁用，组件自己用：放在组件里，不同组件用，放在他们的父组件里
    - 数据在哪个组件，更新数据的行为（方法）就该定义在哪个组件
- 【组件化】做数据交互从哪里做起？从绑定事件监听开始做起，你要确定 1. **给谁绑定事件监听添加回调函数**，2. **在回调函数中该做什么**
- 【js】【事件】 鼠标划入滑出
    - mouseenter mouseleave  进入子元素不会触发 leave  good 
    - mouseover mouseout 进入子元素会触发 out  notgood
- 【js】数组的 filter 和 reduce 方法
- 【js】localstroage 保存的是一个文本，你要用它保存数据必须使用 JSON.parse JSON.stringify
    - 如果读不到，返回 null
- 【vue】深度监视
    ```js
    {
        watch: {
            objectName: {
                deep: true,
                handler: function(newValue, oldValue){
                    ...
                }
            }
        }
    }
    ```
- 【vue】[自定义事件](https://cn.vuejs.org/v2/guide/components-custom-events.html)
- 【vue】 pubsub 两个组件通信没有 任何位置的要求 ```npm i pubsub-js --save```
- 【vue】声明使用插件： 内部会给 vm 对象 和组件对象添加一个插件对应的属性，通过这个属性可以调用插件的方法
    ```js
    Vue.use(xxx);
    ```
- 【github】github 的开放接口？  哪里找？[例子](https://api.github.com/search/repositories?q=v&sort=stars)
- 【vue】什么操作放在 created 中 ， 什么操作放在 mounted 中
- 【基础】理解路由
    - 路由器是什么？ 管理路由的东西 VueRouter 就是路由器的构造函数
    - 路由是什么？  是一个映射关系，一个 key 对应一个 value  
        - key 是 path，
        - value 是 
            - 后台路由中，是处理请求的回调函数
            - 前端路由中是 组件
- 【js】常用的字符串变 Number ， 前边加个加号、 *1  or  /1
- 【js】数组的方法
    - 会改变数组本身
        - pop
        - push
        - shift
        - unshift
        - reverse
        - sort
        - splice
    - 不会改变数组本身
        - join
        - slice
        - concat
        - indexOf
        - lastIndexfo
        - forEach
        - map
        - filter
        - every
        - some
- 【ES6】为啥要优先用 ```const``` ?
- 【js】聊聊继承。
    - 从document 的继承方式说一说
    - 在控制台 ```console.log(window)``` ，然后展开
    - ```document``` <- ```HTMLDocument``` <- ```Document``` <- ```Node``` <- ```EventTarget``` <- ```Object```
    - ```document.documentElement``` <- ```HTMLHtmlElement``` <- ```HTMLElement``` <- ```Element``` <- ```Node``` <- ```EventTarget``` <- ```Object```
    - ```window``` <- ```Window``` <- ```Window``` <- ```WindowProperties``` <- ```EventTarget``` <- ```Object```
- 【js】[标签的用法](https://wangdoc.com/javascript/basic/grammar.html#%E6%A0%87%E7%AD%BE%EF%BC%88label%EF%BC%89) JavaScript 语言允许，语句的前面有标签（label），相当于定位符，用于跳转到程序的任意位置
- 【js】typeof null返回object
    - null 的类型是 object，这是由于历史原因造成的。1995年的 JavaScript 语言第一版，只设计了五种数据类型（对象、整数、浮点数、字符串和布尔值），没考虑 null ，只把它当作object的一种特殊值。后来null独立出来，作为一种单独的数据类型，为了兼容以前的代码，typeof null 返回 object 就没法改变了。


- 【js】【基础知识】[数值](https://wangdoc.com/javascript/types/number.html)
    - **精度**最多只能到53个二进制位，这意味着，绝对值小于2的53次方的整数，即-253到253，都可以精确表示。
    - 64位浮点数的指数部分的值最大为2047，分出一半表示负数，则 JavaScript 能够表示的数值范围为21024到2-1023（开区间），超出这个**范围**的数无法表示
        - 如果一个数大于等于2的1024次方，那么就会发生“**正向溢出**”，即 JavaScript 无法表示这么大的数，这时就会返回Infinity
        - 如果一个数小于等于2的-1075次方（指数部分最小值-1023，再加上小数部分的52位），那么就会发生为“**负向溢出**”，即 JavaScript 无法表示这么小的数，这时会直接返回0
    - 以下两种情况，JavaScript 会**自动**将数值转为**科学计数法**表示，其他情况都采用字面形式直接表示
        - 小数点前的数字多于21位
        - 小数点后的零多于5个
    - **特殊数值**
        - 正零和负零
            - 几乎所有场合，正零和负零都会被当作正常的 ```0```
                ```js
                -0 === +0 // true
                0 === -0 // true
                0 === +0 // true

                +0 // 0
                -0 // 0
                (-0).toString() // '0'
                (+0).toString() // '0'
                ```
            - 唯一有区别的场合是， ```+0``` 或 ```-0``` 当作分母，返回的值是不相等的，之所以出现这样结果，是因为除以正零得到 ```+Infinity``` ，除以负零得到 ```-Infinity``` ，这两者是不相等的
                ```js
                (1 / +0) === (1 / -0) // false
                ```
    - 对于那些会自动转为科学计数法的数字， ```parseInt``` 会将科学计数法的表示方法视为字符串，因此导致一些奇怪的结果
        ```js
        parseInt(1000000000000000000000.5) // 1
        // 等同于
        parseInt('1e+21') // 1

        parseInt(0.0000008) // 8
        // 等同于
        parseInt('8e-7') // 8
        ```
    - ```isNaN()``` 只对数值有效，如果传入其他值，会被先转成数值
        ```js
        isNaN('Hello') // true
        // 相当于
        isNaN(Number('Hello')) // true
        
        // 出于同样的原因，对于对象和数组，isNaN也返回true

        isNaN({}) // true
        // 等同于
        isNaN(Number({})) // true

        isNaN(['xzy']) // true
        // 等同于
        isNaN(Number(['xzy'])) // true

        // 但是，对于空数组和只有一个数值成员的数组， isNaN 返回 false
        isNaN([]) // false
        isNaN([123]) // false
        isNaN(['123']) // false
        // 上面代码之所以返回false，原因是这些数组能被Number函数转成数值

        // 判断NaN更可靠的方法是，利用NaN为唯一不等于自身的值的这个特点，进行判断
        function myIsNaN(value) {
            return value !== value;
        }
        ```
    - ```isFinite``` 方法返回一个布尔值，表示某个值是否为正常的数值
        ```js
        isFinite(Infinity) // false
        isFinite(-Infinity) // false
        isFinite(NaN) // false
        isFinite(undefined) // false
        isFinite(null) // true
        isFinite(-1) // true
        ```

- 【js】【基础知识】[字符串](https://wangdoc.com/javascript/types/string.html)
    - 字符集： JavaScript 使用 Unicode 字符集。 JavaScript 引擎内部，所有字符都用 Unicode 表示
    - 对于码点在 ```U+10000``` 到 ```U+10FFFF``` 之间的字符，JavaScript 总是认为它们是两个字符（length属性为2）。所以处理的时候，必须把这一点考虑在内，也就是说，JavaScript 返回的字符串长度可能是不正确的
    - JavaScript 原生提供两个 Base64 相关的方法
        - btoa()：任意值转为 Base64 编码
        - atob()：Base64 编码转为原来的值
        ```js
        var string = 'Hello World!';
        btoa(string) // "SGVsbG8gV29ybGQh"
        atob('SGVsbG8gV29ybGQh') // "Hello World!"

        // 注意，这两个方法不适合非 ASCII 码的字符，会报错。
        btoa('你好') // 报错
        
        // 要将非 ASCII 码字符转为 Base64 编码，必须中间插入一个转码环节，再使用这两个方法。
        function b64Encode(str) {
        return btoa(encodeURIComponent(str));
        }

        function b64Decode(str) {
        return decodeURIComponent(atob(str));
        }

        b64Encode('你好') // "JUU0JUJEJUEwJUU1JUE1JUJE"
        b64Decode('JUU0JUJEJUEwJUU1JUE1JUJE') // "你好"
        ```
- 【js】【基础知识】[对象](https://wangdoc.com/javascript/types/object.html)
    - 键名
        - 如果键名是数值，会被自动转为字符串
        - 如果键名不符合标识名的条件（比如第一个字符为数字，或者含有空格或运算符），且也不是数字，则必须加上引号，否则会报错
        ```js
        // 这就有意思了
        var obj = {};
        obj[0.4] = 1;
        console.log(obj[2/5]);        // 1
        ```
    - 对象的引用 # 
        - 如果不同的变量名指向同一个对象，那么它们都是这个对象的引用，也就是说指向同一个内存地址。修改其中一个变量，会影响到其他所有变量
    - 属性的删除：delete 命令
        ```js
        // delete命令用于删除对象的属性，删除成功后返回true。
        var obj = { p: 1 };
        Object.keys(obj) // ["p"]

        delete obj.p // true
        obj.p // undefined
        Object.keys(obj) // []

        // 注意，删除一个不存在的属性， delete 不报错，而且返回 true 因此，不能根据delete命令的结果，认定某个属性是存在的
        var obj = {};
        delete obj.p // true

        // 只有一种情况，delete命令会返回false，那就是该属性存在，且不得删除
        var obj = Object.defineProperty({}, 'p', {
            value: 123,
            configurable: false
        });

        obj.p // 123
        delete obj.p // false
        ```
- 【js】【基础知识】函数
    - 采用函数表达式声明函数时，function 命令后面不带有函数名。如果加上函数名，该函数名只在函数体内部有效，在函数体外部无效。
        ```js
        var print = function x(){
        console.log(typeof x);
        };

        x
        // ReferenceError: x is not defined

        print()
        // function
        ```
    - 函数的属性和方法
        - 函数的 ```name``` 属性返回函数的名字
        - 函数的 ```length``` 属性返回函数预期传入的参数个数，即函数定义之中的参数个数
    - 作用域
        - JavaScript 只有两种作用域：一种是**全局作用域**，变量在整个程序中一直存在，所有地方都可以读取；另一种是**函数作用域**，变量只在函数内部存在。ES6 又新增了**块级作用域**
        - 函数本身也是一个值，也有自己的作用域。它的作用域与变量一样，就是其声明时所在的作用域，与其运行时所在的作用域无关。很容易犯错的一点是，如果函数 ```A``` 调用函数 ```B``` ，却没考虑到函数 ```B``` 不会引用函数 ```A``` 的内部变量
            ```js
            var a = 1;
            var x = function () {
                console.log(a);
            };

            function f() {
                var a = 2;
                x();
            }

            f() // 1
            ```
    - 传递方式
        - 函数参数如果是原始类型的值（数值、字符串、布尔值），传递方式是**传值传递（passes by value）**。这意味着，在函数体内修改参数值，不会影响到函数外部。
        - 但是，如果函数参数是复合类型的值（数组、对象、其他函数），传递方式是**传址传递（pass by reference）**。也就是说，传入函数的原始值的地址，因此在函数内部修改参数，将会影响到原始值
        - 注意，如果函数内部修改的，不是参数对象的某个属性，而是**替换**掉整个参数，这时不会影响到原始值
            ```js
            // 传值传递
            var p = 2;
            function f(p) {
                p = 3;
            }
            f(p);
            p // 2

            // 传址传递
            var obj = { p: 1 };
            function f(o) {
                o.p = 2;
            }
            f(obj);
            obj.p // 2

            // 替换掉整个参数， 相当于修改了参数的指向
            var obj = [1, 2, 3];

            function f(o) {
                o = [2, 3, 4];
            }
            f(obj);

            obj // [1, 2, 3]
            ```
    - arguments 对象： 可以在函数体内部读取所有参数
        - 虽然arguments很像数组，但它是一个对象
        - 如果要让arguments对象使用数组方法，真正的解决方法是将arguments转为真正的数组
            ```js
            var args = Array.prototype.slice.call(arguments);
            ```

- 【js】【基础知识】[数据类型的转换](https://wangdoc.com/javascript/features/conversion.html)
    - 强制转换 主要指使用 ```Number()``` 、 ```String()``` 和 ```Boolean()``` 三个函数，手动将各种类型的值，分别转换成数字、字符串或者布尔值
        - Number() 背后的转换规则比较复杂。
            1. 第一步，调用对象自身的valueOf方法。如果返回原始类型的值，则直接对该值使用Number函数，不再进行后续步骤。
            2. 第二步，如果valueOf方法返回的还是对象，则改为调用对象自身的toString方法。如果toString方法返回原始类型的值，则对该值使用Number函数，不再进行后续步骤。
            3. 第三步，如果toString方法返回的是对象，就报错
            - valueOf 和 toString 方法，都是可以自定义的
        - String() 方法背后的转换规则，与Number方法基本相同，只是互换了valueOf方法和toString方法的执行顺序
            1. 先调用对象自身的toString方法。如果返回原始类型的值，则对该值使用String函数，不再进行以下步骤。
            2. 如果toString方法返回的是对象，再调用原对象的valueOf方法。如果valueOf方法返回原始类型的值，则对该值使用String函数，不再进行以下步骤。
            3. 如果valueOf方法返回的是对象，就报错
        - Boolean() 的转换规则相对简单：除了以下五个值的转换结果为false，其他的值全部为true
            1. undefined
            2. null
            3. 0（包含-0和+0）
            4. NaN
            5. ''（空字符串）
    - 自动转换：遇到以下三种情况时，JavaScript 会自动转换数据类型，即转换是自动完成的，用户不可见
        1. 第一种情况，不同类型的数据互相运算。
            ```js
            123 + 'abc' // "123abc"
            ```
        2. 第二种情况，对非布尔值类型的数据求布尔值。
            ```js
            if ('abc') {
                console.log('hello')
            }  // "hello"
            ```
        3. 第三种情况，对非数值类型的值使用一元运算符（即 + 和 - ）。
            ```js
            + {foo: 'bar'} // NaN
            - [1, 2, 3] // NaN
            ```
        - 自动转换的规则是这样的：预期什么类型的值，就调用该类型的转换函数。比如，某个位置预期为字符串，就调用String函数进行转换。如果该位置即可以是字符串，也可能是数值，那么默认转为数值。由于自动转换具有不确定性，而且不易除错，建议在预期为布尔值、数值、字符串的地方，全部使用Boolean、Number和String函数进行显式转换。

- 【js】【基础知识】[错误处理机制](https://wangdoc.com/javascript/features/error.html)
    - 内置错误类型
    - 自定义错误类型
    - 抛出错误： ```throw``` 语句的作用是手动**中断程序执行**，抛出一个错误
        - 实际上，throw可以抛出任何类型的值。也就是说，它的参数可以是任何值
        - 对于 JavaScript 引擎来说，遇到 throw 语句，程序就**中止**了。引擎会接收到throw抛出的信息，可能是一个错误实例，也可能是其他类型的值
    - ```try...catch``` 结构 ： 一旦发生错误，程序就中止执行了。JavaScript 提供了 ```try...catch``` 结构，允许对错误进行处理，选择是否往下执行
    - ```finally``` 代码块： ```try...catch``` 结构允许在最后添加一个finally代码块，表示不管是否出现错误，都必需在最后运行的语句

- [Object 对象](https://wangdoc.com/javascript/stdlib/object.html)
    - toString() 的应用：判断数据类型 
        - 由于实例对象可能会自定义 toString 方法，覆盖掉 Object.prototype.toString 方法，所以为了得到类型字符串，最好直接使用 Object.prototype.toString 方法。通过函数的 call 方法，可以在任意值上调用这个方法，帮助我们判断这个值的类型。
        ```js
        Object.prototype.toString.call(value)

        // Object.prototype.toString可以看出一个值到底是什么类型
        Object.prototype.toString.call(2) // "[object Number]"
        Object.prototype.toString.call('') // "[object String]"
        Object.prototype.toString.call(true) // "[object Boolean]"
        Object.prototype.toString.call(undefined) // "[object Undefined]"
        Object.prototype.toString.call(null) // "[object Null]"
        Object.prototype.toString.call(Math) // "[object Math]"
        Object.prototype.toString.call({}) // "[object Object]"
        Object.prototype.toString.call([]) // "[object Array]"
        ```

- [异步操作](https://wangdoc.com/javascript/async/general.html)
    - **串行执行**：我们可以编写一个流程控制函数，让它来控制异步任务，一个任务完成以后，再执行另一个。这就叫串行执行。

        ```js
        var items = [ 1, 2, 3, 4, 5, 6 ];
        var results = [];

        function async(arg, callback) {
            console.log('参数为 ' + arg +' , 1秒后返回结果');
            setTimeout(function () { callback(arg * 2); }, 1000);
        }

        function final(value) {
            console.log('完成: ', value);
        }

        function series(item) {
            if(item) {
                async( item, function(result) {
                    results.push(result);
                    return series(items.shift());
                });
            } else {
                return final(results[results.length - 1]);
            }
        }

        series(items.shift());
        ```
        - 上面代码中，函数series就是串行函数，它会依次执行异步任务，所有任务都完成后，才会执行final函数。items数组保存每一个异步任务的参数，results数组保存每一个异步任务的运行结果。
        - 注意，上面的写法需要六秒，才能完成整个脚本。

    - **并行执行**：流程控制函数也可以是并行执行，即所有异步任务同时执行，等到全部完成以后，才执行final函数。


        ```js
        var items = [ 1, 2, 3, 4, 5, 6 ];
        var results = [];

        function async(arg, callback) {
            console.log('参数为 ' + arg +' , 1秒后返回结果');
            setTimeout(function () { callback(arg * 2); }, 1000);
        }

        function final(value) {
            console.log('完成: ', value);
        }

        items.forEach(function(item) {
            async(item, function(result){
                results.push(result);
                if(results.length === items.length) {
                    final(results[results.length - 1]);
                }
            })
        });
        ```
        - 上面代码中，forEach方法会同时发起六个异步任务，等到它们全部完成以后，才会执行final函数。
        - 相比而言，上面的写法只要一秒，就能完成整个脚本。这就是说，并行执行的效率较高，比起串行执行一次只能执行一个任务，较为节约时间。但是问题在于如果并行的任务较多，很容易耗尽系统资源，拖慢运行速度。因此有了第三种流程控制方式。
    - **并行与串行的结合**：就是设置一个门槛，每次最多只能并行执行n个异步任务，这样就避免了过分占用系统资源。
        ```js
        var items = [ 1, 2, 3, 4, 5, 6 ];
        var results = [];
        var running = 0;
        var limit = 2;

        function async(arg, callback) {
            console.log('参数为 ' + arg +' , 1秒后返回结果');
            setTimeout(function () { callback(arg * 2); }, 1000);
        }

        function final(value) {
            console.log('完成: ', value);
        }

        function launcher() {
            while(running < limit && items.length > 0) {
                var item = items.shift();
                async(item, function(result) {
                    results.push(result);
                    running--;
                    if(items.length > 0) {
                        launcher();
                    } else if(running == 0) {
                        final(results);
                    }
                });
                running++;
            }
        }

        launcher();
        ```
        - 上面代码中，最多只能同时运行两个异步任务。变量running记录当前正在运行的任务数，只要低于门槛值，就再启动一个新的任务，如果等于0，就表示所有任务都执行完了，这时就执行final函数。
        - 这段代码需要三秒完成整个脚本，处在串行执行和并行执行之间。通过调节limit变量，达到效率和资源的最佳平衡。
    - 定时器
        - setTimeout
            - 第三个参数以及之后的参数，会被用于回调函数的参数
                ```js
                setTimeout(function (a,b) {
                    console.log(a + b);
                }, 1000, 1, 1);
                ```
            - 还有一个需要注意的地方，如果回调函数是对象的方法，那么setTimeout使得方法内部的this关键字指向全局环境，而不是定义时所在的那个对象
                ```js
                var x = 1;
                var obj = {
                    x: 2,
                    y: function () {
                        console.log(this.x);
                    }
                };

                setTimeout(obj.y, 1000) // 1

                // 为了防止出现这个问题，一种解决方法是将obj.y放入一个函数
                setTimeout(function () {
                    obj.y();
                }, 1000);
                // 2

                // 另一种解决方法是，使用bind方法，将obj.y这个方法绑定在obj上面
                setTimeout(obj.y.bind(obj), 1000);
                // 2
                ```
        - 
        - [防抖和节流](https://www.jianshu.com/p/c8b86b09daf0)
            - 防抖（debounce）所谓防抖，就是指触发事件后在 **n 秒内函数只能执行一次**，如果在 n 秒内又触发了事件，则会重新计算函数执行时间
            ```js
            function debounce(func, wait) {
                let timeout;
                return function () {
                    let context = this;
                    let args = arguments;

                    if (timeout) clearTimeout(timeout);
                    
                    timeout = setTimeout(() => {
                        func.apply(context, args)
                    }, wait);
                }
            }

            content.onmousemove = debounce(count,1000);
            ```
            - 节流（throttle）所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数
            ```js
            function throttle(func, wait) {
                let previous = 0;
                return function() {
                    let now = Date.now();
                    let context = this;
                    let args = arguments;
                    if (now - previous > wait) {
                        func.apply(context, args);
                        previous = now;
                    }
                }
            }
            content.onmousemove = throttle(count,1000);
            ```



## 熟能生巧

> 多次练习，到熟练为止

- 【vue】练习 $emit 的用法
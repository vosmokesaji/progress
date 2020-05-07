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



## 熟能生巧

> 多次练习，到熟练为止

- 【vue】练习 $emit 的用法
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





## 熟能生巧

> 多次练习，到熟练为止

- 【vue】练习 $emit 的用法
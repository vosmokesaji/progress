# Vue 笔记

## 基础认识

### 生命周期
- 生命周期函数不能用箭头函数，因为箭头函数没有 this


### 模板语法
- 文本插值： 双大括号
    - ```v-once``` 指令：数据改变时，有该指令节点的值不会更新
- ```v-html``` 指令
- ```v-bind```
- [使用 js 表达式](https://cn.vuejs.org/v2/guide/syntax.html#%E4%BD%BF%E7%94%A8-JavaScript-%E8%A1%A8%E8%BE%BE%E5%BC%8F)

- [指令的 . 修饰符](https://cn.vuejs.org/v2/guide/syntax.html#%E4%BF%AE%E9%A5%B0%E7%AC%A6)


### 计算属性和侦听器
- **计算属性是基于它们的响应式依赖进行缓存的**。只在相关响应式依赖发生改变时它们才会重新求值。这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。
- 计算属性 `computed` 可以使用 `setter`
    ```js
    computed: {
        fullName: {
            // getter
            get: function () {
                return this.firstName + ' ' + this.lastName
            },
            // setter
            set: function (newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    }
    ```
- 侦听器 `watch` 
    - 当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。


### class 和 style 绑定

- class
    - 对象语法： `key` 作为类名， `value` 为 `true` 时，应用这个类名； `value` 为 `false` 时，不应用这个类名。
        - 可以使用**计算属性**（很强大） [link](https://cn.vuejs.org/v2/guide/class-and-style.html)
    - 数组语法： 数组项作为类名
    - 在组件上使用 class 时，会应用到组件的根元素上
- style 绑定
    - 


### 列表渲染
- ```v-for``` 不仅可以遍历数组，还可以遍历对象的 ```value ,key```












# Vue 源码剖析

## 目标
- 调试环境搭建
- 理顺 vue 源码学习整体流程
- 数据响应式


## Vue 源码调试环境搭建

### 获取 Vue
```shell
git clone https://github.com/vuejs/vue.git
```
- 当前版本号：2.6.10
    - 怎么看版本号？ ```package.json``` 文件中有 ```version``` 
- 克隆到本地之后会有很多分支，想看其他的分支你可以随便切

### 测试环境
- 克隆之后，安装依赖
    ```shell
    npm i
    ```
- 安装 rollup 打包工具
    ```shell
    npm i rollup -g
    ```
- 修改一下 dev 脚本 ，添加 ```--sourcemap``` 选项， 目的：方便浏览器调试
    ```
    "dev": "rollup -w -c scripts/config.js --sourcemap --environment TARGET:web-full-dev",
    ```
- 改完之后就可以尝试打包了
    ```shell
    npm run dev
    ```
    - 中途只要生成 覆盖了 vue.js 就可以 ```control + C``` 中断了，不需要监测修改
- 打包成功后，会生成 vue.js 还会生成 map 文件
- **创建测试文件，引入 vue.js** ：在 examples 目录下 新建 test 目录 ，test 目录下新建 ```01-test.html``` 引入 dist 下的 vue.js 就可以调试了


### 文件夹结构
- 你应该关注的目录
    - ```dist``` 输出的版本说明
        - 带 common ， cjs 支持 webpack1 ， browserfiry
        - esm ， 支持 webpack2+
        - umd ， 兼容 cjs 和 amd
        - runtime ， 仅包含运行时，没有编译器 (cmd?)
        - 你看源码应该关注 umd 也就是 vue.js 这个版本
    - ```examples``` 中有一些例子，我们写测试程序也可以在这里边写，去调试
    - ```flow```  都是一些类型说明
    - ```packages``` 独立于 Vue 核心的模块，比如服务端渲染、 weex 等
    - ```scripts``` 打包脚本
    - ```src``` 最重要的 源码目录
        - ```compiler``` 编译器
        - ```core``` vue 核心
        - ```platforms``` 平台测试的代码，两个平台 web weex
        - ```server``` 服务端渲染
        - ```sfc``` 单文件解析器
        - ```shared``` 公共的帮助代码
    - ```types``` 给 typescript 写的一套类型说明



## 探寻入口文件
- 从 package.json 中入手
    ```
    "dev": "rollup -w -c scripts/config.js --sourcemap --environment TARGET:web-full-dev",
    ```
- 根据这个文件 ：```scripts/config.js``` 中的 这个配置 ： ```web-full-dev``` ，很容易找到 ```entry```
    ```
    entry: resolve('web/entry-runtime-with-compiler.js'),
    ```
- ```'web/entry-runtime-with-compiler.js'``` 是啥？
    - 定位到 ```resolve``` 这个方法就知道是怎么来的了
- 就能找到入口文件 ```src/platforms/web/entry-runtime-with-compiler.js```


## vue 初始化流程分析

### 入口文件 src/platforms/web/entry-runtime-with-compiler.js

- ```lin:17``` 扩展了 $mount 方法， （可以理解为针对 web 平台的个性化扩充）
- ```line:32``` 处理 template 和 el ， ```line:34``` 没有 render 时才考虑 template 和 el  
    - 优先级： ```render > template > el``` 
- ```line:59``` 编译，将 template 字符串转换为 ```render 函数``` 
- 结论：**不管用 template 还是 el 最终都会变成 render 函数，挂载到 options 中**

### Vue 的构造函数从哪里来的呀？
- ```import Vue from './runtime/index'``` 找到文件 ```src/platforms/web/runtime/index.js``` 做了什么事？
    - 实现了 ```__patch__``` 方法 
    - 定义了 ```$mount``` 方法， 执行挂载 ```mountComponent(this, el, hydrating)```
- ```import Vue from 'core/index'``` 找到文件 ```src/core/index.js``` 做了什么事？ 
    - ```initGlobalAPI(Vue)``` 定义全局API ， 追一下就能找到：```src/core/global-api/index.js```
        ```js
        Vue.set = set
        Vue.delete = del
        Vue.nextTick = nextTick 
        initUse(Vue)
        initMixin(Vue)
        initExtend(Vue)
        initAssetRegisters(Vue)
        ```
        - 等等...
- ```import Vue from './instance/index'``` 找到文件 ```src/core/instance/index.js``` 中， 构造函数的定义点
    ```js
    function Vue (options) {
        // 初始化
        this._init(options)
    }

    initMixin(Vue)      // 实现了 _init()
    stateMixin(Vue)     // $data,$props,$set,$delete,$watch  等组件状态相关的方法
    eventsMixin(Vue)    // $on,$emit,$once,$off 等事件相关的方法
    lifecycleMixin(Vue) // _update, $forceupdate, $destory  等生命周期相关的方法
    renderMixin(Vue)    // $nextTick, _render 渲染相关的方法
    ```

- ```src/core/instance/init.js``` 初始化函数的实现
    ```js
    vm._self = vm
    initLifecycle(vm)       // 初始化 $parent,$root,$children,$refs
    initEvents(vm)          // 处理父组件传递的监听器
    initRender(vm)          // $slots, $scopedSlots, _c(), $createElement()
    callHook(vm, 'beforeCreate')
    initInjections(vm) // 获取注入数据
    initState(vm)       // 初始化组件中 props、methods、data、computed、watch
    initProvide(vm) // 提供数据注入
    callHook(vm, 'created')
    ```

## 数据响应化流程分析

### 数据响应式

- 响应式的入口点 ```src/core/instance/state.js```
    - 数据初始化
    - initData() ： 判断重复，调用 observe
    - observe() ： 返回一个 Observer 对象的实例
- Observer ```src/core/observer/index.js``` 
    - 判断数据对象的类型，做相应的处理
    - ```defineReactive``` ： 给 data 中每一个 key 定义响应化（定义数据的劫持）
- Dep ```src/core/observer/dep.js```
    - 维护和管理若干 wacher
- Watcher ```src/core/observer/watcher.js```
    - 


### 数组响应化原理
- 看数组的处理要去 Observer ```src/core/observer/index.js``` 找起
- 数组的响应化处理 ```src/core/observer/array.js```
    - 数组不能用索引 否则不能响应化
    - 七君子：  'push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'






# Vue Cli
## 




# vue 知识查漏补缺 看文档
- watch
- computed 计算属性
- v-once
- v-pre
- v-cloak


# vue 周边

## 在 Vue2 中使用 ts 
- [ts：vue2项目中使用typescript](https://blog.csdn.net/weixin_43972437/article/details/106431093) ， 需要 3 样东西
    - vue-class-component 可以把组件写成 class 的模式，自定义装饰器，路由钩子
    - vue-property-decorator 提供这些装饰器
    - vuex-class 提供 class 组件的 vuex 的支持
- [vue-property-decorator用法](https://www.jianshu.com/p/d8ed3aa76e9b)
    - 有说 data 该怎么写
        - 官方文档： [初始数据可声明为类的属性](https://class-component.vuejs.org/guide/class-component.html#data)
        - 如果初始值未定义（undefined），类属性将不会被反应，这意味着不会检测到属性的更改
        - 为了避免这种情况，你可以使用空值或者数据钩子来代替    
## vue-property-decorator 
- [文档](https://www.npmjs.com/package/vue-property-decorator)
- 依赖 [ vue-class-component](https://github.com/vuejs/vue-class-component)

## VueClassComponent 笔记
<!-- 23ri -->
### VueClassComponent ： 用 class 的方式书写 vue 组件

- `@component` 修饰器 使您的类成为 Vue 组件:
```vue
<template>
  <div>
    <button v-on:click="decrement">-</button>
    {{ count }}
    <button v-on:click="increment">+</button>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

// Define the component in class-style
@Component
export default class Counter extends Vue {
  // Class properties will be component data
  count = 0

  // Methods will be component methods
  increment() {
    this.count++
  }

  decrement() {
    this.count--
  }
}
</script>
```
1. vue 组件的初始数据可以声明为类属性

    ```vue
    <template>
        <div>{{ message }}</div>
    </template>

    <script>
        import Vue from 'vue'
        import Component from 'vue-class-component'

        @Component
        export default class HelloWorld extends Vue {
            // Declared as component data
            message = 'Hello World!'
        }
    </script>
    ```
    - 注意，如果初始值为 `undefined` ，类属性将不会是响应式的
        ```js
        import Vue from 'vue'
        import Component from 'vue-class-component'

        @Component
        export default class HelloWorld extends Vue {
            // `message` will not be reactive value
            message = undefined
        }
        ```
    - 可以使用 `null` 或者 `data` 钩子函数来代替

        ```js
        import Vue from 'vue'
        import Component from 'vue-class-component'

        @Component
        export default class HelloWorld extends Vue {
            // `message` will be reactive with `null` value
            message = null

            // See Hooks section for details about `data` hook inside class.
            data() {
                return {
                // `hello` will be reactive as it is declared via `data` hook.
                hello: undefined
                }
            }
        }
        ```
    
2. 组件 `methods` 方法可以直接声明为类原型方法

```vue
<template>
  <button v-on:click="hello">Click</button>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class HelloWorld extends Vue {
  // Declared as component method
  hello() {
    console.log('Hello World!')
  }
}
</script>
```
3. 计算属性 `computed` 可以声明为类属性 `getter/setter`

```vue
<template>
  <input v-model="name">
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class HelloWorld extends Vue {
  firstName = 'John'
  lastName = 'Doe'

  // Declared as computed property getter
  get name() {
    return this.firstName + ' ' + this.lastName
  }

  // Declared as computed property setter
  set name(value) {
    const splitted = value.split(' ')
    this.firstName = splitted[0]
    this.lastName = splitted[1] || ''
  }
}
</script>
```

4. `Data` 、 `render` 和所有 Vue `生命周期钩子` 也可以直接声明为类原型方法，但不能在实例本身上调用它们。*在声明自定义方法时，应该避免使用这些保留名*。
```js
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class HelloWorld extends Vue {
  // Declare mounted lifecycle hook
  mounted() {
    console.log('mounted')
  }

  // Declare render function
  render() {
    return <div>Hello World!</div>
  }
}
```
5. 对于所有其他选项，将它们传递给 修饰器 函数
```vue
<template>
  <OtherComponent />
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import OtherComponent from './OtherComponent.vue'

@Component({
  // Specify `components` option.
  // See Vue.js docs for all available options:
  // https://vuejs.org/v2/api/#Options-Data
  components: {
    OtherComponent
  }
})
export default class HelloWorld extends Vue {}
</script>
```

- [注意事项](https://class-component.vuejs.org/guide/caveats.html#this-value-in-property-initializer)
    - 方法不要使用 箭头函数
    - 不要使用 constructor ，而是使用 created 等生命周期函数去初始化
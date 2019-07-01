# 2019年

## 7月

### 1日
- 在 mac 的命令行输入 ```say xxx``` ，它会读出来。
> 吃老本是建立在时代停止发展的前提下的。——imWEB课老师。
- 早上上班路上听歌的意识流，创建一个动次打次的歌单，可以用这个跟歌单做什么事呢？以下是听的歌。对了，通过相似的歌曲找到类似的最爱，嗯， love & share ，不是大爱我不说。
    - [Salt -- Ava Max](https://music.163.com/song?id=1299557938&userid=118059293)
    - [Ain't Nothing Like It -- KLYMVX](https://music.163.com/song?id=1348835834&userid=118059293)

- **不是大爱我不说**的节目可以扩展到其他的领域。



## 6月


### 29日

1. 遇到一个问题：

    ```javascript
    function F() {}
    function O() {}

    O.prototype = new F();
    var obj = new O();

    console.log(obj instanceof O); // true
    console.log(obj instanceof F); // true
    console.log(obj.__proto__ === O.prototype); // true
    console.log(obj.__proto__.__proto__ === F.prototype); // true

    // 这个我懂，但是稍微调整了一下代码顺序，为啥输出全是 false
    // prototype 的改写不是会应用到所有的实例吗？，为什么输出结果会变成 false

    function F() {}
    function O() {}

    var obj = new O();
    O.prototype = new F();

    console.log(obj instanceof O); // false
    console.log(obj instanceof F); // false
    console.log(obj.__proto__ === O.prototype); // false
    console.log(obj.__proto__.__proto__ === F.prototype); // false
    ```

2. 说一下你对 ```generator``` 的了解
3. ```flex-grow``` 和 ```flex-shrink``` 属性有什么用？
4. 说一下 ```macrotask``` 和 ```microtask``` 
5. ```Http```请求中的 ```keep-alive``` 有了解吗
6. ```React``` 中的 ```controlled component``` 和 ```uncontrolled component``` 区别（受控组件和不受控组件）
7. 了解过 ```react-router``` 内部实现机制吗
8. 数组扁平化处理：实现一个 ```flatten``` 方法，使得输入一个数组，该数组里面的元素也可以是数组，该方法会输出一个扁平化的数组
9. 从输入 ```URL``` 到页面加载发生了什么？
10. 刚刚你说到过缓存，说一下缓存相关的知识吧？
11. 请描述一下 ```DNS``` 解析的具体过程？
12. ```TCP``` 是如何发起连接和关闭连接的？
13. 你知道哪些状态码？
14. 刚刚你说的整个过程中，有哪些优化手段可以优化提高网页响应速度？
15. 5点15分，时钟和分钟的夹角？
16. 8个外表一样的小球 其中7个球重量相同 1个球为 ```异常球``` 可能重量比较重也可能比较轻 利用天平称重至少多少次可以确保找出这个 ```异常球``` ，并需要知道到底是轻了还是重了。



### 26日

1. ```Promise``` 对象
    - ```Promise``` 有三种状态
        - ```pending``` - 进行中，或者等待中，表示还没有得到结果
        - ```fulfilled``` - 已成功，在异步操作成功时调用，并将结果作为参数传递出去。
        - ```rejected``` - 已失败。在异步操作失败时调用，并将报出的错误作为参数传递出去。

        > 从基本用法的例子中我们看到Promise构造函数的参数是 ```resolve``` 和 ```reject``` ，并不是三种状态中的 ```fulfilled``` 和 ```rejected``` ，原因就是： ```resolved``` 表示的是已结束（已定型），它包含 ```fullfilled``` 和 ```rejected``` 两种状态，但使用中，我们默认的将 ```resolved``` 当做 ```fulfilled``` （成功）使用。
    - ```Promise``` 对象的状态改变，只有两种可能：从 ```pending``` 变为 ```fulfilled``` 和从 ```pending``` 变为 ```rejected``` 。
    - 基本 ```API``` 
        1. ```.then()``` 
            > 语法 ```Promise.prototype.then( onFulfilled, onRejected )```
        2. ```.catch()``` ，抛出异常
            > 语法 ```Promise.prototype.catch( onRejected )```

            ```javascript
            var promise = new Promise(function(resolve, reject)){
                // some code
            }

            promise.then(function(data) {
                console.log('success');
            }, function(error) {
                console.log('error', error);
            });

            // 等价于
            promise.then(function(data){
                console.log('success');
            }).catch(function(error) {
                console.log('error', error);
            });
            ```
        3. ```.all()``` - ```Promise``` 中的“**逻辑与**”，同时开始，并行执行
            > 语法 ```promise.all( iterable )```

            ```javascript
            var p = Promise.all([p1, p2, p3]);
            ```
            - 接收一个数组（或具有 ```Iterator``` 接口）作参数
            -  ```p1、p2、p3``` 均为 ```promise``` 实例，如果不是一个 ```promise``` ，该项会被用 ```Promise.resolve``` 转换为一个 ```promise```
            - 当 ```p1, p2, p3``` 状态都变为 ```fulfilled``` ， ```p``` 的状态才会变为 ```fulfilled``` ，并将三个 ```promise``` 返回的结果，按参数的顺序（而不是 ```resolved``` 的顺序）存入数组，传给 ```p``` 的回调函数

            ```javascript
            var p1 = new Promise(function(resolve, reject) {
                setTimeout(resolve, 3000, "first");
            });
            var p2 = new Promise(function(resolve, reject) {
                resolve("second");
            });
            var p3 = new Promise(function(resolve, reject) {
                setTimeout(resolve, 1000, "third");
            });

            Promise.all([p1, p2, p3]).then(function(values) {
                console.log(values);
            });
            
            // 约3秒后 输出
            // ["first", "second", "third"]
            ```
            - 当 ```p1, p2, p3``` 其中之一状态变为 ```rejected``` ， ```p``` 的状态也会变为 ```rejected``` ，并把第一个被 ```reject``` 的 promise 的返回值，立即触发并传给 ```p``` 的回调函数
       
            ```javascript
            // 将上例中的p2适当修改如下
            var p2 = new Promise(function(resolve, reject) {
                resolve(x);
            });
            ```
            
            - 这时，p2会抛出错误，立即传给Promise.all()，结束执行。

        4. ```.race()``` - 竞速执行， ```Promise``` 中“**逻辑或**”，先结束的传值给 ```then```
            > 语法： ```Promise.race( iterable )```
            - ```Promise.race``` 方法同样接受一个数组（或具有Iterator接口）作参数
            - 当 ```p1, p2, p3``` 中有一个实例的状态发生改变（变为 ```fulfilled``` 或 ```rejected``` ）， p 的状态就跟着改变。并把第一个改变状态的 ```promise``` 的返回值，传给p的回调函数。

            ```javascript
            // 执行resolve
            var p1 = new Promise(function(resolve, reject) { 
                setTimeout(reject, 500, "one"); 
            });
            var p2 = new Promise(function(resolve, reject) { 
                setTimeout(resolve, 100, "two"); 
            });

            Promise.race([p1, p2]).then(function(value) {
                console.log('resolve', value); 
            }, function(error) {
                //not called
                console.log('reject', error); 
            });
            // 输出
            // resolve two

            // 执行reject
            var p3 = new Promise(function(resolve, reject) { 
                setTimeout(resolve, 500, "three");
            });
            var p4 = new Promise(function(resolve, reject) { 
                setTimeout(reject, 100, "four"); 
            });

            Promise.race([p3, p4]).then(function(value) {
                //not called
                console.log('resolve', value);              
            }, function(error) {
                console.log('reject', error); 
            });
            // 输出
            // reject four
            ```
        5. ```.resolve()``` - 立即执行 ```Promise-resolve```
            > 语法： 
            > 1. ```Promise.resolve(value);``` 
            > 2. ```Promise.resolve(promise);``` 
            > 3. ```Promise.resolve(thenable);```
            - 可以看做 ```new Promise()``` 的快捷方式

            ```javascript
            new Promise(function (resolve) {
                resolve('Success');
            });
            // 等同于
            Promise.resolve('Success');
            ```




        ```javascript

        ```

        ```javascript

        ```

        ```javascript

        ```

### 25日

#### 圈外lessons2：四大要素决定了你的市场价值
- 冰山模型**越往下**的要素，**越难培养、越难发现**，也正因如此，相对也**越能成为竞争优势**
- 冰山下的要素会影响冰山上的要素
    - 举例来说，一个人的知识储备有多少，跟ta的学习能力、动机等等都非常相关。如果你的学习和思考能力更强、并以追求真理作为价值观，知识储备就会更高
- 冰山**底层**的因素加起来，差不多决定了一个人的**70%**
- 把时间投入在不同的要素上，会有什么结果
    1. 投入到知识：单纯的知识储备，如果不能结合**思维能力**去解决一些具体问题，是很难提升你的市场价值的
    2. 投入到技能：技能的定价如何？天花板在哪里呢？取决于该技能的**稀缺性**
        - 技能在稀缺的时期很值钱，一旦**行业变动**、人才供给增多，市场价值就会下跌，**不得不学习新的技能**
    3. 投入到能力：有一些岗位，对技能没有特殊要求，看起来好像门槛不高，但薪资天花板却很高，而且薪资范围很宽，例如互联网运营、产品经理、项目经理、还有大多数的管理岗位，这些岗位也被称为是能力导向型岗位。**能力导向型岗位转行是比较容易的**
    4. 投入到冰山低层的自我发现：如果我们对自己能有一个清晰的**认识**，然后**找到**跟这些要素相**匹配的工作**，其实也能大大提升我们的市场价值
- 想要提升自己的市场价值，把大多数时间花在提升能力和认识自己冰山底层要素上面，是最好的选择
    - 大多数人是怎么做的呢？
        - 每天打开各种**学习**产品、不断学很多**碎片化知识**
        - 练习一些并**不稀缺**的技能、考各种几个月就能拿下来的证
        - 最后收入还是上不去，反而会觉得很**挫败**。
    - 为什么我们大多数人会做出这样的选择呢？
        - 知识和技能的学习最容易：**人们总是倾向于做容易的事情，而不是正确的事情**
        - 受限于目前岗位的定位：
            - 一些岗位的性质本身是**技能导向型，能力要求低**
            - 比如只要表格做的越快越好，流程越熟练越好
            - 而人都是有**惰性**的
            - 这种情况下，也就**没有动力**提升目前岗位不需要，但更有价值的能力了。
            - so：**你选的不是一份工作，而是一个天花板**
        - 没有看清工作的本质
            - 很多人以为值钱的是知识和经验，但并非如此
            - 任何工作都是在解决问题
            - 一家公司也是在解决某类用户的问题
            - 所以你单有一个知识就是没用的，你会背很多营销理论，但没法帮公司宣传和卖出更多产品，就是没价值的
- 总结：
    - **知识**容易获取跟习得，如果不能用它**解决问题**，几乎就没什么竞争力；
    - **技能**有进入门槛，其市场价值取决于稀缺程度，但**长期**来说，所有技能都会走向供需平衡，**高收入不可持续**；
    - **能力**可迁移，并且对知识和技能也有很大促进，**值得我们多投入**；
    - 而每个人的**性格、动机和价值观**不同，所以做不同的工作，也会有产出的不同。
- 总之来说，我们的时间应该多投入在后两者上面，但现实是大多数人都在提升前两者。**我们的时间，永远应该花在正确的事情上，而不是容易的事情上**。

> 思考：
> 1. 程序员是技能型的，那如何提升能力呢？程序员的软技能有哪些？



### 24日
- 马太效应：Matthew Effect ，指强者愈强、弱者愈弱的现象


### 21日

1. 圈外lessons1：一个模型，帮你找到真正热爱的工作
    - 冰山模型：
        - 冰山模型是美国著名心理学家麦克利兰提出来的，它全面地描述了一个人的个体素质要素，也就是说，**你跟一个岗位是不是匹配、匹配程度如何、市场薪资值多少，都是这个模型可以解释的，几乎所有大公司都会用它来进行人才招聘和培养。**

    ![冰山模型](./images/iceberg-model.jpg)

    - 知识容易在后天习得，性格特质动机价值观这些隐形要素很难后天改变
    - 搞明白“我应该选择什么样的工作”，比“我应该如何在别人认为的好工作里面成功”，要重要得多
    - 掌握一定数量的思维模型，能够解决这个世界上90%的问题。    

    > 思考：
    > 1. 在招聘中，如何通过冰山模型的各个要素考察面试者；对应的：面试者在面试中如何通过冰山模型向面试官示自己的优点？
    > 2. 通过冰山模型分析自己


## 5月


# 2017年

## 6月


### 12日


单词： doodle （有两种含义，一种是“涂鸦；漫不经心地画画”，另一种是“闲荡，打发时间”。）

当前提到Doodle，更多的是指Google Doodle，即Google的标志Logo的创意

[Google2016万圣节Doodle](https://www.google.com/doodles/halloween-2016)



### 9日

echarts.getDataURL 中可以设置图片的背景色



### 8日



X-UA-Compatible是自从IE8新加的一个设置，对于IE8以下的浏览器是不识别的。 通过在meta中设置X-UA-Compatible的值，可以指定网页的兼容性模式设置。

在网页中指定的模式优先权高于服务器中（ 通过HTTP Header ）所指定的模式。


```html

<meta http-equiv="X-UA-Compatible" content="IE=7">  
<!-- 以上代码告诉IE浏览器，无论是否用DTD声明文档标准，IE8/9都会以IE7引擎来渲染页面。 -->

<meta http-equiv="X-UA-Compatible" content="IE=8">  
<!-- 以上代码告诉IE浏览器，IE8/9都会以IE8引擎来渲染页面。 -->

<meta http-equiv="X-UA-Compatible" content="IE=edge">  
<!-- 以上代码告诉IE浏览器，IE8/9及以后的版本都会以最高版本IE来渲染页面。 -->

<meta http-equiv="X-UA-Compatible" content="IE=7,IE=9">  
<meta http-equiv="X-UA-Compatible" content="IE=7,9">  
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
<!-- 以上代码IE=edge告诉IE使用最新的引擎渲染网页，chrome=1则可以激活Chrome Frame. -->

```









## 4月

### 15日

- ionic 开发环境安装
	- Node.js
	- Ionic2
	- Cordova
	- JDK
	- Andorid SDK


### 13日

- 基本JPEG(Baseline JPEG)和渐进JPEG(Progressive JPEG)
	- photoshop 生成 jpeg 图片时，将连续打钩即可生成Progressive JPEG。

![Baseline_JPEG](images/Baseline_JPEG.gif)
![Progressive_JPEG](images/Progressive_JPEG.gif)


- JDK 是啥？
	- Java Development Kit (JDK) 是太阳微系统针对Java开发人员发布的免费软件开发工具包(SDK，Software development kit)。JDK 是整个Java的核心，包括了Java运行环境、Java工具和Java基础类库。2006年太阳微系统宣布将发布基于GPL协议的开源JDK，使JDK成为自由软件。
- 配置JDK：
	- 如：jdk安装在“D:\Program Files\java\jdk1.6.0_10”
	- 第一步：新建“java_home”值，输入“D:\Program Files\java\jdk1.6.0_10”；
	- 第二步：新建“classpath”值，输入“.;%java_home%\lib”；
	- 第三步：在path中增加“%java_home%\bin”；
	- 备注：配置环境变量在“计算机”右击“属性”，之后选择“高级环境变量”，在选择“环境变量”即可。


### 11日

- 数据显示 Angular 2 比Angular 1 快5到10倍
- CLI（command-line interface，命令行界面）
- UWP应用 是啥？
	- uwp就是通用应用的意思。可以在电脑端，手机端，或其他设备通用。不用分别为不同的平台设计不同的软件。既一个软件就可以通吃。这估计现在是win10系统的一个软件发展趋势了。不管是开发者，还是使用者，都省事。
- [VS Code](https://code.visualstudio.com/) 编辑器  强大的智能感知，自定义的类都可以哦，真的有点开发强类型语言的感觉啊



- 使用cnpm（不造为啥 直接用 npm 切国内淘宝镜像 有时候安装会报错）

```shell
npm install -g cnpm --registry=http://registry.npm.taobao.org
```

- 管理 node 版本的工具 ，首先安装 n 模块

```shell
npm install -g n
```

升级 node 到最新的稳定版

```shell
n stable
```

so easy 也可以跟版本号

```shell
n v0.10.26
```



### 10日

css中的兼容写法不要省略：
栗子：

```css
/* 错误的（这种情况在 Ubuntu 的火狐浏览器下不生效，导致样式） */
.box{
    box-sizing: border-box;
}


/* 正确的 */
.box{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
```

- win10 使用技巧
	- 在记事本第一行打 .LOG 代码，会自动记录你的修改时间（然并卵，我用Git）
	- 系统托盘右键，显示“任务视图”按钮 ，任务视图 可以让你创建多个**虚拟桌面**，快捷键 Win + Alt + 左右键 可以快速切换（不过某个应用在 A 桌面打开的时候，在 B 桌面开启这个应用会回到 A 桌面，在不同桌面开不同的应用才是它的真正用途）
	- 在用户账户（通过运行--netplwiz 可以进入）中可以设置无密码登录
	- Alt Prt Scr，没错！就是比你之前的操作多出一个Alt键。这组快捷键可以将屏幕直接导出成图片，再麻烦的事也是一键搞定。（我可能用的假的win10）
	- 看你的win10吗是不是永久激活 win+R 开启运行 输入   slmgr.vbs -dlv  或者  slmgr.vbs -xpr  即可查看你的win10  是不是永久激活的。


### 8日


- 指令使用中的一个小**坑**

![](images/howtoload_1.png)

![](images/howtoload_2.png)


- 指令内部的 scope 叫做创建独立的作用域
- 指令内部的 controller 是给指令暴露出一组 public 方法，给外部调用的

![](images/superman.png)

- AngularJS 里内置了 Jquerylight 即简化版 Jquery ，是和我们所熟悉的 jquery 语法一模一样的 

- 指令的 controller 和 link 里放什么逻辑？
	- 如果指令 要暴露一些方法给外部调用，就写在 controller 里
	-  如果是用来处理指令内部的事物的（比如给元素绑定事件呀，绑定数据呀），这时候就写在 link 里

- 指令中的 require 表示该指令依赖于哪一个指令（下边的例子表示 strength 这个指令依赖于 superman 指令）

![](images/directive_require.png)

- 有 require 之后我们就可以在 link 函数里写第四个参数 即被依赖指令的 controller 写成 “指令名Ctrl” 的形式。 接下来我们就可以通过 指令名Ctrl.fn 来调用被依赖指令暴露出的方法了。





### 7日

AngularJS 指令（Directive）

自定义指令的配置项

1. restrict (匹配模式)：有 A E M C 四种，推荐使用 A 和 E 这两种模式(以 hello 指令为例)
	- E 作为元素名使用（element）
	- A 作为属性使用（attribute）
	- M 作为注释使用（comment）
		- 做注释的时候要注意 ： directive:hello 前后要各有一个空格，否则angular可能无法解析（这是一个小**坑**）。
	- C 作为类名使用（class）

```html
<hello></hello>
<div hello></div>
<div class="hello"></div>
<!-- directive:hello -->
<div></div>
```


2. template
	- template 可以写模板
	- templateUrl 可以引入独立的HTML文件,其中可以写大块的模板
	- templateCache 可以将模板缓存起来，让多个指令去使用它
![templateCache](images/templateCache.png)

3. replace 与 transclude
	- transclude 允许 指令内部嵌套（非常重要，使指令与指令嵌套的基础）





### 6日

- 啥是环境变量？
 
环境变量（environment variables）一般是指在操作系统中用来指定操作系统运行环境的一些参数，如：临时文件夹位置和系统文件夹位置等。

环境变量是在操作系统中一个具有特定名字的对象，它包含了一个或者多个应用程序所将使用到的信息。例如Windows和DOS操作系统中的path环境变量，当要求系统运行一个程序而没有告诉它程序所在的完整路径时，系统除了在当前目录下面寻找此程序外，还应到path中指定的路径去找。用户通过设置环境变量，来更好的运行进程。

- node-uuid 是啥？

- node n 命令是干嘛用的？

n 是管理node版本的 

[管理 node 版本，选择 nvm 还是 n？](http://web.jobbole.com/84249/)


### 5日

HTTP是一个**无状态协议**。

通俗的说就是，服务器因为每天要接待太多客户了，是个**健忘鬼**，你一挂电话，他就把你的东西全忘光了，把你的东西全丢掉了。你第二次还得再告诉服务器一遍。



## 3月


### 28日

- 测试玩


```javascript

// JavaScript把null、undefined、0、NaN和空字符串''视为false

Boolean(-1)
//true

Boolean(0)
//false

Boolean(null)
//false

Boolean(undefined)
//false

Boolean(NaN)
//false

Boolean("")
//false

Boolean('')
//false

typeof(null)
//"object"

typeof(undefined)
//"undefined"

typeof("")
//"string"

typeof(123)
//"number"

typeof(Date)
//"function"

typeof(window)
//"object"

typeof(elememt)
//"undefined"

typeof(qwe)
//"undefined"

typeof(typeof(qwe))
//"string"

typeof(typeof(123))
//"string"

typeof(typeof(NaN))
//"string"

typeof(NaN)
//"number"

0/0
//NaN

0/9
//0

123/0
//Infinity

1/0
//Infinity
```

### 27日

- dotdotdot.js  多行文本溢出解决方案。

```javascript
dot = require('../plugins/jquery.dotdotdot.min');
$('.info-item-desc,.image-list-title,.image-list-desc').dotdotdot({wrap: 'letter'});
```

- 浏览器通知
	- 原生

    ```javascript
    if(window.Notification && Notification.permission !== "denied") {
        Notification.requestPermission(function(status) {
            var n = new Notification('通知标题', { body: '这里是通知内容！' }); 
        });
    }
    ```
	- 插件 [iNotify.js](http://blog.csdn.net/zhanglong_longlong/article/details/52539302)
        - npm

        ```shell
        npm install title-notify
        ```
        - bower

        ```shell
        bower install inotify
        ```

        - **init**

        ```javascript
        var iNotify = new iNotify().init()
        //推荐下面写法
        var iNotify = new iNotify({
            message: '有消息了。',//标题
            effect: 'flash', // flash | scroll 闪烁还是滚动
            //可选播放声音
            audio:{
                //可以使用数组传多种格式的声音文件
                file: ['msg.mp4','msg.mp3','msg.wav']
                //下面也是可以的哦
                //file: 'msg.mp4'
            },
            //标题闪烁，或者滚动速度
            interval: 1000,
            //可选，默认绿底白字的  Favicon
            updateFavicon:{
                // favicon 字体颜色
                textColor: "#fff",
                //背景颜色，设置背景颜色透明，将值设置为“transparent”
                backgroundColor: "#2F9A00" 
            },
            //可选chrome浏览器通知，默认不填写就是下面的内容
            notification:{
                title:"通知！",//设置标题
                icon:"",//设置图标 icon 默认为 Favicon
                body:'您来了一条新消息'//设置消息内容
            }
        })
        ```


### 24日


- Windows 下的 cmd 中查看当前位置下的文件 用 dir  命令。

- const 声明创建一个只读的常量。这不意味着常量指向的值不可变，而是变量标识符的值只能赋值一次。

    ```javascript
    // 注意: 常量在声明的时候可以使用大小写，但通常情况下会使用全部大写英文。 

    // 定义常量MY_FAV并赋值7
    const MY_FAV = 7;

    // 在 Firefox 和 Chrome 这会失败但不会报错(在 Safari这个赋值会成功)
    MY_FAV = 20;

    // 输出 7
    console.log("my favorite number is: " + MY_FAV);

    // 尝试重新声明会报错 
    const MY_FAV = 20;

    //  MY_FAV 保留给上面的常量，这个操作会失败
    var MY_FAV = 20; 

    // MY_FAV 依旧为7
    console.log("my favorite number is " + MY_FAV);

    // 下面是一个语法错误
    const A = 1; A = 2;

    // 常量要求一个初始值
    const FOO; // SyntaxError: missing = in const declaration

    // 常量可以定义成对象
    const MY_OBJECT = {"key": "value"};

    // 重写对象和上面一样会失败
    MY_OBJECT = {"OTHER_KEY": "value"};

    // 对象属性并不在保护的范围内，下面这个声明会成功执行
    MY_OBJECT.key = "otherValue";
    ```

- npm就是Node的软件包管理器
	- 在项目根目录执行 npm init 命令可以帮你创建 package.json 。注意**项目名不能包含大写字母**
	- 如果用 npm 安装模块的过程中报域名错误的话，请清空缓存 > npm cache clean 或重启计算机即可

- 特别注意：package.json是一个普通json文件，所以不能添加任何注释


- npm安装 gulp 时警告:npm WARN deprecated minimatch@2.0.10: Please update to minimatch 3.0.2 or higher to
	- 解决办法： (update不行)   直接重装 ：

```
npm install -g npm@3
```



### 23日

Gulp

- 全局安装

```shell
npm install --global gulp
```

- 作为项目的开发依赖（devDependencies）安装

```shell
npm install --save-dev gulp
```


### 22日

IPXX防护等级概念

- 防尘部分：0-6共7级
- 防水部分：0-8共9级

	例如： 
	- Xperia Z2的防护等级IP58  
	- 三星Galaxy S5的防护等级IP67




chrome 离线版下载

- 最新稳定版：http...网址...**?standalone=1**
- 最新测试版：http...网址...**?standalone=1&extra=betachannel**
- 最新开发版：http...网址...**?standalone=1&extra=devchannel**



JavaScript


#### 字符串

- 如果字符串内部既包含'又包含"怎么办？可以用转义字符\来标识，比如：

```javascript
'I\'m \"OK\"!';
```

- ASCII字符可以以\x##形式的十六进制表示

```javascript
'\x41'; // 完全等同于 'A'
```

- 还可以用\u####表示一个Unicode字符

```javascript
'\u4e2d\u6587'; // 完全等同于 '中文'
```

- 由于多行字符串用\n写起来比较费事，所以最新的ES6标准新增了一种多行字符串的表示方法，用反引号 ` ... ` 表示


```javascript
`这是一个
多行
字符串`;
```

- 如果有很多变量需要连接，用+号就比较麻烦。ES6新增了一种模板字符串，它会自动替换字符串中的变量

```javascript
var name = '小明';
var age = 20;
var message = `你好, ${name}, 你今年${age}岁了!`;
alert(message);
```

- **需要特别注意的是**: 字符串是不可变的，如果对字符串的某个索引赋值，不会有任何错误，但是，也没有任何效果

```javascript
var s = 'Test';
s[0] = 'X';
alert(s); // s仍然为'Test'
```

#### 数组

- 请注意，直接给Array的length赋一个新的值会导致Array大小的变化

```javascript
var arr = [1, 2, 3];
arr.length; // 3
arr.length = 6;
arr; // arr变为[1, 2, 3, undefined, undefined, undefined]
arr.length = 2;
arr; // arr变为[1, 2]
```

- 请注意，如果通过索引赋值时，索引超过了范围，同样会引起Array大小的变化

```javascript
var arr = [1, 2, 3];
arr[5] = 'x';
arr; // arr变为[1, 2, 3, undefined, undefined, 'x']
```

- indexOf()来搜索一个指定的元素的位置：

```javascript
var arr = [10, 20, '30', 'xyz'];
arr.indexOf(10); // 元素10的索引为0
arr.indexOf(20); // 元素20的索引为1
arr.indexOf(30); // 元素30没有找到，返回-1
arr.indexOf('30'); // 元素'30'的索引为2
```

- slice()就是对应String的substring()版本，它截取Array的部分元素，然后返回一个新的Array
	- slice()的起止参数包括开始索引，不包括结束索引
	- 如果不给slice()传递任何参数，它就会从头到尾截取所有元素。利用这一点，我们可以很容易地复制一个Array

```javascript
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
arr.slice(0, 3); // 从索引0开始，到索引3结束，但不包括索引3: ['A', 'B', 'C']
arr.slice(3); // 从索引3开始到结束: ['D', 'E', 'F', 'G']
var aCopy = arr.slice();
aCopy; // ['A', 'B', 'C', 'D', 'E', 'F', 'G']
aCopy === arr; // false
```

> 写一个判断数组是否相等的方法:

```javascript
var cmpare = function(arr1,arr2){
    if(arr1.length === arr2.length){
        for(var i = 0;i<arr1.length;i ++){
            if(arr1[i] === arr2[i]){
                if(i === (arr1.length - 1)){
                    return true;
                }
            }else{
                return false;
            }
        }
    }else{
        return false;
    }
}
```



- push() 向 Array 的末尾添加若干元素，pop() 则把 Array 的最后一个元素删除掉。如果要往 Array 的头部添加若干元素，使用 unshift() 方法，shift() 方法则把 Array 的第一个元素删掉。
- 添加时的返回值是数组的新长度，删除时的返回值被删除的元素。
- 空数组继续 pop/shift 不会报错，而是返回 undefined 。
- reverse()把整个Array的元素给掉个个，也就是反转
- sort()可以对当前Array进行排序，它会直接修改当前Array的元素位置，直接调用时，按照默认顺序排序
- splice()方法是修改Array的“万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素,返回删除的元素

```javascript
var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
// 从索引2开始删除3个元素,然后再添加两个元素:
arr.splice(2, 3, 'Google', 'Facebook'); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
// 只删除,不添加:
arr.splice(2, 2); // ['Google', 'Facebook']
arr; // ['Microsoft', 'Apple', 'Oracle']
// 只添加,不删除:
arr.splice(2, 0, 'Google', 'Facebook'); // 返回[],因为没有删除任何元素
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
```

- concat()方法把当前的Array和另一个Array连接起来，并返回一个新的Array

```javascript
var arr = ['A', 'B', 'C'];
var added = arr.concat([1, 2, 3]);
added; // ['A', 'B', 'C', 1, 2, 3]
arr; // ['A', 'B', 'C']
```

- join()方法是一个非常实用的方法，它把当前Array的每个元素都用指定的字符串连接起来，然后返回连接后的字符串

#### 对象

- 最后一个键值对不需要在末尾加,，如果加了，有的浏览器（如低版本的IE）将报错

- 访问属性是通过.操作符完成的，但这要求属性名必须是一个有效的变量名。如果属性名包含特殊字符，就必须用''括起来

```javascript
var xiaohong = {
    name: '小红',
    'middle-school': 'No.1 Middle School'
};
xiaohong['middle-school']; // 'No.1 Middle School'
xiaohong['name']; // '小红'
xiaohong.name; // '小红'
```

> 这个例子中，xiaohong 的属性名 middle-school 不是一个有效的变量，就需要用''括起来。访问这个属性也无法使用.操作符，必须用['xxx']来访问（我们在编写JavaScript代码的时候，属性名尽量使用标准的变量名，这样就可以直接通过object.prop的形式访问一个属性了）

- JavaScript规定，访问不存在的属性不报错，而是返回undefined

- JavaScript的对象是动态类型，你可以自由地给一个对象添加或删除属性

```javascript
var xiaoming = {
    name: '小明'
};
xiaoming.age; // undefined
xiaoming.age = 18; // 新增一个age属性
xiaoming.age; // 18
delete xiaoming.age; // 删除age属性
xiaoming.age; // undefined
delete xiaoming['name']; // 删除name属性
xiaoming.name; // undefined
delete xiaoming.school; // 删除一个不存在的school属性也不会报错
```

- 如果我们要检测xiaoming是否拥有某一属性，可以用in操作符：

```javascript
var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};
'name' in xiaoming; // true
'grade' in xiaoming; // false
```

> 不过要小心，如果in判断一个属性存在，这个属性不一定是xiaoming的，它可能是xiaoming继承得到的：

```javascript
'toString' in xiaoming; // true
```

- 因为toString定义在object对象中，而所有对象最终都会在原型链上指向object，所以xiaoming也拥有toString属性。

要判断一个属性是否是xiaoming自身拥有的，而不是继承得到的，可以用 **hasOwnProperty()** 方法：

```javascript
var xiaoming = {
    name: '小明'
};
xiaoming.hasOwnProperty('name'); // true
xiaoming.hasOwnProperty('toString'); // false
```


#### 判断

- 如果语句块只包含一条语句，那么可以省略{}

```javascript
var age = 20;
if (age >= 18)
    alert('adult');
else
    alert('teenager');
```

- 省略{}的危险之处在于，如果后来想添加一些语句，却忘了写{}，就改变了if...else...的语义，所以我们建议永远都要写上{}

- 如果if的条件判断语句结果不是true或 false 怎么办？例如 

```javascript
var s = '123';
if (s.length) { // 条件计算结果为3
    //
}
```
> JavaScript把null、undefined、0、NaN和空字符串''视为false，其他值一概视为true，因此上述代码条件判断的结果是true



#### 循环

- for循环的3个条件都是可以省略的，如果没有退出循环的判断条件，就必须使用break语句退出循环，否则就是死循环

```javascript
var x = 0;
for (;;) { // 将无限循环下去
    if (x > 100) {
        break; // 通过if判断来退出循环
    }
    x ++;
}
```
- for循环的一个变体是for ... in循环，它可以把一个**对象**的所有**属性**依次循环出来
> 请注意，for ... in对Array的循环得到的是String而不是Number

- while循环只有一个判断条件，条件满足，就不断循环，条件不满足时则退出循环。



### 21日

- **AngularJS 四大核心特性**
	- MVC
	- 模块化和依赖注入
	- 双向数据绑定
	- 指令

- Angular 的“遥控器”是Controller。
- **路由**
	- 路由的本质是由地址栏url的不同，为我们展示不同的视图。（这个过程没有和服务器交互）。
	- 只有两个方法： when 和 otherwise
	- URL 中的 # 号是防止浏览器向服务器提交请求的。
	- 我们就可以将不同的视图交给不同的控制器去处理，这样视图之间的职能就分的很清晰。
- angular 自己的 router 是不支持深层次的路由的，可以使用[angular-ui](angular-ui.hithub.io),ui-router 提供了可以深度路由的方式。(导入了ui-router之后就不需要angular自己的router)
- **前端路由**的基本原理
	- 哈希 # 
	- HTML5 中新的 history API
	- 路由的核心是给应用定义“状态”
	- 使用路由机制会影响到应用的整体编码方式（需要预先定义好状态）
	- 要考虑兼容性和“优雅降级”


---
JavaScript

- {...} 是代码块  不需要分号
- 让JavaScript引擎自动加分号 **（意思就是你懒得加分号）** 在某些情况下会改变程序的语义，导致运行结果与期望不一致

- ECMAScript 标准定义了 6 种数据类型:

```
Number
String
Boolean
Null
Undefined
Object
```

- NaN 和 Infinity（无限大）是 Number 类型

```javascript
NaN === NaN; // false
```

唯一能判断NaN的方法是通过isNaN()函数 ：	

```javascript
isNaN(NaN); // true
```

- 要注意浮点数的相等比较：

```javascript
1 / 3 === (1 - 2 / 3); // false
```

这不是JavaScript的设计缺陷。浮点数在运算过程中会产生误差，因为计算机无法精确表示无限循环小数。要比较两个浮点数是否相等，只能计算它们之差的绝对值，看是否小于某个阈值：

```javascript
Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001; // true
```

### 20日

- Stero 是立体声
- Mono 是单声道。

MarkDown 插入图片的语法：

```
![索尼大法好](images/sonydafagood.jpg)
```

![索尼大法好](images/sonydafagood.jpg)

- AngularJS 中的 MVC 是借助 $scope 实现的。
- $rootScope 是控制器之间的桥梁。
- **神奇的 $scope**
	1. $scope 是一个POJO(Plain Old JavaScript Object)
	2. $scope 提供了一些工具方法 $watch()/$apply()   (用来实时监测对象属性的变化的)
	3. $scope 是表达式的执行环境（或者叫作用域）
	4. $scope 是一个树形结构，**与DOM标签平行**
	5. 子 $scope 对象会继承父 $scope 上的**属性和方法**
	6. 每个 Angular 应用只有一个根 $scope 对象（$rootscope，一般位于ng-app上）
	7. $scope 可以传播事件，类似DOM事件，可以向上也可以向下。
	8. $scope 不仅是 MVC 的基础，也是后面实现实现双向数据绑定的基础。 
	9. 可以用 angular.element($0).scope() 进行调试。（可以获得当前元素上的$scope）
	
- **$scope 的生命周期**
	1. Creation （创建）
	2. Watcher registration （注册监控）
	3. Model mutation （监测模型变化）
	4. Mutation observation （观察模型有没有脏）
	5. Scope destruction （销毁scope）

- 监察？   extJS?

### 18日

- grunt 的插件 安装

```shell
npm install grunt-contrib-uglify --save-dev
npm install grunt-contrib-qunit --save-dev
npm install grunt-contrib-concat --save-dev
npm install grunt-contrib-jshint --save-dev
npm install grunt-contrib-watch --save-dev
```

- npm 会把非全局安装的工具 安装到当前目录下的 node_modules 目录下

- 10款工具：

	- Bower           依赖管理工具
	- Sublime         编辑器
	- Protractor      专为Angular定制的测试工具 基于WebDriverJS
	- NodeJS          node
	- http-server     快速创建web服务器
	- Grunt           自动化工具
	- Karma           用来跑测试用例的容器
	- Jasmine         提供了一套语法用来编写测试用例
	- Git             版本控制
	- Chrome          浏览器

- MVC只是手段，终极目标是模块化和复用

- Controller:

- 不要复用Controller；
- 不要在 Controller 中操作DOM；
- 不要在 Controller 中做数据格式化，ng有很好的表单控件
- 不要在 Controller 中做过滤操作。ng有$filter。
- 一般来说，Controller是不会互相调用的。控件之间的交互式通过事件进行的。

### 14日

- npm 换源：

```shell
npm config set registry https://registry.npm.taobao.org
//配置后可通过下面方式来验证是否成功
npm config get registry
```

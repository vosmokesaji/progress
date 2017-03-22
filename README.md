

# 2017年

## 3月

### 22日

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

> 写一个判断数组是否相等的方法

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

- 如果if的条件判断语句结果不是true或false怎么办？例如 

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
- [angular-ui](angular-ui.hithub.io),ui-router 提供了可以深度路由的方式。
- 前端路由的基本原理
	- 哈希 # 
	- HTML5 中新的 history API
	- 路由的核心是给应用定义状态


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

```cmd
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

```
npm config set registry https://registry.npm.taobao.org
//配置后可通过下面方式来验证是否成功
npm config get registry
```
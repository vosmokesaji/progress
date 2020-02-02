
**Dart 语言学习记录**

- [1. Dart 环境安装](#1-dart-%e7%8e%af%e5%a2%83%e5%ae%89%e8%a3%85)
  - [1.1. Dart SDK 安装](#11-dart-sdk-%e5%ae%89%e8%a3%85)
  - [1.2. Dart IDE 安装](#12-dart-ide-%e5%ae%89%e8%a3%85)
  - [1.3. IDEA 插件安装](#13-idea-%e6%8f%92%e4%bb%b6%e5%ae%89%e8%a3%85)
  - [1.4. 示例代码托管](#14-%e7%a4%ba%e4%be%8b%e4%bb%a3%e7%a0%81%e6%89%98%e7%ae%a1)
  - [1.5. 创建项目](#15-%e5%88%9b%e5%bb%ba%e9%a1%b9%e7%9b%ae)
- [2. 数据类型](#2-%e6%95%b0%e6%8d%ae%e7%b1%bb%e5%9e%8b)
  - [2.1. 变量和常量](#21-%e5%8f%98%e9%87%8f%e5%92%8c%e5%b8%b8%e9%87%8f)
    - [2.1.1. 变量](#211-%e5%8f%98%e9%87%8f)
    - [2.1.2. 常量](#212-%e5%b8%b8%e9%87%8f)
  - [2.2. 数据类型](#22-%e6%95%b0%e6%8d%ae%e7%b1%bb%e5%9e%8b)
    - [2.2.1. 数值型 ```Number```](#221-%e6%95%b0%e5%80%bc%e5%9e%8b-number)
    - [2.2.2. 字符串 ```String```](#222-%e5%ad%97%e7%ac%a6%e4%b8%b2-string)
    - [2.2.3. 布尔型 ```Boolean```](#223-%e5%b8%83%e5%b0%94%e5%9e%8b-boolean)
    - [2.2.4. 列表 ```List```](#224-%e5%88%97%e8%a1%a8-list)
    - [2.2.5. 键值对 ```Map```](#225-%e9%94%ae%e5%80%bc%e5%af%b9-map)
    - [2.2.6. 动态类型 ```dynamic```](#226-%e5%8a%a8%e6%80%81%e7%b1%bb%e5%9e%8b-dynamic)
    - [2.2.7. ```Runse、Symbols``` 这两种不常用](#227-runsesymbols-%e8%bf%99%e4%b8%a4%e7%a7%8d%e4%b8%8d%e5%b8%b8%e7%94%a8)
- [3. 运算符](#3-%e8%bf%90%e7%ae%97%e7%ac%a6)
- [4. 控制流](#4-%e6%8e%a7%e5%88%b6%e6%b5%81)
- [5. 方法](#5-%e6%96%b9%e6%b3%95)

# 1. Dart 环境安装

## 1.1. Dart SDK 安装
- [来这里](https://dart.dev/tools/sdk)
- 如果您只开发移动应用，那么您不需要 ```Dart SDK``` ，只需安装 [Flutter](https://flutter.dev/docs/get-started/install) ，它内置 ```Dart SDK```。
- [获取 Dart SDK](https://dart.dev/get-dart)

## 1.2. Dart IDE 安装

可选的 ```IDE``` 有这些，可应根据自己的习惯 or 需求进行选择：

- ```IntelliJ IDEA 、 Android Studio```
- ```VS Code```
- ```Sublime 、 Atom```

## 1.3. IDEA 插件安装

1. IDEA 欢迎页
2. 点击右下角 configure
3. 点击菜单中的 plugin
4. 搜索 ```Dart```
5. 点击 ```Search in repositories```
6. 找到 ```Dart (language)``` 点击安装并重启即可

## 1.4. 示例代码托管

[本课程](https://www.imooc.com/learn/1035)的示例代码托管在[码云](https://gitee.com/LeiYu-Io/Dart-Bisc)

## 1.5. 创建项目

- ```main``` 方法是固定写法  是程序入口
- ```print``` 方法可以在控制台输出内容
- ```dart``` 文件命名小写字母，下滑线分隔单词


<!-- # 2. Dart 基础入门阶段 -->

# 2. 数据类型

## 2.1. 变量和常量

### 2.1.1. 变量

- 使用 ```var``` 声明变量，可赋予不同类型的值
- 未初始化时，默认值为 ```null``` 
- 使用 ```final``` 声明只能赋值一次的变量 

```dart
var a;
print(a);   // null

a = 10;
print(a);   // 10

a = "Hello Dart";
print(a);   // Hello Dart

var b = 20;
print(b);   // 20

final c = 30;
c = 50;     // 报错，c 只能赋值一次
```

### 2.1.2. 常量

- 使用 ```const``` 声明常量
- 使用 ```const``` 声明的必须是编译期常量

```dart
const d = 60;
d = 70;   // 报错，d 的值不能被改变
```

## 2.2. 数据类型

### 2.2.1. 数值型 ```Number```
- 可以使用 ```num``` 赋值，可以赋值整型，也可以赋值浮点型
- 使用 ```int``` 赋值整型，只能赋值整型
- 使用 ```double``` 赋值浮点型，只能赋值浮点型

```dart
num a = 10;
a = 10.5;

int b = 20;
b = 20.5;   // 报错

double c = 10.5;
c = 10;     // 报错
```

- 数值型操作
    - 运算符：```+, - , *, /, ~/, %``` ，注意 ```~/``` 表示除完把结果再取整
    - 常用属性 ```isNaN, isEven, isOdd``` 等 （是否是非数字，是否是偶数、是否是奇数）
    - 常用方法 ```abs(), round(), floor(), ceil(), toInt(), toDouble()``` （取绝对值、四舍五入、不大于它的最大整数、不小于它的最小整数、转为整型、转为浮点型)

```dart
// 前提
num a = 10;
int b = 20;
double c = 10.5;

// 运算
print(b + c);   // 30.5
print(b - c);   // 9.5
print(b * c);   // 210.0
print(b / c);   // 1.9047619047619047
print(b ~/ c);  // 1
print(b % c);   // 9.5

print(0.0 / 0.0);   // NaN
print(b.isEven);    // true
print(b.isOdd);     // false

int d = -100;
print(d.abs());     // 100 

double f = 10.5;
print(f.round());   // 11   （四舍五入）
print(f.floor());   // 10   （不大于它的最大整数）
print(f.ceil());    // 11   （不小于它的最小整数）
print(f.toInt());   // 10   （转为整型）
print(b.toDouble());   // 20.0   （转为浮点型）

// 思考：负数的 round() floor() ceil() toInt() ；整型可以使用 toInt() 吗？浮点型可以使用 toDouble() 吗？
// 关于 数值型 的属性和方法远不止这些，可以通过查看 dart 的源码，了解其他的饿属性和方法，源码中的注释也写得很清楚
```

### 2.2.2. 字符串 ```String```
- 可以使用 单引号、双引号 创建字符串
- 使用 三个单引号 或 三个双引号 创建多行字符串
- 使用 ```r``` 创建原始 ```raw``` 字符串

```dart
String str1 = 'Hello';
String str1 = "Hello";

// 可以通过 三个单引号（或双引号） 定义多行字符串
String str2 = '''Hello
                Dart''';
print(str2);
// Hello
// Dart

// 也可以通过 /n 来换行
String str3 = 'Hello \n Dart';
print(str3);
// Hello
// Dart

// 字符串前加 r 定义的是原始字符串， \n 不会被转义
String str4 = r'Hello \n Dart';
print(str4);
// Hello \n Dart
```

- 字符串操作
    - 运算符：```+, *, ==, []```
    - 插值表达式： ```${sxpression}```
    - 常用属性： ```length, isEmpty, isNotEmpty```
    - 常用方法：```contains(), subString(), startWith(), endWith(), indexOf(), lastIndexOf(), toLowerCase(), toUpperCase(), trim(), trimLeft(), trimRight(), split(), replaceXXX()```

```dart
String str1 = "This is";
String str2 = " Dart!";

print(str1 + str2);     // "This is Dart!"
print(str1 * 3);        // "This isThis isThis is"
print(str1 == str2);    // false
print(str1[0]);         // "T"

// 插值表达式
int a = 1;
int b = 2;
print("a + b = ${a + b}");      // a + b = 3
print("a = ${a}");              // a = 1

// 常用属性
print(str1.length);         // 7
print(str1.isEmpty);        // false
print(str1.isNotEmpty);     // true

// 常用方法
String str3 = "This is my favorite language!";
print(str3.contains("This"));           // true
print(str3.subString(0,3));             // "Thi"
print(str3.startWith("a"));             // false
print(str3.endWith("ge!"));             // true
print(str3.indexOf("This"));            // 0
print(str3.lastIndexOf("la"));          // 8
print(str3.toLowerCase());              // "this is my favorite language!"
print(str3.toUpperCase());              // "THIS IS MY FAVORITE LANGUAGE!"

var list = str3.split(" ");
print(list);                            // ["This", "is", "my", "favorite", "language!"]

print(str3.replaceAll("This", "That")); // "That is my favorite language!"

// 关于 字符串 的属性和方法远不止这些，可以通过查看 dart 的源码，了解其他的饿属性和方法，源码中的注释也写得很清楚
```


### 2.2.3. 布尔型 ```Boolean```
- 只有 ```true``` 和 ```false``` 两种值

```dart
bool boolTrue = true;
bool boolFalse = false;

// 比如 字符串的 isEmpty 方法就是返回 布尔值
print("Hello".isEmpty());       // false
```

### 2.2.4. 列表 ```List```
- 创建 ```List``` （List 和数组是一个概念）
    - 创建 ```List```： ```var list = [1, 2, 3];```
    - 创建不可变的 ```List```： ```var list = const [1, 2, 3];```
    - 构造函数创建： ```var list = new List();```

```dart
var list1 = [1, 2, 3, "Dart", true];
print(list1);                   // [1, 2, 3, "Dart", true]

// 获取 list 的元素：通过方括号内写下标（索引，从0开始）的方式
print(list[3]);                 // "Dart"

// 修改 list 的值
list[1] = "Hello";
print(list1);                   // ["Hello", 2, 3, "Dart", true]

// 不可变的 list
var list2 = const [1, 2, 3];
list2[0] = 3;                   // 报错：Cannot modify an unmodifiable List

var list3 = new List();
```

- ```List``` 的常用操作
    - ```[], length```
    - ```add(), insert()```
    - ```remove(), clear()```
    - ```indexOf(), lastIndexOf()```
    - ```sort(), sublist()```
    - ```shuffle(), asMap(), forEach()```

```dart
var list = ["Hello", "Dart"];

print(list.length);             // 2

list.add("New");
print(list);                    // ["hello", "dart", "New"]

list.insert(1, "Java");
print(list);                    // ["hello", "Java", "dart", "New"]

list.remove("Java");
print(list);                    // ["hello", "dart", "New"]

print(list.indexOf("dart1"));   // -1 

list.sort();
print(list);                    // ["New", "dart", "hello"]

print(list.sublist(1));         // ["dart", "hello"]  (从第二个元素开始截取，到最后一个元素)

// forEach 传入一个方法
list.forEach(print);
// "New"
// "dart"
// "hello"
```

### 2.2.5. 键值对 ```Map```
- 创建 ```Map```
    - 直接创建 ```Map```：```var language = {"first" : "Dart", "second" : "Java"};```
    - 创建不可变的 ```Map``` ：```var language = const {"first" : "Dart", "second" : "Java"};```
    - 构造函数创建：```var language = new Map();```

```dart
// 可以把任意类型的值作为 键和值 
var map1 = {
    "first" : "Dart",
    1 : true,
    true : "2"
};
print(map1);                // {"first" : "Dart", 1 : true, true : "2"}

print(map1["first"]);       // "Dart"
print(map1[true]);          // "2"

map1[1] = false;
print(map1);                // {"first" : "Dart", 1 : false, true : "2"}

var map2 = const {1 : "Dart", 2 : "Java"};
map2[1] = "Python";         // 报错：Cannot modify an unmodifiable Map

var map3 = new Map();
```

- ```Map``` 的常用操作
    - ```[], length```
    - ```isEmpty(), isNotEmpty()``` ??? 是方法还是属性呀？
    - ```keys, values```
    - ```containsKey(), containsValue()```
    - ```remove()```
    - ```forEach()```

```dart
var map = {
    "first" : "Dart",
    "second" : "Java",
    "third" : "Python"
};
print(map.length);                  // 3
print(map.isEmpty);                 // false

print(map.keys);                    // ("first", "second", "third")
print(map.values);                  // ("Dart", "Java", "Python")

print(map.containsKey("first"));    // true
print(map.containsValue("C"));      // false

map.remove("third");
print(map);                         // {"first" : "Dart","second" : "Java"}

void f(key, value){
    print("key = $key, value = $value");
}
map.forEach(f);
// "key = first, value = Dart"
// "key = second, value = Java"


// List 转 Map (下标作为 key ，元素作为 value)
var list = ["Dart", "Java", "Python"];
print(list.asMap());                // {0 : "Dart", 1 : "Java", 2 : "Python"}
```


### 2.2.6. 动态类型 ```dynamic```

```dart
var list = new List<dynamic>();

list.add(1);
list.add("hello");
list.add(true);

print(list);        // [1, "hello", true]
```

### 2.2.7. ```Runse、Symbols``` 这两种不常用



# 3. 运算符



# 4. 控制流



# 5. 方法











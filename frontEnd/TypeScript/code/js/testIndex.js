"use strict";
function sayHello(person) {
    return 'Hello, ' + person;
}
var user = 'Tom';
// console.log(sayHello(user));
// 基本类型
var flag;
flag = false;
// flag = "123"
var a = 123;
// a = "123";
var str = "hello ts";
// str = 123;
// 数组
var arrn = [1, 2, 3];
var arrs = ["js", "ts"];
var arrFanxing = ["php", "java"];
// 元祖类型
var arr = ["1", 2, false];
// 枚举类型 
/**
 * 例如 flag 值为 1 代表xxx 值为 2 代表 yyy 值为 3 代表 zzz 这样的情景
 * 时间久了就会忘记 1 到底是啥的尴尬
 *
 * enum 枚举名{
 *     标识符[=整型常数],
 *     标识符[=整型常数],
 *     标识符[=整型常数],
 *     ...
 * }
 */
var payType;
(function (payType) {
    payType[payType["apple_pay"] = 1] = "apple_pay";
    payType[payType["ali_pay"] = 2] = "ali_pay";
    payType[payType["wechat_pay"] = 3] = "wechat_pay";
    payType[payType["cash"] = 4] = "cash";
})(payType || (payType = {}));
var pt = payType.ali_pay;
// console.log(`支付类型： ${pt}`);
// 如果不赋值，默认就是 数字索引，从 0 开始。 如果有的赋值，有的没赋值，没赋值的会跟着赋值的加一..加一..加一...
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 5] = "blue";
    Color[Color["green"] = 6] = "green";
    Color[Color["yellow"] = 7] = "yellow";
})(Color || (Color = {}));
var colorR = Color.red;
var colorB = Color.blue;
var colorG = Color.green;
var colorY = Color.yellow;
// console.log(colorR);  // 0
// console.log(colorB);  // 5
// console.log(colorG);  // 6
// console.log(colorY);  // 7
// 任意类型
var anything = 123;
anything = "str";
anything = true;
// console.log(anything);
// 任意类型的用处
// 1. dom 没有类型可用的情况
// var oBox: any = document.getElementById("app");
// oBox.style.color = "red";
// null 和 undefined
// 其他类型（ never ）的子类型
// 一个元素可能是多种类型
var num1;
// console.log(num1);
// void 类型 一般用于 指定没有返回值的函数
function run() {
    console.log("run");
}
// run();
// 错误的写法
/*
function run():undefined{
    console.log("run");
}
run()
*/
// 正确的写法
/*
function getNumber():number{
    return 123;
}
getNumber();
*/
// never 类型， 包括 null 和 undefined 表示从不会出现的值
var und = undefined;
var nul = null;
var nev;
// try{
//     nev = (() => {
//         throw new Error("错误");
//     })();
// }catch(e){
//     console.log(e);
// }
// ======================== 2 ========================
// ======================== 2 ========================
// ===================== 函数的定义 ====================
// ======================== 2 ========================
// ======================== 2 ========================
function runStr() {
    return "str";
}
var fun2 = function () {
    return 123;
};
// ts 定义方法传参
function getInfo1(name, age) {
    return name + " already " + age + " years old.";
}
// console.log(getInfo1("LZQ", 27));
// ts 实参和形参数量必须要一样，如果想不一样，要用问号配置可选参数 ? 
// 注意，可选参数必须配置到最后
function getInfo2(name, age) {
    if (age) {
        return name + " already " + age + " years old.";
    }
    else {
        return "" + name;
    }
}
// console.log(getInfo2("LZQ"));
// ts 和 es6 都支持默认参数 
function getInfo3(name, age) {
    if (age === void 0) { age = 20; }
    return name + " already " + age + " years old.";
}
// console.log(getInfo3("LZQ"));
// 剩余参数（扩展运算符） 
function sum(a, b, c, d) {
    return a + b + c + d;
}
// console.log(sum(1, 2, 3, 4));
function sum2() {
    var res = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        res[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < res.length; i++) {
        sum += res[i];
    }
    return sum;
}
// console.log(sum2(1,2,3,4,5,6,7));
// 另一种写法
function sum3(a) {
    var res = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        res[_i - 1] = arguments[_i];
    }
    var sum = a;
    for (var i = 0; i < res.length; i++) {
        sum += res[i];
    }
    return sum;
}
function getInfoReloadVer(anything) {
    if (typeof anything === "string") {
        return "我叫" + anything;
    }
    else {
        return "我今年虚岁" + (anything + 1) + "";
    }
}
console.log(getInfoReloadVer("张三"));
console.log(getInfoReloadVer(22));
// 这个没明白 用处到底在哪？
// ======================== § ========================
// ======================== § ========================
// ===================== TS 中的类 ====================
// ======================== § ========================
// ======================== § ========================

[TypeScript 入门教程](https://ts.xcatliu.com/) 笔记——简洁版

# 简介

- [TypeScript](http://www.typescriptlang.org/) 是 JavaScript 的一个超集，主要提供了类型系统和对 ES6 的支持，它由 Microsoft 开发，代码[开源于 GitHub](https://github.com/Microsoft/TypeScript) 上。

## 安装 TypeScript
TypeScript 的命令行工具安装方法如下（可能需要 ```sudo``` ）：
```
npm install -g typescript
```
以上命令会在全局环境下安装 ```tsc``` 命令，编译一个 TypeScript 文件很简单：
```
tsc hello.ts
```

## Hello TypeScript
TypeScript 中，使用 `:` 指定变量的类型，`:` 的前后有没有空格都可以。

**TypeScript 只会进行静态检查，如果发现有错误，编译的时候就会报错。**

**TypeScript 编译的时候即使报错了，还是会生成编译结果**，我们仍然可以使用这个编译之后的文件。

如果要在报错的时候终止 js 文件的生成，可以在 `tsconfig.json` 中配置 `noEmitOnError` 即可。关于 `tsconfig.json`，请参阅[官方手册](http://www.typescriptlang.org/docs/handbook/tsconfig-json.html)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/tsconfig.json.html)）。



# 基础

## 原始数据类型

### 布尔值

布尔值是最基础的数据类型，在 TypeScript 中，使用 `boolean` 定义布尔值类型：

```ts
let isDone: boolean = false;
```

注意，使用构造函数 `Boolean` 创造的对象**不是**布尔值：

### 数值

使用 `number` 定义数值类型：

```ts
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法，会被编译为十进制数字
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法，会被编译为十进制数字
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;
```

### 字符串

使用 `string` 定义字符串类型：

```ts
let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;
```

### 空值

JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 `void` 表示没有任何返回值的函数：

```ts
function alertName(): void {
    alert('My name is Tom');
}
```

声明一个 `void` 类型的变量没有什么用，因为你只能将它赋值为 `undefined` 和 `null`：

```ts
let unusable: void = undefined;
```

### Null 和 Undefined

在 TypeScript 中，可以使用 `null` 和 `undefined` 来定义这两个原始数据类型：

```ts
let u: undefined = undefined;
let n: null = null;
```

与 `void` 的区别是，`undefined` 和 `null` 是所有类型的子类型。也就是说 `undefined` 类型的变量，可以赋值给 `number` 类型的变量，而 `void` 类型的变量不能赋值给 `number` 类型的变量：

## 任意值
```any``` 类型，允许被赋值为任意类型。

```ts
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;
```

### 任意值的属性和方法

在任意值上访问任何属性都是允许的，也允许调用任何方法：

可以认为，**声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值**。

### 未声明类型的变量

**变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型**：

## 类型推论

如果没有明确的指定类型，那么 TypeScript 会依照 ```类型推论（Type Inference）``` 的规则推断出一个类型。

### 什么是类型推论

以下代码虽然没有指定类型，但是会在编译的时候报错：

```ts
let myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。

**如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 `any` 类型而完全不被类型检查**：

## 联合类型

联合类型（Union Types）表示取值可以为多种类型中的一种。

### 简单的例子

```ts
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
```

联合类型使用 `|` 分隔每个类型。

这里的 `let myFavoriteNumber: string | number` 的含义是，允许 `myFavoriteNumber` 的类型是 `string` 或者 `number`，但是不能是其他类型。

### 访问联合类型的属性或方法

当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们**只能访问此联合类型的所有类型里共有的属性或方法**：

联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：

## 对象的类型——接口





## 数组的类型





## 函数的类型





## 类型断言





## 声明文件





## 内置对象









# 进阶





# 工程
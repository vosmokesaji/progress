


# TS 教程
## 教程1
- [Typescript教程_Typescript视频教程 ts入门实战视频教程-2020年4月更新](https://www.bilibili.com/video/BV1yt411e7xV?from=search&seid=15506619508871821799)
- 讲师：大地

- 自动编译
    ```shell
    # 项目目录下，生成配置文件 tsconfig.json
    tsc --init
    ```
    - 修改配置 ```"outDir": "./js",  ```
    - vscode 菜单 ： terminal -> run task 选择 typescript 文件夹，选择 tsc 监视


### 类

#### 类的定义

#### 








## 教程2
- [1.2W字 | 了不起的 TypeScript 入门教程](https://juejin.im/post/5edd8ad8f265da76fc45362c)



- 默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把 null 和 undefined 赋值给 number 类型的变量。然而，如果你指定了 --strictNullChecks 标记，null 和 undefined 只能赋值给 void 和它们各自的类型。





## 教程3
- [TypeScript完全解读入门进阶课程(26课时)](https://www.bilibili.com/video/BV1F7411c7m5?from=search&seid=5004198407821033938)



# 实操遇到的问题：
- ```function getInfo3(name: string, age: number = 20): string {``` 写成了 ```age?: number = 20``` ，多了一个问号：默认参数不需要加问号，可选参数才要加
- ```function sum2(...res: number[]): number {```  忘记写 ```[]```

- unknow 类型是啥


## 教程4 
- 来源[尚硅谷](https://www.bilibili.com/video/BV1Xy4y1v7S2)

### tsconfig.json

- include 编译的路径（包含）
- exclude 排除的路径

`"./src/**/*"` 两个 * 表示任意目录， 一个 * 表示任意文件

- compilerOptions
    - target 默认 ES3 
        - 能写啥？ 小技巧： 可以写错的，编译是会报错，告诉你能写啥
    - module 编译后的文件要使用哪种模块化的规范，比如 `es2015`
    - lib 要使用的库，方便提示，比如 `dom` ，一般情况不用设置
    - outDir 指定编译后文件所在的目录
    - outFile 会将全局作用域的代码合并成一个文件（使用模块化的时候 amd 或者 system）后期要结合打包工具使用更佳
    - allowJs 是否对js文件编译，默认 false
    - checkJs 是否检查 js 代码语法的规范， 默认 false
    - removaComments 是否移除注释，默认 false
    - noEmit 不生成编译后的文件，默认 false ，用于只检查ts  不编译，一般不用
    - alwaysStrict 是否严格模式， 默认 false
    - noImplicitAny 不允许隐式的 any 默认 false
    - noImplicitThis 不允许类型不明的 this 默认 false
    - strictNullChecks 严格的检查空值，比如 getElementById 不一定能获取到元素，赋值有可能为空
        - 可以这么用，**问号运算符**来解决严格检查空值时 的报错
        ```ts
        let box1 = docment.getElementById("box1");
        // 问号运算符是 es2020 的？
        box1?.addEventListener("click", function(){
            alert("click");
        })
        ```
    - strict 所有严格检查的总开关 建议 true

#### tips: 
- 严格模式语法更严格，性能更好
    - 严格模式有哪些要求

### webpack 结合 TS

#### 最基本的配置过程
- npm init  初始化项目
- 安装依赖 `npm i -D webpack wepack-cli typescript ts-loader`
- 配置 webpack.config.js
    - 关键在于
        ```
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: {
                    loader: "ts-loader"     
                    },
                    exclude: /node_modules/
                }
            ]
        },
        ```
- 配置 tsconfig.json
- 修改 package.json 添加 build 命令 `build: "webpack"`
- npm run build 就可以执行打包了

#### 完善配置
- HtmlWebpackPlugin
- webpack-dev-server
- CleanWebpackPlugin
- resolve 设置应用的模块(webpack 默认是不知道 你要用什么文件作为模块使用的，所以需要告诉 webpack )
    ```
    resolve: {
        extensions: [".ts", ".js"]
    }
    ```

### babel

#### 作用
- 可以把新语法转换为旧语法
- 新特新在旧的浏览器中不支持的，可以通过 babel 来实现

#### 使用
- npm i -D @babel/core @babel/preset-env babel-loader core-js
- 修改 webpack.config.js
```json
...略...
module: {
    rules: [
        {
            test: /\.ts$/,
            use: [
                {
                    loader: "babel-loader",
                    options:{
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    // 兼容目标浏览器
                                    "targets":{
                                        "chrome": "58",
                                        "ie": "11"
                                    },
                                    // 指定 corejs 版本
                                    "corejs":"3",
                                    // 使用 corejs 的方式 usage 表示按需引用
                                    "useBuiltIns": "usage"
                                }
                            ]
                        ]
                    }
                },
                {
                    loader: "ts-loader",

                }
            ],
            exclude: /node_modules/
        }
    ]
}
...略...


output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    environment: {
        arrowFunction: false // 关闭webpack的箭头函数，可选
    }
},
```


#### 编译流程
TS --(ts-loader)--> JS --(babel-loader)--> ES5
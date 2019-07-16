# Webpack

# 初识 Webpack

## Webapck 是什么
- 为了解决项目越来越大，文件越来越多的开发痛点
- **ES Module** 模块 **引入** 方式
    ```javascript
    import Header from "./Heaeder.js";
    ```
- **ES Module** 模块 **导出** 方式
    ```javascript
    function Heaeder(){
        ...
    }
    export default Header;
    ```
- Webpack 是一个 **模块打包工具**
    - 刚推出的时候只是 js 的打包工具
    - 随着发展， Webpack 还可以打包图片，css 等文件
- Webpack 同样能识别 CommonJS CMD AMD 的引入方式

    ```javascript
    // CommonJS 引入
    var Header = requer("./Header.js");

    // CommonJS 导出
    function Heaeder(){
        ...
    }
    module.exports = Header;
    ```
## webapck 的正确安装方式
1. 创建 webpack-demo 文件夹并进入
    ```shell
    mkdir webpack-demo && cd webpack-demo
    ```
2. 初始化项目： ```npm init``` 可以帮助我们以 ```Node``` 的规范创建一个 ```Node``` 的包文件 ```package.json```
    ```shell
    npm init
    ```
    - ```package.json``` 描述了这个项目的信息
    - 打开 ```package.json``` 可以加一个 ```"private": true,``` ，表示这是一个私有项目，不会被发送到 npm 的线上仓库里边去
    - 把 ```"main": "index.js",``` 这一行去掉，因为我们这个实验项目没有必要向外暴露一个 js 文件
    - ```scripts``` 对象里的内容也可以先去掉
    - ```author``` 改成自己的名字
    - ```license``` 如果大家想开源，可以写成 ```IMT```， ```ISC``` 也是 OK 的。
3. 安装 webpack ：（有两种方式）
    1. 全局安装
        ```shell
        # 全局安装 webpack 和 webpack-cli （这里其实只要安装 webpack-cli 它会自动帮我们安装 webpack）
        npm install webpack webpack-cli -g

        # 测试 webpack 是否安装成功 ，如果打印出版本号说明全局已经安装好 Webpack 了
        webpack -v
        ```
        - 非常不推荐全局安装，因为有这样的问题：
            - 假如我有两个项目，两个项目是不同的版本号的 一个是用 Webpack3 打包的，另一个是用 Webpack4 打包的
            - 如果你全局只安装了 Webpack4 就只能跑 Webpack4 的项目
            - 如果你想跑 Webpack3 的项目，就只能卸载 Webpack4 重装 Webpack3 这已经很麻烦了
            - 再如果这两个项目又有依赖关系，必须同时使用，此时全局只有一个版本的 Webpack 就不行了
            - 解决这些问题的办法就是 项目内安装 Webpack 
            - 在此之前，你可以先把 全局的 webpack 卸载掉
            ``` shell
            npm uninstall webpack webpack-cli -g

            # 此时再执行 webpack -v 会提示没有这个命令
            webpack -v
            ```
    2. 项目内安装
        ``` shell
        # 先进入你要安装 webpack 的项目目录， 我以 webpack-demo 为例
        cd webpack-demo

        # 安装 webpack 和 webpack-cli ， 其中 --save-dev 等同于 -D
        npm install webpack weebpack-cli --save-dev

        # 此时执行 webpack -v 是打不出东西的
        webpack -v

        # 我们可以使用 npx 来查看，npx 会帮助我们再当前项目的 node_modules 文件夹下找相应的命令，
        npx webpack -v 
        # 我的运行结果是 4.35.3   
        ```
        - 所以安装在项目内之后，我们就可以借助 ```npx``` 命令来使用 Webpack 了
        - 如果我有另一个项目 使用的是 webpack 4.25 的版本
            ```shell
            mkdir webpack-demo2 && cd webpack-demo2

            # 加 -y 他就不会问你怎么配置了，直接全 yes 
            npm init -y

            # 想要安装 4.25 版本 ，那我又不知道这个版本是否存在咋办？ 运行一下 npm info ，打印结果的最顶部的部分就能看到它的版本信息
            npm info webpack

            # 不妨安装一个老一点的 4.16.5 的版本，要安装固定版本，在包名后跟 "@版本号" 即可
            npm install webpack@4.16.5 webpack-cli -D

            # 看一下版本号 ，打印的是 4.16.5
            npx webpack -v 
            
            ```
        - 同样的打开 ```package.json```， 添加 ```"private": true,``` ，不要 ```"main": "index.js",``` ，删掉 ```scripts``` 对象里的内容
    3. 协作的时候是不会把 node_modules 上传版本库的（通常在 .gitignore 中写入 node_modules ）， 当你下载别人的项目后，需要进入项目文件夹，执行：
        ```shell
        npm install
        ```
        - 这个命令会根据 ```package.json``` 文件的内容下载安装你的依赖包，这样 node_modules 就回来了。

## webpack 的配置文件
- webpack 需要你通过这个配置文件告诉他这么打包，打包到哪里
- 之前的打包操实际上用的是 webpack 的默认配置
    ```shell
    # 之前的打包操作： 需要传入打包的文件名，webpack 会帮你自动打包到 dist 目录下，并起名为 main.js  
    npx webpack index.js

    # 如果现在执行
    npx webpack 

    # webpack 就会报错，因为他不知道你要打包什么东西， 此时就要用到 webpack 的配置文件了
    ```

1. 在项目目录创建一个名为 **webpack.config.js** 的文件，写入以下内容
    ```javascript
    const path = require("path");

    module.exports = {
        entry: "./index.js",                // 打包的入口文件
        output: {                           // 输出配置
            filename: "bundle.js",          // 输出文件名
            path: path.resolve(__dirname, "bundle")     // 输出路径，要写绝对路径，此时我们需要一个 path 模块
        },
    }

    // 解释：调用了 path.resolve 方法， __dirname 是 node 的默认变量
    // 指的是当前 webpack.config.js 这个文件坐在的目录
    // path.resolve 把一个路径或路径片段的序列解析为一个绝对路径
    path.resolve(__dirname, "bundle")
    ```
2. 此时只要执行以下命令即可打包，webpack 会根据 刚写的这个配置文件进行打包，所以也不需要写文件名（之前写文件名是这样： ```npx webpack inde.js```）
    ```shell
    npx webpack
    ```
    - 执行完后，项目目录下会多一个 bundle 文件夹，这个文件夹里还会有一个 bundle.js 
    - 梳理一下流程
        1. 当你在项目文件夹下，执行 ```npx webpack``` 的时候， webpack 并不知道不要打包什么
        2. 于是，他就会找默认的配置文件 webpack.config.js 
        3. 然后他就知道了应该这么打包，怎么输出
    - 如果把 webpack.config.js 改名为 webpackconfig.js 再执行 ```npx webpack``` 同样会像没有配置文件时报一样的错
        - 这是因为 webpack 默认的配置文件名就是 webpack.config.js 
        - 如果就是想要让 webpack 使用这个 webpackconfig.js 配置文件，也很简单：
        ```shell
        npx webpack --config webpackconfig.js
        ```
        - 意思是 webpack 你来帮我打包，以哪个配置文件打包呢？ 以 webpackconfig.js 配置文件打包
        - 注意这个命令就直接帮你打包了，并不会永久修改 webpack 使用的配置文件，你执行 ```npx webpack``` 同样会去找 webpack.config.js 这个配置文件

    - 此时的项目目录是这样的：
        ```
        |-- lesson
            |-- bundle
                |-- bundle.js
            |-- node_modules
                |-- weebpack
                |-- webpack-cli
                |-- ...
            |-- content.js
            |-- header.js
            |-- index.js
            |-- index.html
            |-- package-lock.json
            |-- package.json
            |-- sidebar.js
            |-- webpack.config.js
        ```
    - 优化一下目录结构
        - 删掉 bundle 文件夹
        - 新建 src 文件夹 （源代码文件夹）
        - 把  content.js 、 header.js 、 index.js 、 sidebar.js 移入 src 目录下
            ```
            |-- lesson
                |-- node_modules
                    |-- weebpack
                    |-- webpack-cli
                    |-- ...
                |-- src
                    |-- content.js
                    |-- header.js
                    |-- index.js
                    |-- sidebar.js
                |-- index.html
                |-- package-lock.json
                |-- package.json
                |-- webpack.config.js
            ```
        - 同时要修改 webpack.config.js
            ```javascript
            const path = require("path");

            module.exports = {
                entry: "./src/index.js",                // 修改index.js 的位置
                output: {
                    filename: "bundle.js",
                    path: path.resolve(__dirname, "dist")     // 通常叫 dist
                },
            }
            ```
3. 使用 npm scripts 简化打包代码
    - 打开 package.json 编辑 scripts 对象
        ```javascript
        scripts: {
            "bundle": "webpack"
        }
        ```
    - 再打包的时候，就不用 ```npx webpack``` 了，使用这个命令就行
        ```shell
        npm run bundle
        ```
    - 这里涉及到了一个 npm scripts 的知识点
        - 当运行 ```npm run bundle``` 的时候，实际在运行的是 scripts 中 "bundle" 对应的命令
        - 那为啥不写成 ```"bundle": "npx webpack"``` 呢？
        - 实际上，在 scripts 中配置的命令会先在工程目录下的 node_modules 中找这个命令，如果这里边有，他直接就会用了
    - 这时候就和 Vue / React 的项目很像了
    - 把 index.html 移入 dist 目录下，并修改 index.html 中对 bundle.js 的引用，打开 index.html ， 此时页面时可以正常运行的。

### 小结
- 之前我们用 webpack 打包用了三种方式
    1. 全局安装 webpack 
        ```shell
        webpack index.js
        ```
    2. 项目内安装 webpack
        ```shell
        npx webpack index.js

        # 还可以写配置文件，直接
        npx webpack
        ```
    3. npm script
        ```shell
        # 实际被翻译成了 webpack
        npm run bundle
        ```
- 这三种方式归根结底都是在命令行使用 ```webpack``` 这个命令
- 还记得安装的 **webpack-cli** 吗？ 它的 **作用** 就是让我们可以在命令行中使用 ```webpack``` 的命令，

## 浅析 webpack 打包输出内容
1. 执行打包命令后，打印的内容分析
    ![webpack 打印](../images/frontEnd/webpack/webpack-print.png)
    - Hash: 哈希值，本次打包唯一的一个哈希值
    - Version: 是指本次打包使用的 webpack 办版本
    - Time: 本次打包用时
    - Built at: 执行打包的时间
    - Asset: 表示打包出的文件
    - Size: 文件大小
    - Chunks: 放的是输出文件对应的 ID
    - Chunk Names: 放的是输出文件对应的名字
        - 那这个 main 是哪来的？ 在 webpack.config.js 中
            ```javascripit
            entry: "./src/bundue.js",

            // 就相当于 下边这段代码的简写
            entry: {
                "main": "./src/bundue.js"
            },
            ```
    - Entrypoint main = bundle.js : 说明入口文件是 bundle.js
    - 再往下就是打包的步骤了
    - 最下边的警告部分，它说我们在打包的时候没有指定打包的环境 或者打包的模式，可以在 webpack.config.js 中写入
    ```javascript
    mode: "production",
    ```
    - 再编译就不会报警告了，这个 production 是编译压缩，如果你不想压缩，可以改为 development

  

# webpack 核心概念

# webpack 进阶

# webpack 实战配置案例

# webpack 低层原理及脚手架工具分析


# 知识点

- Loader
- HMR
- Create React App
- Caching
- Plugin
- SorceMap
- Vue Cli 3.0
- Shimming
- WebpackDevServeer
- TreeShaking
- CodeSplitting
- Babel
- React
- Library
- Eslint
- PWA
- Vue
- Mode
- 性能优化
- 多页应用
- 原理
- PreLoading
- PreFetching
- 环境变量
- TypeScript


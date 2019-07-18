# 1. Webpack



# 2. 初识 Webpack

## 2.1. Webapck 是什么
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
## 2.2. webapck 的正确安装方式
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

## 2.3. webpack 的配置文件
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

### 2.3.1. 小结
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

## 2.4. 浅析 webpack 打包输出内容
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


# 3. webpack 核心概念

## 3.1. loader 
- 如果要打包图片，该怎么办
    ```javascript
    // 假如我们想要在 index.js 引入图片，常尝试这么做
    var avatar = require("./avatar.jpg");
    ```
    - 执行打包命令
        ```shell
        npm run bundle
        ```
    - 报错了，webpack 说他不认识 ./avatar.jpg ，这是因为 webpack 是默认可以打包js文件的，但是 webpack 不知道怎么打包图片文件 

- 此时需要告诉 webpack 我们要打包图片，怎么告诉 webpack 呢？ 没错，还是配置文件
    1. 修改配置文件
        ```javascript
        // 在 webpack.config.js 里 exports 的对象中写入 module ， 也就是模块配置，其中的 rules 是规则，可以写多条
        module: {
            rules: [{
                test: /\.jpg$/,
                use: {
                    loader: "file-loader"
                }
            }]
        }
        ```
    2. 需要安装一下这个 loader :
        ```shell
        npm install file-loader -D

        # 然后运行 打包
        npm run bundle
        ```
- 打包完之后，在看 dist 文件夹，里边多了一个 乱码名字的图片，打开这张图发现就是被打包的 avatar.jpg
- 那我们在 index.js 里 require 的结果是什么呢？打印一下
    ```javascript
    var avatar = require("./avatar.jpg");
    console.log(avatar);
    // bd81a2c0f7e09dc83ae8c36fd7c3a00a.jpg
    // 也就是打包完的这个文件名
    ```
### 3.1.1. 分析一下打包的流程
1. 有一个 index.js 文件，要对 index.js 进行打包，所以运行了 npm run bundle
2. 运行 npm run bundle 的时候，实际上你执行的是 package.json 里的 ```npm scripts``` 中配置的 ```webpack``` 这个命令
3. 此时 webpack 会去找他的配置，根据这个配置帮你打包
4. 当 webpack 遇到 index.js 中 引入 js 的语句时，它是知道怎么打包
5. 但当遇到 ```var avatar = require("./avatar.jpg");``` 这一句时， webpack 就傻了，不知道怎么打包
6. 此时他就去配置的 module 里看有没有能帮他的，谢天谢地，他遇到了 ```test: /\.jpg$/,``` 正好符合这个条件
7. 它就知道了对应的 ```file-loader``` 可以帮它打包这个文件，那我们是怎么知道 ```file-loader``` 可以打包这样的文件呢
8. 实际上我们是在完整的阅读了 webpack 的官方文档之后知道的，官网的 [loaders 下的 file-loader](https://webpack.js.org/loaders/file-loader/) 告诉了我们可以这么做
9. 回到我们的配置文件，再想一下， file-loader 的底层帮我们做了几件事儿？
    1. 当他发现你在项目里引入了一张图片时，他会把这张图片 copy 到 dist 目录下
    2. 会给这个图片改一个名字（这个名字我们也可以自定义）
    3. 把 dist 下的这个文件名返回给我们
10. file-loader 不仅可以打包 jpg ，还可以打包 png 、 svg 、 txt 、甚至是 excel
11. 换句话说，**如果你想在打包的过程中把某个文件 copy 到 dist 目录，并获得他的文件名，你就可以用 file-loader 来处理**

### 3.1.2. loader 是什么
- 上边的例子并不是想讲 file-loader 的用法，而是想告诉你 loader 是什么
- loader 是打包的方案，他知道对于一些文件该怎么打包， webpack 是不知道的，但是 loader 知道

### 3.1.3. 语法
- 上边的例子 引入图片时用的是 CommonJS 的语法(require)，也完全可以用 ES Module 的语法(import)来写
    ```javascript
    import avatar from "./avatar.jpg";

    var img = new Image();
    img.src = avatar;

    var root = document.getElementById("root");
    root.append(img);
    ```
- 打包



### 3.1.4. 小结 
- loader 是什么？因为 webpack 不能识别除 js 之外的文件，就需要 loader 帮助 webpack 打包他不认识的文件
- 怎么配置 loader ？在 webpack.config.js 中写入 module 配置项，通过 rules 配置 loader 
- 写过 Vue 的话，一定见过 这样的代码
    ```javascript
    import Header from "./Header.vue";
    ```
    - webpack 能打包吗？ 不能打包，因为他不认识 .vue 的文件，可以在 webpack.config.js 的 module 下的 rules 里添加一个对象
        ```javascript
        {
            test: /\.vue$/,
            use: {
                loader: "vue-loader"
            }
        }
        ```
    - 我怎么知道是 vue-loader 呢？ [Vue 官网](https://vue-loader.vuejs.org/zh/) 有对 vue-loader 的说明
    - 别忘了安装 vue-loader
        ```shell
        npm install vue-loader -D
        ```
- 最后：当你看到引入的文件不是以 .js 结尾的，就要想到，这时候就要使用 loader 了

## 3.2. 使用 loader 打包静态资源（图片篇）

### 3.2.1. file-loader
- 上一个例子中被打包的图片，文件名变成了一个常常的字符串。如果想让被打包的文件名字不变，需要对 loader 做一些别的配置
    ```javascript
    {
        test: /\.jpg$/,
        use: {
            loader: "file-loader",

            // 额外的配置，放在 options 中
            options: {                       
                // 这种配置的语法，我们称之为 placeholders 也就是 占位符
                name: "[name].[ext]"         // 希望打包的 文件名 和 后缀 都和老的文件一样
            }
        }
    }
    ```
- 将 bundle 文件夹下的打包生成的文件删除，重新运行 打包命令 ```npm run bundle``` 可以在 bundle 下看到 avatar.jpg 
- 关于 [placeholders](https://webpack.js.org/loaders/file-loader/#placeholders) 的说明
- 我们再来改改配置：给文件名加上哈希值、使其支持 png 、 gif 并且不打包到 dist 目录，打包到 images 目录
    ```javascript
    {
        test: /\.(jpg|png|gif)$/,                   // 添加 png gif 后缀的文件
        use: {
            loader: "file-loader",
            options: {
                name: "[name]_[hash].[ext]",        // 加上 哈希值
                outputPath: 'imagse/'               // 会打包到 dist/images 目录下
            }
        }
    }
    ```
- flie-loader 的配置项特别多，当你在使用过程中遇到问题时，可以查阅 [file-loader 的文档](https://webpack.js.org/loaders/file-loader/)

### 3.2.2. url-loader
- 把上边 file-loader 的配置直接改名为 url-loader （ file-loader 能做的事儿 url-loader 也能做）
- 安装 url-loader 后，运行打包，也是可以打包的
    ```shell
    npm install url-loader -D

    # 打包
    npm run bundle 
    ```
- 但是，发现一个问题： 图片并没有被打包到 dist 目录下，浏览器打开 index.html ，发现图片可以正确显示，这是为什么呢？
    - 当你用 url-loader 打包 jpg 文件时，它会把图片转为 base64 的字符串，放在 js 里，而不是单独生成一个文件
    - 优点：图片直接打包在 js 中，不用额外请求图片文件，节省了 Http 请求的次数
    - 缺点：如果图片源文件很大，打包生成的 js 也会很大，加载这个 js 耗费的时间也会越长，这样就导致页面加载时，在很长的时间内，页面什么都加载不出来
- 所以： url-loader 最佳的使用方式： 图片只有 1、2kb 时，把图片打包到 js 中是个明智的选择，没必要让一个 1、2k 的资源占一个请求。如果图片很大，就像 file-loader 一样打包到 dist 目录下，这样更合适。那如何做到这样的最佳实践呢？
    ```javascript
    {
        test: /\.(jpg|png|gif)$/,
        use: {
            loader: "url-loader",
            options: {
                name: "[name]_[hash].[ext]",
                outputPath: 'imagse/',
                limit: 2048                         // 添加一个 limit 配置项
            }
        }
    }

    // 这个配置项的意思是，如果超过 2048 个字节，就会像 file-loader 一样打包到 dist 目录下。
    // url-loader 和 file-loader 非常的类似，只是 url-loader 多了一个 limit 参数
     
    ```
> 作业： 阅读 url-loader 和 file-loader 的官方文档，读完之后对这两个 loader 的理解就没啥问题了


## 使用 loader 打包静态资源（样式篇）









# 4. webpack 进阶

# 5. webpack 实战配置案例

# 6. webpack 低层原理及脚手架工具分析

# 7. 知识点

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


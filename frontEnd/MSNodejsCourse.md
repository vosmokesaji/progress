# 微软官方教程

## 说明

- 地址[微软官方 Node.js 入门教程【鱼C字幕组持续翻译中】](https://www.bilibili.com/video/BV1kN41197vw?p=1)

## 分集

### 第一期 简介

- 是啥：
    - N..s 是 js 运行时，意为你可以在浏览器之外运行 js

- 能干啥：
    - 服务器应用
    - cli 应用
    - web api
    - 甚至用 Electron 构建桌面应用
    - nodejs 在物联网中也很流行，可以用它构建js 程序，在IoT 板子上部署

- 为啥用 nodejs 没有其他的替代品吗？
    - 你可以用很多其他的工具，但 nodejs 优点在于
        - 免费且开源
        - 有很多很大的开源社区
        - nodejs 运行 js ，js 是事件驱动的语言
        - 使其成为运行物联网甚至**无服务 APIS**（serverless apis） 的理想选择
        - 跨平台

### 第二期 在mac 或者 linux 上安装 nodejs
- 现实工作中可能会用到不同版本的 nodejs
- 为了方便管理 nodejs 的不同版本，推荐使用 [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- source 是为了更新当前的 终端环境？

### 第三期 在 windows 上安装 nodejs
- 略过

### 第四期 如何使用 Node 运行 Javascript
- 两种方法： REPL 和 使用文件

#### 使用 nodejs 的 REPL
- 是**交互式终端环境**，可以输入 js 代码，执行直接看结果，在快速执行代码和测试时很有用
    - read 读取
    - eval 执行
    - print 打印
    - loop 循环
- 使用方法：
    - 打开你最爱的命令行工具
    - 输入 `node` 回车
    - 就进可以输入 js 代码了
- 退出 REPL
    - control + D 或者 两次 control + C

#### 使用文件
- 打开最爱的代码编辑器 VSCode 
- 输入js代码，并保存
- 在命令行执行 `node 文件路径` 即可
- 这个 js 文件也叫 js 脚本


### 第五期 在 VSCode 中配置 node 环境
- 安装 VSCode
- 安装扩展
    - npm intellisense
        - 关于 npm 做了很多事儿
        - 可以快速在代码中导入库
            - 比如代开一个 js 文件
            - 按 command shift p
            - 输入命令 npm intellisense import module
            - 一单选中，会列出在项目中安装过的所有包 
    - ES Lint
        - 避免你犯愚蠢的错误
        - command shift M 打开窗口看所有的问题
    - Prettier
        - 代码格式化工具
            - 比如代开一个 js 文件
            - 按 command shift p
            - 输入命令 format documet（格式文档）
            - 第一次会让你在多种格式中选择
            - 点击配置 config
            - 可以选择 Prettier
    - Document This
        - 注释
        - 输入 `/**` 就会出一段注释模板
        - 特别的文档模板根据 JSDoc 格式规范
        - 可以记录入参、出参，甚至函数的工作方式
        - 如果在代码各处都添加这样的注释，就可以提取他们，使用jsdoc 工具，基于源码生成合适的 html 文档 ，十分有用
    - Reset Client
        - 对于 nodejs 开发 webapi 非常有用
        - 
        
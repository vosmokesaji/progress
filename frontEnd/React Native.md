# React Native学习

<!-- 
我是小野森森
https://www.bilibili.com/video/BV1HD4y127fR
-->


## RN 开发环境搭建
> 可参考官方文档： https://www.react-native.cn/docs/environment-setup


### 环境搭建

1. 安装 watchman
    - `brew install watchman`
    - 换源不要使用 cnpm， 使用 nrm （用 npx 执行更简洁，优雅）
        ```shell
        # 使用nrm工具切换淘宝源
        npx nrm use taobao

        # 如果之后需要切换回官方源可使用
        npx nrm use npm
        ```
        - [关于 npx](https://www.jianshu.com/p/a4d2d14f4c0e)
        - [npx 使用教程](http://www.ruanyifeng.com/blog/2019/02/npx.html)
    
2. 安装 Xcode & 命令行工具
    - 启动 Xcode，并在 `Xcode | Preferences | Locations` 菜单中检查一下是否装有某个版本的 `Command Line Tools` 。Xcode 的命令行工具中包含一些必须的工具，比如 `git` 等。

3. 安装 CocoaPods ，是用 Ruby 编写的包管理器

### 创建新项目
1. `npx react-native init AwesomeProject`
    - [可选参数] 指定版本或项目模板
2. 编译并运行 React Native 应用
    ```shell
    cd AwesomeProject
    yarn ios
    # 或者
    yarn react-native run-ios
    ```
    - **遇到了一个问题**，命令行没法看报错的具体原因，而后使用 Xcode 编译，报错，并查询，[解决方式](https://github.com/facebook/react-native/issues/30836#issuecomment-772830882)， [中文参考](https://blog.csdn.net/mengdasheng/article/details/113833313)
3. tips:
    - 在正常编译完成后，开发期间请保持 `Metro` 命令行窗口运行而不要关闭。以后需要再次运行项目时，如果没有修改过 ios 目录中的任何文件，则只需单独启动 `yarn start` 命令。如果对 ios 目录中任何文件有修改，则需要再次运行 `yarn ios` 命令完成原生部分的编译。
    - `yarn ios` 只是运行应用的方式之一。你也可以在 Xcode 中直接运行应用。注意 0.60 版本之后的主项目文件是 `.xcworkspace` ，不是 `.xcodeproj` 。

### 修改项目
- 编辑器打开 App.js 并随便改上几行。
- 在 iOS 模拟器中按下⌘-R就可以刷新 APP 并看到你的最新修改！（如果没有反应，请检查模拟器的 Hardware 菜单中，connect hardware keyboard 选项是否选中开启）



## 安装依赖、示例讲解、设计目录结构

### 安装依赖
```shell
npm i -S @react-native-community/masked-view @react-navigation/bottom-tabs @react-navigation/native @react-navigation/stack react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-screens react-native-swiper react-native-vector-icons
```

- npx react-native link
    - 这是干啥？

- 重新启动，看有没有报错
    - npx react-native run-ios
    - 如果遇到报错：Unable to resolve moudle
        - 解决：
            - rm -rf node_modules
            - yarn install 重新安装

        - 原因，可能是依赖的依赖没有安装
        - `yarn start --reset-cache`
        - 删除临时文件 `rm -rf /tmp/metro-* `
        - 然后再 `npx react-native run-ios`
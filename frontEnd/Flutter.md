# 1. Flutter 学习笔记

## 1.1. 准备工作
### 1.1.1. 安装 Flutter SDK

1. [下载 Flutter SDK](https://flutter.dev/docs/get-started/install/macos#get-the-flutter-sdk) 
2. 解压到你的安装目录

    ```shell
    cd ~/development
    unzip ~/Downloads/flutter_macos_v1.5.4-hotfix.2-stable.zip
    ```

3. 添加到环境变量，使 flutter 成为一个全局命令

    ```shell
    # 编辑环境变量文件，因为我安装了 oh my zsh 所以我编辑的是 ~/.zshrc ，否则请创建 或 编辑 ~/.bash_profile
    vim ~/.zshrc

    # 在最后一行 加入以下代码，其中 [PATH_TO_FLUTTER_GIT_DIRECTORY] 是你解压 flutter 的目录
    export PATH="$PATH:[PATH_TO_FLUTTER_GIT_DIRECTORY]/flutter/bin"

    # 保存并退出后，执行以下代码使其立即生效
    source ~/.zshrc

    # 通过运行以下命令，验证环境变量添加成功
    echo $PATH
    ```

4. 该 flutter 工具根据需要下载特定于平台的开发二进制文件。对于预先下载这些工件（例如，密封构建环境，间歇性网络可用性）的情况，可以通过运行以下命令提前下载iOS和Android二进制文件：

    ```shell
    flutter precache
    ```
### 1.1.2. iOS 设置
1. 安装 Xcode
    - 安装Xcode 9.0或更新版本（通过网络下载或Mac App Store）。
    - 通过从命令行运行以下命令，配置Xcode命令行工具以使用新安装的Xcode版本：
    - 确保通过打开Xcode一次并 ```sudo xcodebuild -license``` 从命令行确认或运行来签署Xcode许可协议。
2. 设置 iOS 模拟器
    - 在Mac上，通过Spotlight或使用以下命令查找模拟器

        ```shell
        open -a Simulator
        ```
    - 通过检查模拟器的硬件>设备菜单中的设置，确保您的模拟器使用的是64位设备（iPhone 5s或更高版本）。
    - 根据您的开发机器的屏幕尺寸，模拟的高屏密度iOS设备可能会溢出您的屏幕。在模拟器的“ 窗口”>“比例”菜单下设置设备比例。

3. 创建并运行一个简单的Flutter应用程序

    ```shell
    # 创建新的 Flutter 应用程序
    flutter create my_app

    # 进入创建的应用程序目录
    cd my_app

    # 要在模拟器中启动应用程序，请确保模拟器正在运行并输入
    flutter run
    ```

4. 部署到 iOS 真机
    - 要将Flutter应用程序部署到物理iOS设备，您需要一些其他工具和Apple帐户。您还需要在Xcode中设置物理设备部署。
    - 安装 Homebrew
    - 确保 brew 是最新的

        ```shell
        brew update
        ```
    - 通过运行以下命令，安装用于将Flutter应用程序部署到iOS设备的工具：

        ```shell
        brew install --HEAD usbmuxd
        brew link usbmuxd
        brew install --HEAD libimobiledevice
        brew install ideviceinstaller

        brew install ios-deploy

        brew install cocoapods
        pod setup
        ```
    - [按照Xcode 签名流程来配置您的项目](https://flutter.dev/docs/get-started/install/macos#deploy-to-ios-devices)
        - 我用的是公司的开发者账号（要成为开发者可以参考[这篇文章](https://blog.csdn.net/qq_35612929/article/details/78754470)，讲的特别详细）


### 1.1.3. 安卓配置

1. 安装 Android Studio 
2. 需要安装两个插件:
    - Flutter插件： 支持Flutter开发工作流 (运行、调试、热重载等)。
    - Dart插件： 提供代码分析 (输入代码时进行验证、代码补全等)。


### 1.1.4. 可能遇到的问题
1. 执行 ```brew update``` 更新 Homebrew 的时候，国内的网络可能要等5分钟左右才能更新成功，也可以选择[换中科大的源](https://www.jianshu.com/p/b26c7bc14440)，这样快一些。


## 1.2. Dart 基础

### 1.2.1. 变量声明
1. ```var``` 一旦赋值，变量的类型便确定了，无法改变

    ```dart
    var t;
    t = "hello world";
    // 下面代码在dart中会报错，因为变量t的类型已经确定为String，
    // 类型一旦确定后则不能再更改其类型。
    t = 1000;
    ```
2. ```dynamic``` 和 ```Object``` 声明对象：

    ```dart
    dynamic t;
    Object x;
    t = "hello world";
    x = 'Hello Object';
    //下面代码没有问题
    t = 1000;
    x = 1000;
    ```
    - 区别 ```dynamic``` 声明的对象编译器会提供所有可能的组合, 而 ```Object``` 声明的对象只能使用 ```Object``` 的属性与方法, 否则编译器会报错
        ```dart
        dynamic a;
        Object b;
        main() {
            a = "";
            b = "";
            printLengths();
        }   

        printLengths() {
            // no warning
            print(a.length);

            // warning:
            // The getter 'length' is not defined for the class 'Object'
            print(b.length);
        }
        ```
3. ```final``` 和 ```const``` 声明称量
    - 区别在于 ```const``` 变量是一个编译时常量，```final``` 变量在第一次使用时被初始化
    - 使用 ```final``` 或者 ```const``` 时，变量类型可以省略

        ```dart
        //可以省略String这个类型声明
        final str = "hello world";
        //final String str = "hello world"; 

        const str1 = "hello world";
        //const String str1 = "hello world";
        ```

### 1.2.2. 函数
1. 函数声明
    - Dart函数声明如果没有显式声明返回值类型时会默认当做 ```dynamic``` 处理，注意，函数返回值没有类型推断：

        ```dart
        bool isNoble(int atomicNumber) {
            return _nobleGases[atomicNumber] != null;
        }
        ```
    - 对于只包含一个表达式的函数，可以使用简写语法

        ```dart
        bool isNoble （int atomicNumber ）=> _nobleGases [ atomicNumber ] ！= null ;
        ```
    - 函数作为变量

        ```dart
        var say = (str){
            print(str);
        };
        say("hi world");
        ```
    - 函数作为参数传递

        ```dart
        void execute(var callback) {
            callback();
        }
        execute(() => print("xxx"))
        ```
    - 可选位置参数，用 ```[]``` 标记可选位置的参数

        ```dart
        // device 是可选参数
        String say(String from, String msg, [String device]) {
            var result = '$from says $msg';
            if (device != null) {
                result = '$result with a $device';
            }
            return result;
        }

        // 下面是一个不带可选参数调用这个函数的例子：
        say('Bob', 'Howdy');  //结果是： "Bob says Howdy"

        // 下面是用第三个参数调用这个函数的例子：
        say('Bob', 'Howdy', 'smoke signal'); //结果是："Bob says Howdy with a smoke signal"
        ```






# 2. 涉及到的英文单词列表

单词                | 含义 
:-                  | :- 
Container           |
decoration          |    
Positioned
Matrix4
identity







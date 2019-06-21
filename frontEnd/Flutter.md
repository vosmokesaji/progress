# 1. Flutter 学习笔记

## 1.1. 准备工作
### 1.1.1. 安装 Flutter SDK

1. [下载 Flutter SDK](https://flutter.dev/docs/get-started/install/macos#get-the-flutter-sdk) 
2. 解压到你的安装目录

    ```
    cd ~/development
    unzip ~/Downloads/flutter_macos_v1.5.4-hotfix.2-stable.zip
    ```

3. 添加到环境变量，使 flutter 成为一个全局命令

    ```
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

    ```
    flutter precache
    ```
### 1.1.2. iOS 设置
1. 安装 Xcode
    - 安装Xcode 9.0或更新版本（通过网络下载或Mac App Store）。
    - 通过从命令行运行以下命令，配置Xcode命令行工具以使用新安装的Xcode版本：
    - 确保通过打开Xcode一次并 ```sudo xcodebuild -license``` 从命令行确认或运行来签署Xcode许可协议。
2. 设置 iOS 模拟器
    - 在Mac上，通过Spotlight或使用以下命令查找模拟器

        ```
        open -a Simulator
        ```
    - 通过检查模拟器的硬件>设备菜单中的设置，确保您的模拟器使用的是64位设备（iPhone 5s或更高版本）。
    - 根据您的开发机器的屏幕尺寸，模拟的高屏密度iOS设备可能会溢出您的屏幕。在模拟器的“ 窗口”>“比例”菜单下设置设备比例。

3. 创建并运行一个简单的Flutter应用程序

    ```
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

        ```
        brew update
        ```
    - 通过运行以下命令，安装用于将Flutter应用程序部署到iOS设备的工具：

        ```
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


### 安卓配置


### 1.1.3. 可能遇到的问题
1. 执行 ```brew update``` 更新 Homebrew 的时候，国内的网络可能要等5分钟左右才能更新成功，也可以选择[换中科大的源](https://www.jianshu.com/p/b26c7bc14440)，这样快一些。

# Principle 
<!-- 
像素范儿
主讲：靳浩
https://uigreat.com/course/30
 -->

## 1. 软件界面初识

### 软件背景
- 开发者：Daniel Hooper （前 Apple 工程师）（可以关注一下他的fb tw ，会发一些关于软件的教程啥的）
- 软件基于 Core Animation （是 iOS 开发中的一个框架，用于构建动画效果），所以动画的底层核心都基于 iOS ，默认动画持续时间 0.3 秒
  
### 软件优势
1. 界面与 Sketch 如出一辙，支持 sketch 文件导入，无缝衔接
2. 有对应的 iOS 镜像 App ， 和 sketch mirror 类似的 Principle mirror 在 iPhone 上可以直接预览
3. 上手容易 学习曲线平缓，学习社区资源多，Dribbble 上也有大量优秀案例可供学习，并且热度一直在上升

### 界面
- 顶部工具栏
    - insert 插入
    - import 导入
    - create component 创建组件
    - Drivers 
    - Animate 
    - Group 
    - Forward 
    - Backward 
    - Tutorials 教程
    - Mirror
    - Show Preview 显示预览窗口
        - 可以在 ```View -> Side by Side``` 切换并列 ， 或者 ```View -> Picture in Picture``` 画中画
- 左侧属性栏 + 图层面板
    - stroke 描边，只支持内描边
    - 
- 中间绿色框框选中的就是画板
    - 不像 Sketch 有标尺， Principle 只有智能参考线
    - 按住 command 可以旋转
- 右侧实时预览窗口
- 右上角加号
    - 矩形
    - 等等形状


### Principle 的核心思路

- command + 1 以画板为基准适合窗口
- command + 2 以元素为基准适合窗口
- 按住 空格 可以拖拽
- 按住 command 鼠标滚动可以放大缩小视图
- 选中元素，右边会出现一个小的 闪电 icon ，点击这个 icon 可以选择一些交互指令
    - 鼠标点击不要松开可以指向下一步的操作
    - 如果指向自己则会复制一个一模一样的画板
    - 修改新画板的参数，比如位置形状啥的
    - 然后就可以在预览窗口预览相应的效果，Principle 会帮我们添加一个补间动画
- **重要的思想**：只要两个画板间有交互关系，并且有**相同名字的层**，就会认为这是相同的对象，Principle 会为其添加动画（即使本来不是一个对象，你手动改成相同的命名就能实现一个补间动画）



## 2. 基本操作流程展示
- 新建文件 command + N 
- 选中画板，在左侧信息栏，可以更改画板尺寸，比如 400 * 400 
- 按住 option 拖拽元素可以复制，同时按住 shift 可以控制对齐
- 调节元素的分布在左侧信息栏的顶部
- command + G 打组


## 3. 标签切换动画 Tap
- 顶部的 Animate 主要做页面切换的动画
- 知识点： Sketch 文件怎么导入 Principle？
    - 首先你做完的 sketch 一定要注意图层命名，图层管理，如果你做的图层很复杂，需要**精简图层**
    - 开启 Sketch 将你想要导入的 Sketch 文件放在最顶层（如果开启着多个 Sketch 文件的话）
    - 点击 Principle 上的 import 会出现一个弹窗，选择 Sketch 和 document 信息（注意：这里的倍数不会影响画板大小，但是会影响录制的清晰度 ，所以选个倍率大的比较好），点击 import page 
    - **Tips**： 如果你想让 Sketch 中的一个组在导入 Principle 后进行一个合并，比如不影响页面交互的状态栏，可以在 sketch 中个图层名称中加上这么个标识： ``` principle flatten```
- 知识点： 怎么加缓动动画？
    - 点击页面间切换的的连线（顶部的箭头），下边就会出现 Animate 面板，也可以点击工具栏的 Animate 按钮
    - 按住 command + 鼠标滚轮， 可以缩放时间轴
    - 按住空格可以拖拽面板
    - 点击 default 可以呼出曲线面板，可以更改，或者自定义缓动曲线
- 知识点：穿透选择
    - 按住 command 用鼠标左键去点击元素
# JavaScript 数据结构与算法

## 课程导学
- 背景
    - 门槛低、人员参差不齐
    - 不懂算法、伪程序员
    - 面试考算法、通过率低
- 算法 + 数据结构 = 合格的程序员
- 好的入门方式：
    - 通过解题夯实基础算法
    - 理解算法的本质学会挖掘规律
    - 举一反三，学会变通和延伸
- 课程安排
    - 基础算法
        1. 字符串
        2. 数组
        3. 正则表达式
        4. 排序
        5. 递归
    - 数据结构
        1. 堆、 栈
        2. 队列
        3. 链表
        4. 矩阵
        5. 二叉树
    - 进阶算法
        1. 贪心算法
        2. 动态规划
- 课程特色
    - LeetCode 真题
    - 类型全面
    - 通俗易懂
    - 洞穿本质：知其然，知其所以然
    - 举一反三
- 适用对象
    - ES6 / JavaScript
    - 面试
    - 想要写出高质量的程序
- 注意事项：
    1. 避免浮躁，按部就班
    2. 不投机取巧、循序渐进

### 学习姿势
- 面试：见多识广（考察知识面）、反应迅速、过程大于结果
- 进阶：打开思路、快速迭代、精益求精

<!-- 
### 说明与承诺
- 说明：
    1. 课程设计： 开辟新思路、由浅入深、与众不同
    2. 课程特色：由点到面、从会到改、举一反三
    3. 特别鸣谢：提bug、贡献代码、包容
- 承诺：
    1. 服务更新：不定时更新章节和题目
    2. 奖励：贡献较多的同学进行实物或者红包奖励
 -->


## 基础算法之 “字符串类”

### 环境搭建
1. 在此之前，你需要了解：
    - ES6
    - [Jest](https://jestjs.io/zh-Hans/)： Facebook 推出的 js 单元测试工具
        ```shell
        # 项目内安装
        npm install --save-dev jest
        ```

        ```javascript
        // 比如要测试这段代码 sum.js ：
        function sum(a, b) {
            return a + b;
        }
        module.exports = sum;

        // 然后创建一个名为 sum.test.js 的文件：
        // 此测试使用 expect 和 toBe 来测试两个值完全相同
        const sum = require('./sum');

        test('adds 1 + 2 to equal 3', () => {
            expect(sum(1, 2)).toBe(3);
        });
        ```
        - 将下面的配置部分添加到你的 ```package.json``` 里面：
        ```json
        {
            "scripts": {
                "test": "jest"
            }
        }
        ```
        - 最后，运行 ```npm run test``` ，Jest将打印下面这个消息：
        ```shell
        PASS  ./sum.test.js
        ✓ adds 1 + 2 to equal 3 (5ms)
        ```
    - npm
    - Git
        - [fe-material](https://github.com/cucygh/fe-material)
2. 环境搭建
    ```shell
    git clone https://git.imooc.com/coding-315/leetcode.git leetcode
    git checkout dev
    ```





#### 反转单词原理详解
1. [反转字符串当中的单词 III](https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/)
    - 知识点：
        - String.prototype.split
        - String.prototype.match
        - Array.prototype.map
        - Array.prototype.reverse
        - Array.prototype.join
        - [Array API](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)
        - [String API](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)
    - 思维方法
        - 要熟悉所有的 API ， 知道在某些场景的使用
2. [计数二进制子串](https://leetcode-cn.com/problems/count-binary-substrings/)
    - 知识点：
        - String.prototype.slice
        - String.prototype.match
        - String.prototype.repeat
        - Array.prototype.push
        - RegExp
        - [位运算符教程](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)
        - [正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)
        - [字符串模板](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/template_strings)


    > Tips: <br>
    难度大的算法题如何解？ **算法的本质是寻找规律并实现** <br>
    如何找到规律？ **寻找输入和输出的关系，寻找突破点** <br>
    复杂的实现该怎么办？ **实现是 程序 + 数据结构 的结合体**

## 基础算法之 “数组类” 

1. 电话号码的组合
    - 知识点：
        - 
2. 卡牌分组
    - 知识点：
        - 
3. 种花问题
    - 知识点：
        - 
4. 格雷编码
    - 知识点：
        - 

### ee 






















## 基础算法之 “正则类”


























## 基础算法之 “排序类”


























## 基础算法之 “递归类”


























## 数据结构之 “栈”


























## 数据结构之 “队列”


























## 数据结构之 “链表”


























## 数据结构之 “矩阵”


























## 数据结构之 “二叉树”


























## 数据结构之 “堆”


























## 进阶算法之 “贪婪算法”


























## 进阶算法之 “动态规划”


























## 直播视频《前端人的危机如何破解》


























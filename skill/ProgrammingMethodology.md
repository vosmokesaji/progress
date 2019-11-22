# 斯坦福大学开放课程： 编程方法
<!-- 
http://www.class.cn/course/course_detail?course_id=100104 
-->

> 课程名称： Programming Methodology <br>
> 课程编号： CS 106A <br>
> 主讲： Mehran Sahami （麦兰·萨哈米）


## 第一课

### 课程简介

- 将了讲义的事儿，没拿也不用担心，下课了可以去拿，保够
- 做了个统计：大家对计算机的熟悉程度
- 说明了这是公开课，会被放到网上供全世界的人观看，以及对在座各位的影响
- 介绍自己：称呼不要太正式，叫麦兰就好，和睦相处其乐融融
- 编程方法教授的诗良好的软件工程思想，比单纯的编程范围大得多
- 学习如何编程和成为一个好作家差不多
- 帮助不同类型的学生摆脱顾虑
- 配备了很多教员
- 竞争对象不是同学，而是自己
- 关于讲义，[课程讲义](https://web.stanford.edu/class/cs106a/) or [课程讲义](http://cs106a.stanford.edu/) ，为了防止学生没有领取到纸质讲义（第二个网址是为了方便学生记忆，斯坦福真贴心，做了一个 302 跳转）
- 注册系统，等等，系统都使用邮件通知（我在想中国，可以使用微信公众号等方法 ）
- 关于作业：
    - 提前说明了有 7 次作业，讲义上都有明确的截止日期
    - Eclipse（如果你有电脑，课程网页上有安装教程，mac & pc ；如果你没有电脑，可以用学校的，已经预装了 Eclipse 无论哪种方式都很简单）
- 如何保证你能真正学到东西？
    - 交上来的作业不会给你打个 A 或者 B 
    - 作业上交后，小组长会仔细批阅评分
    - 每周都要和小组长交流 10 到 15 分钟
    - 这叫做互动评分，只一个与人交流的好机会
    - 可以交流作业中的闪光点、需要改进的地方、编程思想、还有哪些欠缺；
    - 这样你就能获得更详细的信息，也可以提出一些疑难问题，如需帮助，尽管开口
- 在斯坦福什么都是越精简越好
- 讲解了评分等级
    - 最优秀的评分（++），需要小组长和老师商讨；
    - 同样，你拿到 -- 的时候，老师也会自责；
    - 没交作业得 0 分
- 宽限日，两天，需要提前申请，不鼓励使用，3天后不收作业
- 两次考试：期中，期末
    - 如果时间有冲突可以发邮件给老师，老师会综合考虑大家而时间安排，决定要不要调整考试时间
    - 作业：45% ； 期中： 15% ； 期末： 30% ； 平时成绩：10% （有没有定期参加讨论小组，有没有互助评分，有没有逃过课）
- 坐在前边的有糖
- 老师不是很严肃的人，但是有一件事会非常严肃，而且整个斯坦福都会很严肃：
    - 学术剽窃和行为准则 
    - 有谁和他扯上关系，会有一大群人找你麻烦 
    - 行为准则：
        - 鼓励交流
        - 鼓励在课堂上讨论各种想法
        - 讨论解决问题的策略
        - 鼓励提出问题
        - 最终在课堂上解决难题
    - 界限在哪里：
        - 不要共享代码 Don't share code.  可以讨论，但是代码要你自己写。 
        - 注明出处
        - 有工具能自动对比代码，对比你和其他同学的，你和往届同学的，绝对准确无误。
        - 不要因为**一念之差**，犯错
- 学生提问：（问一个问题给一颗糖） 
    - 迟交作业的惩罚：迟一天，作业评分降一级
    - 分讨论小组是先选先得吗，是的
    - 安排多少时间？斯坦福通常的课程要安排**课程的单元数乘以三**

### 编程入门简介
- BUG 
    - 短接了计算机电路的飞蛾
    - DEBUG ： 解决机械设备故障
- 误区：
    1. 仅仅学习语言本身的特性，认为只要学好语言就能成为一个好的软件工程师
    2. 过于关注语言的细节，对程序设计却没有宏观的把握
- 改变：瑞奇·帕提斯：
    - 教授的计算机入门课程时，能不能把各种语言的繁杂指令放在一边
    - 先从最简单的教起，以便学生能更快的学习各种指令
    - 这样大家就具备了掌握程序设计语言的基本素养
    - 可以把主要精力放在**软件工程思想**方便面
    - 事实证明这个想法很天才
- 卡雷尔机器人（ Karel the Robot ）：
    - 名字来自于 卡雷尔·恰派克 （ Karel Capek ） 
        - 捷克的小说家
        - 他创造了机器人（ robot ） 这个词
        - 他曾写过一本有关机器人的小说 R.U.R （《Rur Rossum's Universal Robots》）
        - 机器人这个词来自捷克语，意思是 “工作” 
        - 因此我们的机器人就用 卡雷尔 命名了，有时也会叫 卡尔

> 第一节课： 讲师一直在说的一句话：巴拉巴拉，don't worry...  巴拉巴拉， No worries, okay? 



## 第二课 欢迎来到 Karel 的世界
- 指令
- move 
- turnLeft  ( 一个词，没有空格 )
- pickBeeper
- putBeeper
- 以上这些我们称之为，方法（ methods ），就是可以调用或使用的指令，我们只需要调用方法，卡雷尔就能完成指定的动作
- 编程的艺术：解决问题的方法不止一个
- karel 移动的过程
    - move
    - pickBeeper
    - move
    - turnLeft
    - move
    - turnLeft
    - turnLeft
    - turnLeft
    - move
    - putBeeper
    - move
- 以上的过程并不是有效的的程序，而是**算法**，是做事情的步骤 
- 算法和程序的区别，算法是做事的步骤，程序则必须按照语言的规则，合法的组织语句
- 想要成功调用 karel 的方法，需要在方法名后加一对括号和一个分号
- 我们还要告诉 karel 从哪里开始运行，封装成名为 run 的方法
    ```java
    // 把事先定义好的跟卡雷尔有关的东西度拿出来
    import Satndford.karel.*;

    public class OutKarelProgram extends Karel {
        public void run(){      // 这个花括号表示，中间的内容都是 这个 run 方法的
            move();
            pickBeeper();
            move();
            turnLeft();
            move();
            turnLeft();
            turnLeft();
            turnLeft();
            move();
            putBeeper();
            move();
        }
        // 花括号中间的部分就是函数体
        // 通常添加 缩进提高可读性 

        private void turnRight() {
            turnLeft();
            turnLeft();
            turnLeft();
        }
    }
    ```

- 给 karel 创建一些我们想要的方法，比如 右转 （ turnRight ）

    ```java
    import Satndford.karel.*;

    public class OutKarelProgram extends Karel {

        // public 是公开的
        public void run(){

            move();
            pickBeeper();
            move();
            turnLeft();
            move();

            // 将三个 turnLeft(); 换成 turnRight(); 
            turnRight();

            move();
            putBeeper();
            move();
        }

        // 在这里添加 turnRight
        // private 是藏着掖着的，只有自己能调用
        // 除了 run 之外 ，可以随便起名字
        private void turnRight() {
            turnLeft();
            turnLeft();
            turnLeft();
        }

        // 你也可以用两个 turnRight();  相当于六次左转， 这并不是一个好方法 
        private void turnAround() {
            turnLeft();
            turnLeft();
        }

    }
    ```

- karel 还有一个超级版本， karel 有的他都有，还多了一个右转和转身的方法 

    ```java
    import Satndford.karel.*;

    // superKarel 包含了 turnRight 和 turnAround ， 可以直接使用
    public class OutKarelProgram extends superKarel {

        public void run(){
            move();
            pickBeeper();
            move();
            turnLeft();
            move();
            turnRight();
            move();
            putBeeper();
            move();
        }

    }
    ```


- 老师提出了一个哲学问题： 当代大学生堕落的原因是什么？
    - 散漫拖延
    - 睡觉
    - 闹钟重响
    - 如何重复？ ```for``` 循环

    ```java
    for ( int i = 0; i < 3; i++ ){
        // 循环体
        turnLeft();
    }

    // 循环次数
    ```

- ```while``` 循环

    ```java
    // 前方畅通 ， 就前进
    private void moveToWall(){
        while( frontIsClear ) {
            move();
        }
    }
    
    ```
- 只想验证一次 ```if else``` 语句

    ```java
    // 有方块 ， 就捡起一个
    private void moveToWall(){
        if( beepersPresent() ) {
            pickBeeper();
        }else{
            putBeeper();
        }
    }
    
    ```
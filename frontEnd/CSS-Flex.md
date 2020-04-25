# Flexbox 
<!-- 
讲解 Steven Lei
bilibili 频道  https://space.bilibili.com/451368848
视频：  https://www.bilibili.com/video/BV1qJ411N7TA
我的练习：  https://codepen.io/vosmokesanji/pen/dyYYVoe
 -->


## 对比 Grid
- Flexbox 是一维（ 1-Dimension ）的排版方式
    - 意思是一个 Flexbox 容器只能控制一个方向，即水平或者垂直的方向
    - 如果要控制另一个方向则需要再添加一层 Flexbox 容器
- Grid 是二维（ 2-Dimensions ）的排版方式
    - 可以一次性控制两个方向，可以直接定义容器中元素的位置


## Flexbox 的布局方式主要分为两个角色
1. Flex Container （ Flex 容器 ） ， 通过 ```display: flex;``` 设置
    ```css
    #flex-container{
        display: flex;
    }
    ```
2. Flex Item （ Flex 项目 ） ， Flex 容器内部的元素


### Flex Container 的属性
1. ```flex-direction``` 定义 Flex Item 的排序方向（即主轴的方向）
    - ```row``` 主轴为横向 （默认值）
    - ```column``` 主轴为纵向
2. ```justify-content ``` 定义 Flex Item 在主轴方向上的对齐方式
3. ```align-items``` 定义 Flex Item 在交叉轴方向上的对齐方式
4. ```flex-wrap``` 定义 Flex Item 是否自动换行
    - no-wrap 不换行 （默认值）
    - wrap 自动换行
5. ```flex-flow``` 是 ```flex-direction```  和 ```flex-wrap``` 的缩写
    ```css
    #flex-container{
        display: flex;
        flex-flow: row wrap;
    }
    ```
6. ```align-content``` 定义 当 ```flex-wrap: wrap;``` 时，有多于一行的 Flex Item 时才会生效。用于设定行与行的对齐方式


### Flex Item 的属性
1. ```order``` 定义 Flex Item 的顺序，小的在前大的在后（ HTML 的顺序并不代表最终 “视觉” 上的顺序 ）
    - 0 默认值
    - 其他数字（回头试试非整数行不行，```z-index``` 也试试）
    > Note: 为啥说是 “视觉” 顺序呢？因为在用鼠标选择多个 Flex Item 中的文本时，还是按照 HTML 的顺序的，亲测。所以个人认为在有文本的时候，尽量别用 order 
2. ```align-self``` 重写自己在 Flex Container 中的 ```align-items``` 的设定
3. ```flex-basis``` 定义 Flex Item 在主轴方向的大小
    - ```100px``` 或其他长度，会覆盖宽（ ```flex-direction: row;``` 时 ），或者高（ ```flex-direction: column;``` 时）的设置
    - ```auto``` 会按本身的大小，如果有设置宽高，会走设置的宽高
4. ```flex-grow``` 定义 Flex Item 在主轴方向有剩余空间时， Flex Item 沿主轴方向扩大的设定
    - 默认值为 ```0``` ，意思是有剩余空间时不扩大
    - 例1： 3个元素 ```flex-grow``` 分别为 ```1 / 1 / 1``` ， 意思是三个元素**均**会占有剩余空间的 1/3
    - 例1： 3个元素 ```flex-grow``` 分别为 ```1 / 3 / 1``` ， 意思是三个元素**各**占有剩余空间的 1/5 、 3/5 、 1/5
5. ```flex-shrink``` 定义 Flex Item 在主轴方向总和超出 Flex Container 时， Flex Item 沿主轴方向缩小的设定
    - 默认值为 ```1``` ，意思是超出时，平摊缩小的空间，均缩小超出空间的 1/N ， N 是主轴上 Flex Item 总数
    - 设置为 ```0``` 时， 意为 空间不够不缩小
6. ```flex``` 是 ```flex-grow``` 、 ```flex-shrink``` 和 ```flex-basis``` 的缩写
    ```css
    .flex-item{
        /* 意思是 flex-item 按照 flex-container 的空间平均分配扩大和缩小 */
        flex: 1 1 auto;
    }
    ```



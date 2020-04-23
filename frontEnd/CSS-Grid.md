# Grid 

## 对比 Flexbox
- Flexbox 是一维（ 1-Dimension ）的排版方式
    - 意思是一个 Flexbox 容器只能控制一个方向，即水平或者垂直的方向
    - 如果要控制另一个方向则需要再添加一层 Flexbox 容器
- Grid 是二维（ 2-Dimensions ）的排版方式
    - 可以一次性控制两个方向，可以直接定义容器中元素的位置

## 创建 Grid 容器
- 习惯先定义 row 再定义 column
- ```grid-template-rows``` 用来将 grid 容器 横向分割
- ```grid-template-columns``` 用来将 grid 容器 纵向分割
    ```css
    #grid-container{
        display:grid;
        width: 500px;
        height: 500px;
        grid-template-rows: 100px 100px 100px 100px 100px;
        grid-template-columns: 100px 100px 100px 100px 100px;
    }
    ```

## Grid 容器中放置元素
- 默认按照 grid 分割的格子排列
- 可以通过 ```grid-row``` 和 ```grid-column``` 配合设置元素在 grid 容器中的位置
- ```grid-row``` 和 ```grid-column``` 有一个简写的方法 ```grid-area```
- 想少记几个坐标？可以试试延伸写法：关键字 ```span```
    ```css
    .cell-1{
        background-color: blue;
        grid-row: 1 / 4;    /* 占据【横】向线所分割的空间： 第1线到第4线（三格） 之间的位置*/
        grid-column: 1 / 3; /* 占据【纵】向线所分割的空间： 第1线到第3线（两格） 之间的位置*/
    }

    .cell-2{
        background-color: yellow;
        grid-row: 4 / 6;    /* 占据【横】向线所分割的空间： 第4线到第6线（两格） 之间的位置*/
        grid-column: 2 / 6; /* 占据【纵】向线所分割的空间： 第2线到第6线（四格） 之间的位置*/
    }

    /* 
    刚说到：建议先定义 row 再定义 column
    原因在于 grid-row 和 grid-column 有一个简写的方法
    grid-area 顺序是： grid-row 第一个值 、 grid-column 第一个值 、 grid-row 第二个值 、 grid-column 第二个值
    我的理解是 坐上角的坐标和右下角的坐标
    */

    .cell-1{
        background-color: blue;
        grid-area: 1 / 1 / 4 / 3;

    }

    .cell-2{
        background-color: yellow;
        grid-area: 4 / 2 / 6 / 6;
    }

    /*  
    还有一种写法，由第几开始，延伸几格
    关键字 span
    */
    .cell-1{
        background-color: blue;
        grid-row: 1 / span 3;    /* 占据【横】向线所分割的空间： 从第 1 线延伸 3 格之间的位置*/
        grid-column: 1 / span 2; /* 占据【纵】向线所分割的空间： 从第 1 线延伸 2 格之间的位置*/
    }

    .cell-2{
        background-color: yellow;
        grid-row: 4 / span 2;    /* 占据【横】向线所分割的空间： 从第 4 线延伸 2 格之间的位置*/
        grid-column: 2 / span 4; /* 占据【纵】向线所分割的空间： 从第 2 线延伸 4 格之间的位置*/
    }
    ```

## Grid Lines
- 在这个 5 * 5 的方格中，水平和垂直方向各有六条线，将这25格分割出来 
- **分割 grid 容器的线称作 grid line** ，预设是由 1 开始的数值， 这些 grid line 是可以命名的
- 我们将水平方向的线 称为 ```Y1 ~ Y6``` ， 垂直方向的线称为 ```X1 ~ X6``` 
- 命名方式：在分割空间之间插入 grid line 的名称即可。如下：
    ```css
    #grid-container{
        display:grid;
        width: 500px;
        height: 500px;
        grid-template-rows: [Y1] 100px [Y2] 100px [Y3] 100px [Y4] 100px [Y5] 100px [Y6];
        grid-template-columns:  [X1] 100px [X2] 100px [X3] 100px [X4] 100px [X5] 100px [X6];
    }
    /* 名称和值之间用空格分隔 */

    /* 用 grid line 名称就可以设定的位置 */
    .cell-1{
        background-color: blue;
        grid-row: Y2 / Y4;
        grid-column: X1 / X3;
    }
    ```

## Grid Areas
- Grid 容器内的方格称作 Grid Area
- 可以直接给一个或者多个 Grid Area 命名 ， 让我们可以直接在元素中使用
    ```css
    #grid-container{
        display:grid;
        width: 500px;
        height: 500px;
        grid-template-rows: 100px 100px 100px 100px 100px;
        grid-template-columns: 100px 100px 100px 100px 100px;

        /* 它的值和方格一一对应 */
        /* 如果不起名可以用 . 来忽略 */
        grid-template-areas:  "header header header header header"
            "nav main main main main"
            "nav main main main main"
            "nav main main main main"
            ". footer footer footer ."
    }

    .cell-1{
        background-color: blue;
        grid-area: header;
    }
    .cell-2{
        background-color: yellow;
        grid-area: nav;
    }
    .cell-3{
        background-color: orange;
        grid-area: main;
    }
    .cell-4{
        background-color: black;
        grid-area: footer;
    }
    ```
- 现在的方格是紧贴在一起的，如果想增加一点空间，可以在 grid 容器中使用 ```row-gap``` 和 ```column-gap``` 属性设定间距值
    ```css
    #grid-container{
        display:grid;
        width: 540px;  /* 宽高也要改一下 */
        height: 540px;
        grid-template-rows: [Y1] 100px [Y2] 100px [Y3] 100px [Y4] 100px [Y5] 100px [Y6];
        grid-template-columns:  [X1] 100px [X2] 100px [X3] 100px [X4] 100px [X5] 100px [X6];
        grid-template-areas:  "header header header header header"
            "nav main main main main"
            "nav main main main main"
            "nav main main main main"
            ". footer footer footer .";
        
        row-gap: 10px;
        column-gap: 10px;
    }
    ```

## fr & repeat()
- ```fr``` 是专门用于 Grid 的 “比例” 单位， ```1fr``` 即占一份的意思
    ```css
    #grid-container{
        display:grid;
        width: 500px;
        height: 500px;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;    /* 每个 占 1/5 的空间 */
        grid-template-columns: 3fr 1fr 1fr 1fr 1fr;  /* 第一列占 3/7 的空间 ，其他的占 1/7 的空间 */ 
    }
    ```
- 不停的写 ```1fr``` 会很累吧，```repeat()``` 函数用来设置重复的值，第一个参数是重复的次数，第二个参数是重复的值，上边的代码可以改为
    ```css
    #grid-container{
        display:grid;
        width: 500px;
        height: 500px;
        grid-template-rows: repeat(5, 1fr);    /* 每个 占 1/5 的空间 */
        grid-template-columns: 3fr repeat(4, 1fr);  /* 第一列占 3/7 的空间 ，其他的占 1/7 的空间 */ 
    }
    ```
- 注意： ```repeat()``` 并不适用 ```grid-template-areas``` 属性，还是要自己一个个的写啦


## 总结
- **Grid 容器的属性**
    ```css
    #grid-container{
        /* 设置 grid 容器 */
        display:grid;

        /* 
        分割 grid 容器 
        可以是绝对单位 px 也可以是相对单位 fr
        重复的大小可以使用 repeat() 函数
        */
        grid-template-rows: repeat(5, 1fr);
        grid-template-columns: 3fr repeat(4, 1fr);

        /* 给 grid 容器分割的块起名字，方便元素使用，不命名的可以用 . 代替 */
        grid-template-areas:  "header header header header header"
            "nav main main main main"
            "nav main main main main"
            "nav main main main main"
            ". footer footer footer .";

        /* 设置行列之间的间距 */
        row-gap: 10px;
        column-gap: 10px;
    }
    ```
- **Grid 元素的属性**
    ```css
    .cell-1{
        /* 设置元素占据的空间 —— 1. 使用 grid line 默认名称 */
        grid-row: 1 / 4;
        grid-column: 1 / 3;

        /* 设置元素占据的空间 —— 2. 使用起点和区间的方式 */
        grid-row: 1 / span 3;
        grid-column: 1 / span 2;

        /* 设置元素占据的空间 —— 3. 使用 grid line 名称的方式 */
        grid-row: Y1 / Y4;
        grid-column: X1 / X3;

        /* 设置元素占据的空间 —— 4. 使用 grid area 名称的方式 */
        grid-area: header;
    }
    ```
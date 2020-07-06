


# TS 教程
## 教程1
- [Typescript教程_Typescript视频教程 ts入门实战视频教程-2020年4月更新](https://www.bilibili.com/video/BV1yt411e7xV?from=search&seid=15506619508871821799)
- 讲师：大地

- 自动编译
    ```shell
    # 项目目录下，生成配置文件 tsconfig.json
    tsc --init
    ```
    - 修改配置 ```"outDir": "./js",  ```
    - vscode 菜单 ： terminal -> run task 选择 typescript 文件夹，选择 tsc 监视


## 教程2
- [1.2W字 | 了不起的 TypeScript 入门教程](https://juejin.im/post/5edd8ad8f265da76fc45362c)



- 默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把 null 和 undefined 赋值给 number 类型的变量。然而，如果你指定了 --strictNullChecks 标记，null 和 undefined 只能赋值给 void 和它们各自的类型。





## 教程3
- [TypeScript完全解读入门进阶课程(26课时)](https://www.bilibili.com/video/BV1F7411c7m5?from=search&seid=5004198407821033938)



# 实操遇到的问题：
- ```function getInfo3(name: string, age: number = 20): string {``` 写成了 ```age?: number = 20``` ，多了一个问号：默认参数不需要加问号，可选参数才要加
- ```function sum2(...res: number[]): number {```  忘记写 ```[]```

- unknow 类型是啥





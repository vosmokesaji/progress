

- NaN这个特殊的Number与所有其他值都不相等，包括它自己：

```javscript
NaN === NaN; // false

// 唯一能判断NaN的方法是通过isNaN()函数：
isNaN(NaN); // true
```

# 使用 HEXO 搭建静态资源网站

## 安装
```shell
# 前提：安装了 git 和 node

# 安装 hexo 命令行工具
npm install -g hexo-cli

# 初始化 hexo 项目，并进入项目目录
hexo init project-name
cd project-name

# 如果 init 时遇到依赖包没有安装成功的报错，进入项目跟目录后，手动安装一下即可
npm i

# 打包 （在项目根目录执行），执行之后会生成一个  public 的目录，这就是生成的网站
hexo g

# 启动本地服务器运行（在项目根目录执行）
hexo s
```

## 写作
```shell
# 写作
hexo new "文章标题"
# 会帮你生成一个叫 “文章标题.md” 的文件，可以使用 markdown 语法进行编辑

# 创建草稿文件，生成的静态网站不会包括草稿文章
hexo new draft "草稿标题"
# 会帮你生成一个叫 “草稿标题.md” 的文件，可以使用 markdown 语法进行编辑

# 创建页面
hexo new page "页面标题"
```
- 页面文件都会放在 ```scaffolds``` 目录下
- 模板是使用 ```Nunjucks``` 语言，来访问系统变量和函数的
- Nunjucks脚本语言: https://mozilla.github.io/nunjucks/


## Front Matter
- 文章顶部的两个 ```---``` 包裹的就是 Front Matter ，使用的是 yaml 的语法 
- 可以理解为文章的配置信息
- 以 Hexo 生成的默认文章的标题为例
    ```
    ---
    title: Hello World
    ---
    ```

## 配置文件
- 使用 yaml 语法，JSON 也可以用，但是因为 json 配置较 yml 繁琐，并且很多网站对 yml 的支持也很好，建议使用 yml
- 网站配置文件 存放在根目录 ```/_config.yml``` ， 以下是几个需要注意的配置项
    - ```author``` 作者，可以在文章的 ```Front Matter``` 中设置个性的作者
    - ```tmiezone``` 时区，默认是你电脑的时区
    - 永久链接中的 ```id``` 慎用
        - 因为使用 ```hexo clean``` 后，执行 ```hexo g``` 打包的 id 是和之前不一样的
        - 这样就可能会影响到评论等依赖文章 id 的功能
        - 如果想要使用id ，推荐使用 ```hexo-addrlink``` 插件，他会给文章生成一个唯一的 id 放在 ```Front Matter``` 中，不会被 ```hexo clean``` 清除
    - ```auto_spacing``` 在中文和英文之间加入空格
    - ```include``` 在 github 上部署的，要把 .nojekll 加入到其中，否则会有一些展示的错误

- 主题配置文件 存放在相应的主题目录下 ```/themes/landspace/_config.yml```



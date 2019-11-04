
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

# fastvue
快速构建vue的后台管理系统框架
## 项目启动步骤
### 下载项目git clone git@github.com:YesIsLast/fastvue.git
### 安装项目依赖 npm install
### 运行项目 npm run serve

## 项目组成
    vue 2.6+
    vue-router
    vuex
    eslint  如果想取消eslint只需要将eslint包依赖删掉重新npm install安装依赖就好
    vue-progressbar VUE顶部加载轻量级动画https://github.com/hilongjw/vue-progressbar
## VSCode开发工具使用
    断点调试使用Debugger for Chrome插件
    git 的使用
    提交更改过的文件只需要对号+输入更改备注信息就可以
    使用vscode中的推送可将刚刚提交过的文件推送到git仓库中的默认分支上
    常用命令有：git status -- 查看当前状态
               git pull   -- 更新远程仓库代码至本地
               git add xxx.vue/*    -- 暂存指定文件或所有更改文件
               git commit -m"输入需要备注的信息"    -- 提交所有暂存的文件并加注释信息
               git push origin master   -- 将当前已经提交的文件推送到指定分支或默认分支
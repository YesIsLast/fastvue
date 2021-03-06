# fastvue
快速构建vue的后台管理系统框架
## 项目纯净版地址 https://github.com/YesIsLast/fast-vue-system
## 项目启动步骤
### 下载项目git clone git@github.com:YesIsLast/fastvue.git
### 安装项目依赖 npm install
### 运行项目 npm run serve / npm start

## 项目组成
    vue 2.6+
    vue-router
    vuex
    eslint  如果想取消eslint只需要将eslint配置文件.eslintrc.js中注释掉或删掉 '@vue/standard'
    vue-progressbar VUE顶部加载轻量级动画https://github.com/hilongjw/vue-progressbar    npm install vue-progressbar
    阿里Ant Design Vue UI组件库1.3.10           npm install ant-design-vue --save
    store 2.0.12 浏览器存储 npm install store --save
    animate 3.7.2 动画效果插件 npm install animate.css --save
## VSCode开发工具使用
    git 的使用
    提交更改过的文件只需要对号+输入更改备注信息就可以
    使用vscode中的推送可将刚刚提交过的文件推送到git仓库中的默认分支上
    常用命令有：git status -- 查看当前状态
               git pull   -- 更新远程仓库代码至本地
               git add xxx.vue/*    -- 暂存指定文件或所有更改文件
               git commit -m"输入需要备注的信息"    -- 提交所有暂存的文件并加注释信息
               git push origin master   -- 将当前已经提交的文件推送到指定分支或默认分支
## 断点调试
    断点调试使用Debugger for Chrome插件
    配置可查看vue.config.js和babel.config.js
## 功能点笔记
### 进度条增加阴影效果
    使用class在使用的位置进行样式覆盖
    box-shadow:2px 2px 6px #3eb1fc;
### 页面布局
    使用ant中的常用布局，在项目中进行拆分成组件使用，内容区通过vue的router-view来显示，使用路由来控制页面变化，
    同时对已完成的进度条插件进行封装组件管理。
## CSS3动画效果
    插件使用npm命令进行安装，此插件官方地址为：https://daneden.github.io/animate.css/
    集成步骤分三步
    1、npm安装插件 npm install animate.css --save
    2、将插件在main.js中引入VUE项目
    3、在页面中通过class="animated bounceInDown"使用，如此标签还有自定义类名样式，
       将class="xx自定义类名xx animated bounceInDown"放在其中即可
    所有效果均在官网有所介绍和演示，可根据官方提供的样式名来为自己的网站添加动画效果
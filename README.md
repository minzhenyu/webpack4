# webpack4
#说明
webpack4 下前端自动化打包插件集成
用于集项目开始阶段,需要持续更新

暂时只有webpack官方介绍的初步功能,能够快速进入开发阶段,缩减配置开发环境时间

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config webpack.prod.js",
    "watch": "webpack --watch",
    "start": "webpack-dev-server --open --config webpack.dev.js",
    "server": "node server.js"
  }
  
#用法
npm run:
  start: 开发环境热更新
  build: 生产环境打包
  watch: 开发环境监视
  server: 服务器环境node启动(服务器下 应为模块的异步加载   seo需要这块)
  


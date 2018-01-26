# Karma 和 Mocha 测试练习3

[![Build Status](https://travis-ci.org/Wortheme/exercise3.svg?branch=master)](https://travis-ci.org/Wortheme/exercise3)

## 开始

* Fork 代码仓库并拉到本地
* 更新 npm 依赖包

```
# 检查更新
npm install -g npm-check
npm-check
# 更新
npm install -g npm-upgrade
npm-upgrade
```

* 安装所有依赖 `npm i`
* 初始化测试 `npm run init`

    1. Which testing framework do you want to use ? (mocha)
    2. Do you want to use Require.js ? (no)
    3. Do you want to capture any browsers automatically ? (Chrome)
    4. What is the location of your source and test files ? (https://cdn.bootcss.com/jquery/2.2.4/jquery.js, node_modules/should/should.js, test/**.js)
    5. Should any of the files included by the previous patterns be excluded ? ()
    6. Do you want Karma to watch all the files and run the tests on change ? (yes)

* 启动测试 `npm t`
* 打开 `./test/test.js` 修改跑通测试用例
* 提交 github，尝试接入 Travis CI

### 参考

* [karma](http://karma-runner.github.io/)
* [jQuery 中文文档](http://jquery.cuishifeng.cn/)
1. karma.conf.js中指定的浏览器应该为phantomjs，否则travis会报错，找不到chrome，本地测试的时候指定为chrome  

2. 本地安装karma-phantomjs-launcher的时候发现下载phantomjs超慢   
解决：增加.npmrc 修改phantomjs的下载源为淘宝
   
3. 在travis ci构建测试时发现，用例跑通之后一直监测，并没有退出：  
原因： ‘karma start’命令默认实时监听代码变化，karma server不会自动退出  
解决：在命令后添加参数： --single-run，只执行一次， 详见[karma run once](https://github.com/karma-runner/karma/issues/2769)

4. travis ci跑通之后，在github readme中添加
  ![travis ci](https://travis-ci.org/baihexx/exercise3.svg?branch=master)，
  会显示passing图标

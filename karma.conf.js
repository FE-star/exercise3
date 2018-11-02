// Karma configuration
// Generated on Fri Nov 02 2018 01:03:00 GMT+0800 (CST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    //用于解析所有模式的基本路径
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    // 可用的测试框架: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    // 要在浏览器中加载的文件/模式列表
    files: [
      'https://cdn.bootcss.com/jquery/2.2.4/jquery.js',
      'node_modules/should/should.js',
      'test/**.js'
    ],


    // list of files to exclude
    // 要排除的文件列表
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // 在将匹配的文件提供给浏览器之前，对它们进行预处理
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    // 可用的预处理器: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // 测试结果报告要使用
    // possible values: 'dots', 'progress'
    // 可能的值: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // 可利用的资源：https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    // web服务器端口
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    // 在输出中启用/禁用颜色(报告程序和日志)
    colors: true,


    // level of logging
    // 日志级别
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    // 可能的值：config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    // 在任何文件更改时启用/禁用监视文件和执行测试
    autoWatch: true,


    // start these browsers
    // 启动那些浏览器
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // 可用的浏览器发射器
    browsers: ['Chrome'],


    // Continuous Integration mode
    // 持续集成模式
    // if true, Karma captures browsers, runs the tests and exits
    // 如果true，Karma捕获浏览器，运行测试并退出
    singleRun: false,

    // Concurrency level
    // 并发级别
    // how many browser should be started simultaneous
    // 应该同时启动多少个浏览器
    concurrency: Infinity
  })
}

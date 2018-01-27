module.exports = function(config) {
  var _config = {
    basePath: '',
    frameworks: ['mocha'],
    files: [
      'https://cdn.bootcss.com/jquery/2.2.4/jquery.js',
      'node_modules/should/should.js',
      'test/**.js'
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  }
  if (process.env.TRAVIS) {
    _config.customLaunchers = {
      Chrome_travis_ci: {
          base: 'Chrome',
          flags: ['--no-sandbox']
      }
    }
    _config.browsers = ['Chrome_travis_ci']
  }

  config.set(_config)
}

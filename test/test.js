describe('jQuery测试测试测试', function () {
  it('should have jQuery', function () {
    if (!window.jQuery) {
      throw new Error('查看下 karma.conf.js 配置项 files 是否正确')
    }
  })

  it('should able to get a body', function () {
    var $body = $('body')
    $body.length.should.equal(1)
    $body[0].should.equal(document.getElementsByTagName('body')[0])
  })

  describe('should able to trigger an event', function () {
    var ele
    before(function () {
      ele = document.createElement('button')
      document.body.appendChild(ele)
    })

    it('should able trigger an event', function (done) {
      $(ele).on('click', function () {
        done()
      }).trigger('click')
    })

    after(function () {
      document.body.removeChild(ele)
      ele = null
    })
  })

  it('should able to request https://raw.githubusercontent.com/FE-star/exercise1/master/test/test.js', function (done) {
    // 使用 jQuery.ajax 请求 https://raw.githubusercontent.com/FE-star/exercise1/master/test/test.js，并验证是否拿到文件
    it('异步请求应该返回一个对象', done => {
      // request
      //   .get('https://api.github.com')
      //   .end(function (err, res) {
      //     expect(res).to.be.an('object');
      //     done();
      //   });

      $.ajax({
        url: "https://raw.githubusercontent.com/FE-star/exercise1/master/test/test.js",
        success: function (res) {
          res.should.ok;
          done();
        }

      });
    });
  })

})
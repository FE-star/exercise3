describe('jQuery', function () {
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

    $.ajax({
      type: "GET",
      url: "https://raw.githubusercontent.com/FE-star/exercise1/master/test/test.js",
      success(){
        done()
      }
  });

  })
})
// 加法函数
// function add(x){
//   return function(y){
//       return x + y;
//   }
// }
// // 乘法函数
// function multi(x){
//   return function(y){
//       return x * y + 1;
//   }
// }

// describe("运算功能单元测试",function(){
//   it("加法函数测试",function(){
//       var add5 = add(5)
//       add5(5).should.equal(10)
//   });

//   it("乘法函数测试",function(){
//       var multi5 = multi(5)
//       multi5(5).should.equal(25)
//   })
//   console.log(1)
// })


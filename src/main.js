// 事件中心 ： 发布订阅模式 / new CustomEvent
const EventCenter = {
  on(type, handler) {
    $(document).on(type, handler)
  },
  fire(type, data) {
    $(document).trigger(type, data)
  }
}
// 测试可用：
// EventCenter.on('hello', function(e, data){
//   console.log(data)
// })
// EventCenter.fire('hello', '你好')


const Footer = {
  init() {
    // 初始化


    // 并做绑定事件的操作 以及 第一次渲染页面
    this.bind()  // 因为要发请求
    this.render()
  },
  bind() {
    // 绑定事件
  },
  render() {
    // 渲染页面  需要数据，所以先请求数据后渲染
    // 1. 请求数据
    // 歌曲 api
    //  https://gitee.com/api/v5/repos/hellow2887/music-db/contents/Electus%20-%20Nero.mp3?ref=master
    // img api
    //  https://gitee.com/api/v5/repos/hellow2887/music-db/contents/%2Fimg%2FNeroImg.jpg?ref=master


    const _this = this
    $.getJSON('https://gitee.com/api/v5/repos/hellow2887/music-db/contents/%2Fimg%2FNeroImg.jpg?ref=master')
      .done(function(ret){
        console.log(ret)
        _this.renderFooter(ret.channels)
      }).fail(function(){
      console.log('error')
    })
    // axios({
    //   method: 'get',
    //   url: 'http://api.jirengu.com/fm/getSong.php',
    // }).then((response) => {
    //   console.log('成功获得数据：')
    //   console.log(response)
    // })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    // 2. 渲染 footer
  },
  renderFooter() {

  }
}
Footer.init()


//index.js
var URL="https://api.douban.com/v2/movie/top250";
Page({
  data: {
    title:"加载中...",
    movies:[1]
  },
  onLoad:function(){
    var that=this;
    wx.showToast({
      title:"加载中",
      icon:"loading",
      duration:10000
    });
    wx.request({
      url: URL,
      data: {},
      method: 'GET',
      header: {
        "content-type":"Application/json"
      }, 
      success: function(res){
        console.log(res.data.subjects);
        wx.hideToast();
        that.setData({
          title:res.data.title,
          movies:res.data.subjects
        });
      }
    })
  }
})

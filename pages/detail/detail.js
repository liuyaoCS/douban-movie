var URL="https://api.douban.com/v2/movie/subject/";
Page({
  data: {
    movie:{}
  },
  onLoad:function(params){
    console.log("here enter detail");
    var that=this;
    wx.request({
      url: URL+params.id,
      data: {},
      method: 'GET',
      header: {
        'content-type':'Application/json'
      }, 
      success: function(res){
        console.log(res.data);
        that.setData({
          movie:res.data
        });
      }
    })
  }
})

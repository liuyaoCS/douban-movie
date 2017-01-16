var URL="https://api.douban.com/v2/movie/search";
Page({
  data:{
      movies:[]
  },
  onLoad:function(){
      console.log("onLoad search..........");
  },
  search:function(event){
      if(!event.detail.value){
          return;
      }
      wx.showToast({
          title:"加载中..",
          icon:"loading",
          duration:10000
      });
      var that=this;
      wx.request({
        url: URL+"?q="+event.detail.value,
        data: {},
        method: 'GET', 
        header: {
            "content-type":"Application/json"
        }, 
        success: function(res){
          console.log(res.data);
          wx.hideToast();
          that.setData({
              movies:res.data.subjects
          });
        }
      })
  }
})
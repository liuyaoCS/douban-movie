var app = getApp()
Page({
  data: {
    userInfo: {}
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //����Ӧ��ʵ���ķ�����ȡȫ������
    app.getUserInfo(function(userInfo){
      //��������
      that.setData({
        userInfo:userInfo
      })
    })
  }
})

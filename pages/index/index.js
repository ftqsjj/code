//index.js
var util = require('../../utils/util.js')
Page({  
  data: {    
    time: util.formatTime(new Date),   
  },
  
  bindGetUserInfo: function (e) {
    var that = this;
    //此处授权得到userInfo
    console.log(e.detail.userInfo);
    //接下来写业务代码

    wx.showToast({ // 显示Toast

      title: e.detail.userInfo.nickName,

      icon: 'success',

      duration: 3000

    })

     //最后，记得返回刚才的页面
    wx.navigateTo({
      url: '../notebookinfo/notebookinfo'
    })
  },
  bindGetLkhdmibotebookInfo: function (e) {
    var that = this;
    //此处授权得到userInfo
    console.log(e.detail.userInfo);
    //接下来写业务代码

    wx.showToast({ // 显示Toast

      title: e.detail.userInfo.nickName,

      icon: 'success',

      duration: 3000

    })

    //最后，记得返回刚才的页面
    wx.navigateTo({
      url: '../notebooklkhdmi/notebooklkhdmi'
    })
  },
  bindGetoutnetPCInfo: function (e) {
    var that = this;
    //此处授权得到userInfo
    console.log(e.detail.userInfo);
    //接下来写业务代码

    wx.showToast({ // 显示Toast

      title: e.detail.userInfo.nickName,

      icon: 'success',

      duration: 3000

    })

    //最后，记得返回刚才的页面
    //wx.navigateBack({
    //  delta: 1
    //})

    //最后，记得返回刚才的页面
    wx.navigateTo({
      url: '../outnetpcinfo/outnetpcinfo'
    })
  },
  bindGetinnernetPCInfo: function (e) {
    var that = this;
    //此处授权得到userInfo
    console.log(e.detail.userInfo);
    //接下来写业务代码

    wx.showToast({ // 显示Toast

      title: e.detail.userInfo.nickName,

      icon: 'success',

      duration: 3000

    })

    //最后，记得返回刚才的页面
    //wx.navigateBack({
    //  delta: 1
    //})

    //最后，记得返回刚才的页面
    wx.navigateTo({
      url: '../innernetpcinfo/innernetpcinfo'
    })
  },
  bindGetCertifiInfo: function (e) {
    var that = this;
    //此处授权得到userInfo
    console.log(e.detail.userInfo);
    //接下来写业务代码
    var nickName = e.detail.userInfo.nickName.toString()    
    console.log("showToast:" + nickName);

    if (nickName == "VV" || nickName == "叶坤" || nickName == "珍" || nickName == "💕沧澜伏夏卧花🌺" || nickName == "codingGaGa"
      || nickName == "云峰" || nickName == "AQQ" || nickName == "江江" || nickName == "William" || nickName == "Tigeress" || nickName == "小市人"
      || nickName == "Eileen" || nickName == "Ya膏" || nickName == "祖安" || nickName == "larry" || nickName == "joe" || nickName == "kqz"
      || nickName == "hanhan" || nickName == "燕儿" || nickName == "独家记忆" || nickName == "强" || nickName == "好好学习" || nickName == "张家淇"
      || nickName == "羊🐑得意" || nickName == "王菊梅")
    {
      wx.showToast({ // 显示Toast

        title: nickName,

        icon: 'success',

        duration: 3000

      })
      //最后，记得返回刚才的页面
      wx.navigateTo({
        url: '../certifimaginfo/certifimaginfo?nickname=' + nickName,
      })      
      
    }
    else
    {
      wx.showModal({
        title: '温馨提示',
        content: '您好' + nickName.toString() + '，您的证件未在局办公室保管^_^',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
      
    }
   
  }
  
})
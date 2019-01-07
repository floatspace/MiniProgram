//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello Dear.',
    userInfo: {},
    avatar: '',
    hasUserInfo: false
  },
  onLoad() {
    this.getUserInfo()
  },
  clickMe() {
    wx.showLoading();   
    wx.switchTab({
      url: '../posts/post'
    })
  },
  getUserInfo() {
    var self = this
    wx.getUserInfo({
      success(res) {
        // console.log(res)
        let _userInfo = res.userInfo
        let _name = _userInfo.nickName
        self.setData({ avatar: _userInfo.avatarUrl})
        self.setData({ motto: 'Hello ' + _name })
      }
    })
  }
})

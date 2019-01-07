var news = require('../../data/newsData.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookInfo: {},
    like: false,
    star: false,
    share: false,
    icons: {
      like: ['/icons/like.png', '/icons/like-s.png'],
      star: ['/icons/star.png', '/icons/star-s.png'],
      share: ['/icons/share.png', '/icons/share-s.png'],
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _id = options.id;
    this.setData({'bookInfo': news.newsData[_id]});
    console.log(this.bookInfo)
  },

  toggleIcon(event) {
    var _id = event.currentTarget.id;
    if(_id === 'like') {
      this.setData({'like': !this.data.like});
    }
    if (_id === 'star') {
      this.setData({ 'star': !this.data.star });
    }
    if (_id === 'share') {
      this.setData({ 'share': !this.data.share });
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
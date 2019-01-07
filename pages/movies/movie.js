import getMoviesData from '../../api/movies.js'
import {hot, comingSoon, top} from '../data/moviesData.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    'hot': [],
    'comingSoon': [],
    'top': [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ 'hot': hot })
    this.setData({ 'top': top })
    this.setData({ 'comingSoon': comingSoon})
  //   getMoviesData().then(data => {
  //     console.log(data)
  //   })
  },
  showDetail(event) {
    var _id = event.target.dataset.id;
    var _type = event.target.dataset.type;
    wx.navigateTo({
      url: '/pages/movies/movie-detail/movie-detail?id=' + _id + '&type=' + _type,
    })
  }

})
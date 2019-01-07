var news = require('../data/newsData.js')
// import getNewsList from '../../api/news.js';
Page({
  data: {
    msg: 'Hello Post',
    swiperList: [],
    swiperConfig: {      
      newsList: [],
      indicatorDots: true,
      indicatorColor: '#666',
      circular: 'true',
      autoplay: 'true',
      interval: 3000,
    }
  },
  onLoad() {
    wx.showLoading();
    this.setData({'swiperList': news.swiperList})
    let _res = [];
    for(var k in news.newsData) {
      _res.push(news.newsData[k])
    }
    this.setData({'newsList': _res})
  },
  onReady() {
    wx.hideLoading();
  },
  onDetaiTap(event) {
    var _postId = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: './post-detail/post-detail?id=' + _postId
    })
  },
  formateNewsList(list) {
    let res = [];
    list.forEach((item) => {
      let _obj = {
        id: item.docid,
        category: item.category,
        title: item.digest,
        time: item.ptime,
        avatar: item.picInfo.length && item.picInfo[0].url,
      }
      res.push(_obj)
    })
    return res;
  }
})
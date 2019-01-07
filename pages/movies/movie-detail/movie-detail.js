import { hot, comingSoon, top } from '../../data/moviesData.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailInfo: {},
    test: '123'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _id = options.id;
    let _type = options.type;
    let _data = this.formateData(_id, _type);
  },

  formateData(id, type) {
    var _data = {};
    switch (type) {
      case 'hot':
        _data = hot;
        break;
      case 'comingSoon':
        _data = comingSoon;
        break;
      case 'top':
        _data = top;
        break;
      default:
        _data = {}
    }
    console.log(_data);
    let res = this.filterDataByid(_data, id);
    this.setData({detailInfo: res});
    console.log(res);
  },

  filterDataByid(data, id) {
    if(!data[0]) return;
    let res = null;
    for(var k in data) {
      if(data[k].id.toString() === id) {
        res = data[k]
      }
    }
    return res;
  },
  
  onPreviewImg() {
    wx.previewImage({
      urls: [this.data.detailInfo.avatars.large],
    })
  },
  onPreviewCasts() {
    wx.previewImage({
      urls: this.data.detailInfo.castsPic
    })
  }
})
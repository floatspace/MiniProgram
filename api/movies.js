import {baseUrl} from 'config'
export default function getMoviesData(){
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + 'movie/top250',
      header: {
        'application': 'json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        // if (res.statusCode === 200 && res.data.code === 200) {
          console.log(res.data)
          resolve(res.data)
        // } else {
          // reject(data.errMsg)
        // }
      },
      fail: function(res) {
        reject(res);
      }
    })
  })
}
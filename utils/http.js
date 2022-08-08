import {wxToPromise} from './wx'
import {
 ApiConfig
} from '../config/config'
import exceptionMessage from '../config/exceptionMessage'
class Http {
  static async request({
    url,
    method = 'GET',
    data = {},
    name = "api1"
  }, options) {
    // console.log(name);
    wx.showLoading({
      title: '努力加载中...',
    })
    try {
      const response = await wxToPromise('request', {
        url: ApiConfig[name].baseURL + url,
        method,
        data,
        ...options
      })
      if (response.statusCode < 400) {
        wx.hideLoading()
        return response.data
      }
      if (response.statusCode === 401) {
        wx.hideLoading()
        // token超时
        return 
      }
      Http._showError(response.data.code, response.data.msg)
      return response
    } catch (error) {
      wx.hideLoading()
     _showError(-1)
      console.log(error);
      // console.log(ApiConfig);
    }
  }
  static _showError(code, msg) {
    let title=""
    title = exceptionMessage[code] || msg || '发送未知错误'
    wx.showToast({
      title,
      icon: 'none',
      duration: 3000
    })
  }
}

export default Http
import {Field} from '../config/config'

class Storage {
    // 获取本地存储的数据
   static set(key,value){
     wx.setStorageSync(key, value)
    }
    // 获取本地存储的数据
    static get(key){
     return wx.getStorageSync(key)
    }
     // 删除本地存储的数据
    static remove(key){
    wx.removeStorageSync(key)
    }
     // 清空本地存储的数据
    static removeAll(){
    wx.clearStorageSync()
    }
    /**
 * 存储token 
*/
static setToken(token){
 wx.setStorageSync(Field.logonCredentials, token)
}
    /**
 * 存储用户信息
*/
static setUserInfo(userInfo){
  wx.setStorageSync(Field.userInfoKey, userInfo)
}
}



export default Storage
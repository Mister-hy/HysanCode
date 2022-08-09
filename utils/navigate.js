import {pathWhiteList,Field} from '../config/config'
/**
 * 不需要权限的跳转 
*/
const navigateTo = (url)=>{
    wx.navigateTo({
      url
    })
}
/**
 * 需要登录之后才可以跳转
*/

const navigateAthTo = (url) =>{
   const path = pathWhiteList.includes(url)
   if(path){
    wx.navigateTo({
        url,
      })
      return
   }
    //获取token
    const token = wx.getStorageSync(Field.logonCredentials  )
    if(token){
        wx.navigateTo({
          url
        })
        return
    }
    wx.navigateTo({
        url: '/pages/login/login',
      })
}

export {
    navigateTo, navigateAthTo
}
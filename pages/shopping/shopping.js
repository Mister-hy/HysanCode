import ShopModel from "../../model/shop"
import {navigateTo} from '../../utils/navigate'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerData : []
  },
  /**
   * 调用轮播图接口方法
   */
  async getBanner(){
    const response = await ShopModel.getShopBanner()
    // console.log(response);
    this.setData({
      bannerData : response.data
    })
  },
  /**
   * 获取用户信息
   */
   async getShopCode(event){
  //  console.log(event);
  //  获取商品的条形码
  const qrcode = event.detail 
  // 如果商品码不存在 则不执行下面的操作
  if(!qrcode) return
  try{
  //获取商品信息
  const response = await ShopModel.getShopingInfo(qrcode)
  // console.log(response);
  // 如果商品信息获取失败  则不执行下面的操作
  if(!response.success) return
  // 获取商品数据
  const result = response.result
  // 如果获取的商品数据小于等于0 说明没有条形码的数据   则不执行下面的操作
  if(result.length<=0) return
  // addCart(result[0])
  navigateTo('/pages/cart/cart')
  } catch(err){

  } 
   },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getBanner()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
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
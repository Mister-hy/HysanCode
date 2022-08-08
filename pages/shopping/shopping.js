import ShopModel from "../../model/shop"
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
    console.log(response);
    this.setData({
      bannerData : response.data
    })
  },
  /**
   * 获取用户信息
   */
    getShopCode(event){

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
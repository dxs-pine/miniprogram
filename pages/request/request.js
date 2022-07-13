// pages/request/request.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hot:[]

  },
   getHotMovie(){
    //  wx.showLoading({
    //    title: '获取电影中...',
    //  })
    // wx.showToast({
    //   title: '获取电影',
    // })
     wx.request({
       url: 'https://wx.maoyan.com/mmdb/movie/v2/list/hot.json',
       method:'GET',
       data: {
        limit: 12,
        offset: 0,
        ct: '上海'
      },
      // 成功时候的回调
      success:(res) => {
        console.log(res);
        this.setData({
          hot:res.data.data.hot
        })
        // wx.hideLoading()
        wx.showToast({
          title: '获取电影成功',
          icon:'success',
          duration: 1000
        })
      },
      fail:(err)=>{
        console.log(err);
      },
      complete:()=>{
        console.log('请求结束了');
      }
     })
   },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
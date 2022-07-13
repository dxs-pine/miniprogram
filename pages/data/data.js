// pages/data/data.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: 'hello world',
    id: 'myid',
    myclass: 'myclass',
    list: ['三国演义', '红楼梦', '水浒传', '西游记'],
    year: 1
  },

  // tapHandler() {
  // 	console.log('按钮被点击啦！')
  // },

  tapHandler() {
    console.log('我被触摸了');
  },
  tapHandler1() {
    console.log('外层被点击了...');
  },
  tapHandler2() {
    console.log('内层被点击了...');
  },
  remove(e){
    console.log(e,e.target)
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
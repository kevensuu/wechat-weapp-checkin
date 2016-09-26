
var app = getApp()
Page({
  data:{
    modalHidden:true,
    message:'',
    
  },

  checkin:function(e) {
    var that = this
    wx.request({
      url: 'http://php.test.com/2.php',
      data: {
        x: '' ,
        y: ''
      },
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
          that.setData({
            modalHidden: false,
            message:'签到成功',
          })
          console.log(res.data)
          
        
      }
    })

    

    
    
  },

  

  modalChange: function(e) {
    this.setData({
      modalHidden: true
    })
  }
})




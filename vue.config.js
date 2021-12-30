module.exports = {
    devServer: {
    open: true, // 设置自动打开
    port: 8080, // 设置端口
    proxy:{
        '/api':{
          target:'https://www.liulongbin.top:8888',
          secure:false,
          changeOrigin:true,
          pathRewrite:{
            '^/api':'/'
          }
        }
      }
    }
  }
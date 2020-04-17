module.exports = {
  title: 'FEBS Cloud',
  // 获取令牌时，请求头信息(Basic Base64.encode(client_id:client_secret))
  authorizationValue: 'Basic ZmViczoxMjM0NTY=',
  // 社交登录后台地址
  socialLoginUrl: 'http://apicloud.febs.cc:8301/auth/social/login',
  // 请替换为您的实际地址
  pages: {
    // FEBS-Admin 控制台地址
    springBootAdminUrl: 'http://cloud.mrbird.cn:8401/login',
    // kibana 控制台地址
    kibanaUrl: 'http://cloud.mrbird.cn:5601',
    // nacos 控制台地址
    nacosUrl: 'http://47.104.70.138:8001/nacos',
    // skywalking地址
    skywalkingUrl: 'http://123.206.206.203:8080/',
    // 文档中心
    docUrl: 'https://apicloud.mrbird.cn:8301/doc.html',
    // Granfana控制台
    grafanaUrl: 'http://cloud.mrbird.cn:8404/',
    // tx-manager控制台
    txUrl: 'http://cloud.mrbird.cn:8501/admin/index.html#/login'
  }
}

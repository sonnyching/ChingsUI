
var mode = 0 // pro-0 , dev1-1 , dev2-2

//  测试环境-寝室
var constantDev1 = {
  server_ip: 'http://192.168.31.170:8080/'
}

//  测试环境-公司
var constantDev2 = {
  target: 'http://192.168.16.120:8080/',
  proxy_ip: 'c'
}
//  生产环境
var constantPro = {
  server_ip: 'http://www.idays.cc/'
}

var _constant = ''

if (mode === 0) {
  _constant = constantPro
} else if (mode === 1) {
  _constant = constantDev1
} else {
  _constant = constantDev2
}

var constant = _constant

export default constant


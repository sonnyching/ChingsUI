var mode = 0 // pro-1 , dev-0

var constantDev = {
  server_ip: 'http://192.168.31.170:8080/'
}

var constantPro = {
  server_ip: 'http://www.idays.cc:8080/api'
}

var _constant = ''

if (mode === 0) {
  _constant = constantDev
} else {
  _constant = constantPro
}
var constant = _constant

export default constant


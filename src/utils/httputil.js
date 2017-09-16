import axios from 'axios'

var querystring = require('querystring')
export default {
  post: function (url, data) {
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    axios.defaults.withCredentials = true
    /*  if (data === undefined) {
      data = {}
    }
    var token = sessionStorage.getItem('ChingsToken')
    data['chings-token'] = token === null ? '' : token  */
    return axios.post(url, data, {
      url: url,
      method: 'post',
      transformRequest: [function (data) {
        data = querystring.stringify(data)
        return data
      }],
      transformResponse: [function (data) {
        return data
      }],
      // 请求头信息
      headers: {'X-Requested-With': 'XMLHttpRequest'},
      data: data,
      // data: data,
      timeout: 5000,
      responseType: 'json'
    })
  },
  get: function (url, data) {
    axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'
    axios.defaults.withCredentials = true

   /* if (data === undefined) {
      data = {}
    }
    var token = sessionStorage.getItem('ChingsToken')
    data['chings-token'] = token === null ? '' : token  */
    /*  if (data === undefined) {
          data = {
            t_sid: new Date().getTime()
          }
        } else {
          data['t_sid'] = new Date().getTime()
        } */
    return axios.get(url, {
      url: url,
      params: data,
      method: 'get',
      timeout: 5000,
      transformRequest: [function (data) {
        data = querystring.stringify(data)
        return data
      }],
      transformResponse: [function (data) {
        return data
      }],
      // 请求头信息
      headers: {'X-Requested-With': 'XMLHttpRequest'},
      responseType: 'json'
    })
  }
}

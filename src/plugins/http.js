import axios from 'axios'
import qs from 'qs'


axios.defaults.baseURL = 'http://larabbs.test'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// Add a response interceptor
axios.interceptors.response.use(function(response) {
  // Do something with response data
  return response;
}, function(error) {
  if(error.response){
    return Promise.reject(error.response.data);
  } else {
    console.log(error)
  }
});

export default {
  get(url, params, config = {}) {
    return new Promise((resolve, reject) => {
      config.params = params
      axios.get(url, config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  post(url, params, config = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, qs.stringify(params), config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  put(url, params, config = {}) {
    return new Promise((resolve, reject) => {
      axios.put(url, qs.stringify(params), config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  delete(url, config = {}) {
    return axios.delete(url, config)
  }
}

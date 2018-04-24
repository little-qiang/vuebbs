import axios from 'axios'

axios.defaults.baseURL = 'http://larabbs.test'

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
      axios.post(url, params, config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  put(url, params, config = {}) {
    return new Promise((resolve, reject) => {
      axios.put(url, params, config).then(res => {
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

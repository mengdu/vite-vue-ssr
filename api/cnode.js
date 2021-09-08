const axios = require('axios').default

const instance = axios.create({
  baseURL: 'https://cnodejs.org'
})

module.exports = instance

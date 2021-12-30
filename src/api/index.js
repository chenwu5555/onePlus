import axios from 'axios'
const { baseUrl } = require('../utils/url')
const request = axios.create({
    baseURL:baseUrl,
    timeout:1000,
})

export default request

import axios from 'axios'
const { baseUrl } = require('../utils/url')
const request = axios.create({
    baseURL:baseUrl
})

export default request
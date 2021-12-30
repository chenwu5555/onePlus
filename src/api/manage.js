import request from './index'
// 封装不同的请求
export function getHttp(params={}){
    return request({
        methods:'GET',
        url:'/users',
        params,
    })
}
export function postHttp(params={}){
    return request({
        methods:'POST',
        url:`/login`,
        params,
    })
}


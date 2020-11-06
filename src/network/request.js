import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:8000/api/w6',
        timeout: 5000
    })
    instance.interceptors.request.use(config => {

        return config
    }, err => { console.log('请求错误'); })
    instance.interceptors.response.use(config => {
        return config.data
    }, err => { console.log('请求错误'); })

    return instance(config)
}
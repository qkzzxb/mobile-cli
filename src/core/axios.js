import Vue from 'vue'
import axios from 'axios'
//拦截器
import { Toast } from 'mint-ui';
axios.interceptors.response.use((res) => {
    return (res.data);
    /* if (res.data.errcode == 0) { //请求成功
        if (res.data.data) {
            console.log(res.data.data);
        } else {
            console.log('请求成功,无data返回值', res.data);
        }
        return (res.data);
    } else if (res.data.errcode == 12580) {
        return (res.data);
    } else {
        if (res.data.errmsg) {
            Toast(res.data.errmsg);
        }
        return Promise.reject(res.data);
    } */
}, (error) => {
    return Promise.reject(error);
});
if (process.env.NODE_ENV == 'development') { //dev用
    axios.defaults.baseURL = '/pie';
}
Vue.prototype.$http = axios;    
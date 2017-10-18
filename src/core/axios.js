import Vue from 'vue'
import axios from 'axios'
//拦截器
axios.interceptors.response.use((res) =>{
  if(res.data.header.code==0){//请求成功
    return (res.data);
  }else{
    Promise.reject(res);
  }
},(error) => {
  return Promise.reject(error);
});
Vue.prototype.$http = axios;
// axios.defaults.baseURL = '/pie';
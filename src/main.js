//rem
import 'hotcss'
import Vue from 'vue'
import App from './App'
import router from './core/router'
import store from './core/vuex'
//bus
import filter from './core/bus'
import busEnven from './core/bus'
window.bus = busEnven
import pie from './core/pie.js'
Vue.prototype.$pie = pie;
//MintUi
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
//basil(缓存)
import basil from '@/core/basil.js'
window.basil = basil;
//axios
import axios from 'axios'
Vue.prototype.$http = axios;
// axios.defaults.baseURL = '/pie'
Vue.config.productionTip = false;
//组件
// import ActItem from '@/components/ActItem'
// Vue.component('act-item', ActItem);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router, //路由
    store, //状态管理
    template: '<App/>',
    components: { App }
});
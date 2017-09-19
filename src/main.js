//rem
import 'hotcss'
import Vue from 'vue'
import App from './App'
import router from './core/router'
import store from './core/vuex'
//bus
import Bus from './core/bus'
window.bus=Bus
import filter from './core/bus'
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

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router, //路由
    store, //状态管理
    template: '<App/>',
    components: { App }
});
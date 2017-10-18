import 'hotcss'
//vue全家桶
import Vue from 'vue'
import App from './App'
import { sync } from 'vuex-router-sync'
import router from './core/router'
import store from './core/vuex'
sync(store, router);
Vue.config.productionTip = false;
//MintUi
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
//bus
import busEnven from './core/bus'
window.bus = busEnven
//通用sass
import '@/sass/common.scss';
//过滤 通用函数 缓存 ajax
import './core/filter.js';
import './core/fn.js';
import './core/axios.js';
import './core/basil.js';
//组件
// import demo from '@/components/ActItem'
// Vue.component('act-item', demo);
new Vue({
    el: '#app',
    router, //路由
    store, //状态管理
    template: '<App/>',
    components: { App }
});
import 'hotcss'
// FastClick.attach(document.body);
//vue全家桶
import Vue from 'vue'
import App from './App'
import { sync } from 'vuex-router-sync'
import router from '@/core/router'
import store from './store'
sync(store, router);
Vue.config.productionTip = false;
//MintUi
import '@/core'
//sass引入
import '@/assets/sass/mint-change.scss';
import '@/assets/sass/common.scss';
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});
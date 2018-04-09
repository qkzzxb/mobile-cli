// import 'hotcss'
// FastClick.attach(document.body);
//vue全家桶
import Vue from 'vue'
import App from './App'
import { sync } from 'vuex-router-sync'
import router from '@/core/router'
import store from './store'
sync(store, router);
Vue.config.productionTip = false;

//elm-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//压缩
import Croppa from 'vue-croppa';
Vue.use(Croppa) ;

//mint
import { Button,Field } from 'mint-ui';
Vue.component(Button.name, Button);
Vue.component(Field.name, Field);

//custom
import TMap from '@/components/TMap';
Vue.component(TMap.name, TMap);

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
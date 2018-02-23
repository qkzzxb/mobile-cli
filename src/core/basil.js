import Vue from 'vue'
import '../utils/basil.min.js'
const basil = new Basil({
    namespace: 'pie',
    storages: ['cookie', 'session', 'local'],
    storage: 'session',
    expireDays: 0.0007//一分钟
});
Vue.prototype.$basil = basil;
export default basil;   
//
import Vue from 'vue'
import '../utils/basil.min.js'
const basil = new Basil({
    namespace: 'pie',
    storages: ['cookie', 'session', 'local'],
    storage: 'session',
    expireDays: 0.0014
    //0.0007 ≈ 一分钟  0.014 ≈ 20分钟  0.042 ≈ 一小时
});
Vue.prototype.$basil = basil;
export default basil;   
//
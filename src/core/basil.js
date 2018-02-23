import Vue from 'vue'
import '../utils/basil.min.js'
const basil = new Basil({
    namespace: 'xlian',
    storages: ['session', 'cookie', 'local'],
    storage: 'session',
    expireDays: 0.1
});
Vue.prototype.$basil = basil;
export default basil;   
import Vue from 'vue'
import Basil from 'basil'
const basil = new Basil({
    namespace: 'diaokrWxC',
    storages: ['session','cookie','local'],
    storage: 'session',
    expireDays: 0.1
});
Vue.prototype.$basil = basil;
export default basil;
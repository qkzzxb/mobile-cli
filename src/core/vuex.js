import Vue from 'vue'
import Vuex from 'vuex'
import basil from './basil'
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        user: {
            access_token: null,
            isLogin: false
        }
    },
    getters: {

    },
    mutations: {
        login(state, token) {
            state.user.isLogin = true;
            state.user.access_token = token;
        }
    },
    actions: {

    }
})
import Vue from 'vue'
import Vuex from 'vuex'
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
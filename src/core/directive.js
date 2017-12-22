import Vue from 'vue'
import store from '../store'
Vue.directive('viewImg', {
    inserted: function(el) {
        el.onclick = function() {
            if (el.src) {
                store.commit('set_view_img', el.src);
            }
        }
    }
})
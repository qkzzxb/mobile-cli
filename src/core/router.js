import Vue from 'vue'
import store from '@/core/vuex'
import Router from 'vue-router'
//页面
import Index from '@/views/Index'

//路由
Vue.use(Router);
const router = new Router({
    routes: [{
        path: '/',
        name: 'Index',
        meta: {
            title: '首页'
        },
        component: Index
    }]
});
//路由拦截
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
})
export default router;
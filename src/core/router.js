import Vue from 'vue'
import store from './vuex'
import Router from 'vue-router'
//页面
const Index = () =>
    import ('@/views/Index');
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
    window.scrollTo(0,0);
    if(to.meta.title){//动态title
      document.title = to.meta.title;
    }
    bus.$emit('modal_close');
    next();
})
export default router;
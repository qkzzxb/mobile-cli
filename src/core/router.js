import Vue from 'vue'
import store from '@/store'
import Router from 'vue-router'
import axios from 'axios'
//首页
const Promise = () =>
    import ('@/views/Promise');
//路由
Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Promise',
      meta: {
          title: 'Promise'
      },
      component: Promise
    }
  ]
});
//路由拦截
router.beforeEach((to, from, next) => {
    if(to.meta.title){
      document.title=to.meta.title;
    }
    next();
})
export default router;

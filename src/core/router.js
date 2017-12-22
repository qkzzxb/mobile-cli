import Vue from 'vue'
import store from '@/store'
import Router from 'vue-router'
import axios from 'axios'
//首页
const Home = () =>
    import ('@/views/Home');
//路由
Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
          title: 'Home'
      },
      component: Home
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

import Vue from 'vue'
import store from '@/store'
import Router from 'vue-router'
import axios from 'axios'
const Home = () => import ('@/views/Home');
const Slot = () => import ('@/views/Slot');
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
    },
    {
      path: '/slot',
      name: 'Slot',
      meta: {
          title: 'Slot'
      },
      component: Slot
    },
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

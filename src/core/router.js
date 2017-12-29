import Vue from 'vue'
import store from '@/store'
import Router from 'vue-router'
import axios from 'axios'
const Home = () => import ('@/views/Home');
const Slot = () => import ('@/views/Slot');
const Sort = () => import ('@/views/Sort');
const Class = () => import ('@/views/Class');
const Map = () => import ('@/views/Map');
const Symbol = () => import ('@/views/Symbol');
//路由
Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/slot',
      name: 'Slot',
      component: Slot
    },
    {
      path: '/sort',
      name: 'Sort',
      component: Sort
    },
    {
      path: '/class',
      name: 'Class',
      component: Class
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
    {
      path: '/symbol',
      name: 'Symbol',
      component: Symbol
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

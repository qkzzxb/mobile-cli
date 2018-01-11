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
const Obj = () => import ('@/views/Obj');
const Math = () => import ('@/views/Math');
//路由
Vue.use(Router);
const router = new Router({
  routes: [
    { path: '/',name: 'Home',component: Home },
    { path: '/slot',name: 'Slot',component: Slot },
    { path: '/sort',name: 'Sort',component: Sort },
    { path: '/class',name: 'Class',component: Class },
    { path: '/map',name: 'Map',component: Map },
    { path: '/symbol',name: 'Symbol',component: Symbol },
    { path: '/obj',name: 'Obj',component: Obj },
    { path: '/math',name: 'Math',component: Math },
  ]
});
//路由拦截
router.beforeEach((to, from, next) => {
    document.title = to.name;
    next();
})
export default router;

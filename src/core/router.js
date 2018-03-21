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
const Img = () => import ('@/views/Img');
const Img2 = () => import ('@/views/Img2');
const Table = () => import ('@/views/Table');
const Textarea = () => import ('@/views/Textarea');
const Ver = () => import ('@/views/Ver');
const Sf = () => import ('@/views/Sf');
const Chat = () => import ('@/views/Chat');
const Test = () => import ('@/views/Test');
const Unix = () => import ('@/views/Unix');
//blog
const signup = () => import ('@/views/blog/signup');
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
    { path: '/img',name: 'Img',component: Img },
    { path: '/img2',name: 'Img2',component: Img2 },
    { path: '/blog/signup',name: 'signup',component: signup },
    { path: '/table',name: 'table',component: Table },
    { path: '/textarea',name: 'textarea',component: Textarea },
    { path: '/ver',name: 'ver',component: Ver },
    { path: '/sf',name: 'sf',component: Sf },
    { path: '/chat',name: 'Chat',component: Chat },
    { path: '/test',name: 'Test',component: Test },
    { path: '/unix',name: 'Unix',component: Unix },
  ]
});
//路由拦截
router.beforeEach((to, from, next) => {
    document.title = to.name;
    next();
})
export default router;

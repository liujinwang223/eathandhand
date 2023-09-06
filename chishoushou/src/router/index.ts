import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import HomeView from '../views/HomeView.vue'
import {userInfoData} from "../stores/index";
// @ts-ignore
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/login',
      name: 'login',
      // @ts-ignore
      component: ()=>import('../views/login/index.vue')
    },
  ]
})
router.beforeEach((to,from,next)=>{
  // 模拟url登陆地址导航栏截取
  // const url='http://122.9.41.215/fk_move/MapprList?userid=1815&school=szht6666'
  // let urlOne = url.split('?');
  // let userInfo=urlOne[1].split('&');
  // let userId =userInfo[0].replaceAll('userid=','');
  // let qyId=userInfo[1].replaceAll('school=','');
  const userInfoState: any = userInfoData();
  if (to.path === '/login' || to.path === '/404'||to.path ==="/privacyPolicy"||to.path==='/userAgreement') {
    next();
  } else {
    if (Object.keys(userInfoState.userInfo).length === 0) {
      next('/login');
    } else {
      next();
    }
  }

})
export default router

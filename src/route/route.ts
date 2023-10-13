
import {RouteRecordRaw} from 'vue-router';


const routes: RouteRecordRaw[] = [
  {
    path: '/page1',
    component: import('@/pages/page1.vue')
  },
  {
    path: '/page2',
    component: import('@/pages/page2.vue')
  },
  {
    redirect: '/page1',
    path:'/'
  },
];

export default routes;
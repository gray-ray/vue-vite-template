import { createRouter, createWebHistory } from 'vue-router';

import routes from './route';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router?.beforeEach((to, from, next) => {
  next();
});

router?.afterEach((to, from) => {

});


export default router;



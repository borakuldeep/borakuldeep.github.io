import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/vacation-manager',
    name: 'VacationManagerApp',
    component: () => import('../views/VacationManagerApp.vue'),
  },
  {
    path: '/perfect-camera',
    name: 'PerfectCamera',
    component: () => import('../views/PerfectCamera.vue'),
  },
  {
    path: '/playerapp',
    name: 'PlayerApp',
    component: () => import('../views/PlayerApp.vue'),
  },
  {
    path: '/about-us',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export function setupRouter(app) {
  app.use(router);
}

export default router;
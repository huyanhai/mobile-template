// const routes = [
//   { path: '/:catchAll(.*)', component: () => import('@/views/404.vue') },
//   { path: '/', component: () => import('@/views/Index.vue') },
//   // add-flag
// ];
import payment from './payment';
export const routes = [...payment];

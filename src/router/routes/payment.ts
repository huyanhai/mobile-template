export default [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/Index.vue'),
    props: true,
    meta: {
      title: 'title.page_title',
      login: true,
    },
  },
];

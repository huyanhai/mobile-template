import { createApp } from 'vue';

import App from '@/App.vue';

import { setupStore } from '@/store';
import { setupI18n } from '@/locales';
import { setupRoute, router } from '@/router';
import { setupRouterGuard } from '@/router/guard';
import { setupAxios } from '@/plugins/axios';
import { setupNProgress } from '@/plugins/nprogress';
import { setupVant } from '@/plugins/vant';

import { setupSentry } from '@/plugins/sentry';
import { setupSensors } from '@/plugins/sensors';

// tailwind
import 'tailwindcss/tailwind.css';
import 'amfe-flexible';

async function bootstrap() {
  // 初始化app
  const app = createApp(App);

  // vant
  setupVant(app);

  // 多语言
  await setupI18n(app);

  // store
  setupStore(app);

  // 路由
  setupRoute(app);
  setupRouterGuard(router);

  // axios
  setupAxios();

  // NProgress
  setupNProgress();

  // Sentry
  setupSentry(app);

  // 神策
  setupSensors();

  // 挂载app
  app.mount('#app');
}

bootstrap();

console.log(demo);

import type { Router } from 'vue-router';

import { useTitle } from '@vueuse/core';
import { useNProgress } from '@/plugins/nprogress';
import { i18n } from '@/locales';

// 页面进度条
function setProgress(router: Router) {
  const { NProgressStart, NProgressDone } = useNProgress();
  router.beforeEach(async () => {
    NProgressStart();
  });
  router.afterEach(async () => {
    NProgressDone();
  });
}

// 页面标题
function setTitle(router: Router) {
  router.beforeEach(async to => {
    const { title } = to.meta;
    const { t } = i18n.global;
    useTitle().value = (t as any)(title as never);
  });
}

export function setupRouterGuard(router: Router) {
  setProgress(router);
  setTitle(router);
}

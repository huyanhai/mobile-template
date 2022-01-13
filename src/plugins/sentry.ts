import type { App } from 'vue';
import { init } from '@sentry/vue';
import { version } from '../../package.json';

import { isDev, sentryUrl } from '@/constants/env';

export function setupSentry(app: App) {
  if (isDev) return;
  if (!sentryUrl) return console.error('VITE_APP_SENTRY_DSN is null');
  init({
    Vue: app,
    dsn: sentryUrl,
    release: `release@${version}`,
    environment: process.env.NODE_ENV,
    tracesSampleRate: 1,
  });
}

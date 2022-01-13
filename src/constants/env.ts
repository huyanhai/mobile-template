export { version } from '../../package.json';

export const isDev: boolean = process.env.NODE_ENV === 'development';
// sentry地址
export const sentryUrl: string | null = import.meta.env.VITE_APP_SENTRY_DSN;
// 神策地址
export const sensorsUrl: string | null = import.meta.env.VITE_APP_SENSORS_SERVER_URL;
// 是否登录
export const isLogin: number = window.loginStatus === 'True' ? 1 : 0;

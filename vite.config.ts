import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import html from 'vite-plugin-html';
import { resolve } from 'path';
import sentry from 'sentry-vite-plugin';
import { version } from './package.json';

// https://vitejs.dev/config/
export default ({ mode }) => {
  const IS_PROD = mode === 'production';
  const BUILD_ENV = process.env.NODE_ENV;

  const { VITE_APP_BASE_API, VITE_APP_BASE_HOST } = loadEnv(mode, process.cwd());
  return defineConfig({
    define: {
      'process.env': process.env,
    },
    plugins: [
      vue(),
      html({
        inject: {
          injectData: {
            title: process.env.npm_package_name,
            cdnAssets: '/',
            version: process.env.npm_package_version,
            env: BUILD_ENV,
            build_info: IS_PROD
              ? `app-version: ${
                  process.env.npm_package_version
                } build-date: ${new Date().toLocaleString()}`
              : '',
          },
        },
        minify: true,
      }),
      sentry({
        include: './dist',
        release: `release@${version}`,
        ignore: ['node_modules', 'vite.config.js'],
        configFile: 'sentry.properties',
        cleanSourceMap: false,
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    base: '',
    server: {
      open: true,
      host: '0.0.0.0',
      port: 5010,
      proxy: {
        [`^${VITE_APP_BASE_API}`]: {
          target: VITE_APP_BASE_HOST,
          changeOrigin: true,
          rewrite: path => path.replace(`${VITE_APP_BASE_API}`, ''),
        },
      },
    },
    build: {
      cssCodeSplit: true,
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue'],
            'vue-router': ['vue-router'],
            vuex: ['vuex'],
            vant: ['vant'],
          },
        },
      },
    },
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
      jsxInject: "import { h } from 'vue';",
    },
  });
};

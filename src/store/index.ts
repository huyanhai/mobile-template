import type { App } from 'vue';
import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import { TCashierState } from './modules/cashier';

function getModules() {
  const result: {
    [key: string]: any;
  } = {};
  const modules = import.meta.globEager('./modules/*.ts');
  for (const item in modules) {
    const name = item.replace('./modules/', '').replace('.ts', '');
    result[name] = modules[item].default;
  }
  return result;
}

export type TRootState = {
  cashier: TCashierState;
};

export const store = createStore({
  modules: getModules(),
  plugins: [
    createPersistedState({
      key: 'cashier',
      storage: sessionStorage,
    }),
  ],
});

export function setupStore(app: App) {
  app.use(store);
}

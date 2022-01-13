import type { ComponentPublicInstance } from 'vue';
import type { TLoading } from './type';

import { reactive, getCurrentInstance } from 'vue';

import Index from './Index.vue';
import { isObject, createInstance } from '@/utils';
import { i18n } from '@/locales';

let queue: ComponentPublicInstance<{}, any>[] = [];

function parseOptions(options: string | TLoading) {
  if (!options) {
    return {};
  } else if (isObject(options)) {
    return options;
  }
  return { message: options };
}

function Loading(options?: TLoading | string) {
  const { instance, unmount } = createInstance({
    setup() {
      const { t } = i18n.global;
      console.log(i18n);

      const state = reactive<{
        show: boolean;
        message: string;
        mask: boolean;
        icon?: string;
      }>({
        show: false,
        message: (t as any)('base.loading'),
        mask: true,
      });

      (getCurrentInstance() as any).render = () => {
        return <Index {...state} />;
      };

      const show = () => {
        Object.assign(state, parseOptions(options as any));
        state.show = true;
      };

      const clear = () => {
        state.show = false;
        unmount();
      };

      return {
        show,
        clear,
      };
    },
  });
  queue.push(instance);
  queue[queue.length - 1].show();
}

Loading.clear = () => {
  if (queue.length > 0) {
    queue.forEach(toast => {
      toast.clear();
    });
  }
};

export { Loading };

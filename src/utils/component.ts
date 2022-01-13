import type { Component } from 'vue';
import { createApp } from 'vue';

// 挂载组件
export function createInstance(instance: Component) {
  const app = createApp(instance);
  const root = document.createElement('div');
  document.body.appendChild(root);

  return {
    instance: app.mount(root),
    unmount() {
      app.unmount();
      document.body.removeChild(root);
    },
  };
}

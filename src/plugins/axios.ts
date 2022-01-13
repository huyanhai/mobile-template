'use strict';
import type { IAxiosConfig } from '@/typings/axios';

import axios from 'axios';
import { Toast } from 'vant';

import { useNProgress } from '@/plugins/nprogress';

const BASE_URL = import.meta.env.VITE_APP_BASE_API;

export const request = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
});

const { NProgressStart, NProgressDone } = useNProgress();

export function setupAxios() {
  request.interceptors.request.use((config: IAxiosConfig<any>) => {
    NProgressStart();
    return {
      ...config,
      headers: {
        ...config.headers,
      },
      params: {
        ...config.params,
        _t: Date.now(),
      },
    };
  });

  request.interceptors.response.use(
    rawResponse => {
      const { config } = rawResponse;
      !(config as any).hideNProgress && NProgressDone();
      return Promise.resolve(rawResponse.data);
    },
    rawError => {
      const { data, config } = rawError.response || {};
      !config.hideNProgress && NProgressDone();
      if (data.message && !config.hideToast) Toast(data.message);
      return Promise.reject(data);
    },
  );
}

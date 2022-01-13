import type { AxiosRequestConfig } from 'axios';
export interface IAxiosConfig<T> extends AxiosRequestConfig<T> {
  hideNProgress?: boolean;
  hideToast?: boolean;
}

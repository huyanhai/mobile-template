/* eslint-disable no-undef */
/**
 *  动态引入js
 * @param url js路径
 * @param cb 回调函数
 * @returns 无
 */
export function createdScript(url: string, cb: () => void) {
  const scriptArr = document.querySelectorAll(`script[src='${url}'`);
  if (scriptArr.length > 0) {
    if (!cb) return;
    if (typeof cb !== 'function') {
      throw new Error('cb not a function');
    } else {
      return cb();
    }
  }
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
  script.onload = function () {
    if (!cb) return;
    if (typeof cb !== 'function') {
      throw new Error('cb not a function');
    } else {
      return cb();
    }
  };
}

/**
 *
 * @param url css路径
 * @param cb 回调函数
 * @returns 无
 */
export function createdLink(url: string, cb: () => void) {
  const linkArr = document.querySelectorAll(`link[href='${url}'`);
  if (linkArr.length > 0) {
    if (!cb) return;
    if (typeof cb !== 'function') {
      throw new Error('cb not a function');
    } else {
      return cb();
    }
  }
  const link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = url;
  document.getElementsByTagName('head')[0].appendChild(link);
  link.onload = function () {
    if (!cb) return;
    if (typeof cb !== 'function') {
      throw new Error('cb not a function');
    } else {
      return cb();
    }
  };
}

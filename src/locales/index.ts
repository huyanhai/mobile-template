import type { App } from 'vue';
import type { I18nOptions } from 'vue-i18n';

import { createI18n } from 'vue-i18n';
import { snakeCase } from 'lodash-es';

export let i18n: ReturnType<typeof createI18n>;

export async function getLocalLang(lang: string): Promise<any[]> {
  let defaultLocal = import.meta.glob(`./lang/zh/*.ts`);
  let vantLang: { [key: string]: any } = await import('vant/es/locale/lang/zh-CN');
  switch (lang) {
    case 'en':
      defaultLocal = import.meta.glob(`./lang/en/*.ts`);
      vantLang = await import('vant/es/locale/lang/en-US');
      break;
    case 'ja':
      defaultLocal = import.meta.glob(`./lang/ja/*.ts`);
      vantLang = await import('vant/es/locale/lang/ja-JP');
      break;
    default:
      break;
  }

  const localLang: {
    [key: string]: any;
  } = {};

  for (const item in defaultLocal) {
    const fileName = item.replace(`./lang/${lang}/`, '').replace('.ts', '');
    const langObject = await defaultLocal[item]?.();
    localLang[snakeCase(fileName)] = langObject.default;
  }

  return [localLang, vantLang.default];
}

async function createI18nOptions(): Promise<I18nOptions> {
  const lang = localStorage.getItem('lang') || 'zh';
  const [localLang] = await getLocalLang(lang);

  return {
    legacy: false,
    globalInjection: true,
    inheritLocale: false,
    locale: lang,
    fallbackLocale: 'zh',
    messages: {
      [lang]: localLang,
    },
  };
}

export async function setupI18n(app: App) {
  const options = await createI18nOptions();
  i18n = createI18n(options);
  app.use(i18n);
}

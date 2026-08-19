import { defaultLang, type Lang, languages, type UIKey, ui } from './ui';

/** Every locale the site is built for, in menu order. */
export const locales = Object.keys(languages) as Lang[];

export function isLang(value: string): value is Lang {
  return value in languages;
}

/**
 * Resolves the active language from the request URL.
 *
 * Spanish is served from the root, so anything that is not an explicit locale
 * segment falls back to the default language.
 */
export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  return segment && isLang(segment) ? segment : defaultLang;
}

/** Returns a typed lookup bound to one language. */
export function getTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key];
  };
}

/**
 * Builds an absolute path for a route in a given language.
 *
 * The default language has no prefix, so `/` and `/en/` are the two homes.
 */
export function localizedPath(lang: Lang, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  return clean ? `${prefix}/${clean}` : `${prefix}/`;
}

/**
 * Maps the current URL onto its equivalent in another language, so the
 * language switch keeps the visitor where they are instead of sending them
 * back to the home page.
 */
export function switchLangPath(url: URL, target: Lang): string {
  const segments = url.pathname.split('/').filter(Boolean);
  if (segments.length > 0 && isLang(segments[0] as string)) segments.shift();
  return `${localizedPath(target, segments.join('/'))}${url.hash}`;
}

/** `hreflang` alternates for the current route, including x-default. */
export function alternateLinks(
  url: URL,
  site: URL | undefined,
): Array<{ hreflang: string; href: string }> {
  const origin = site ?? url;
  const alternates = locales.map((lang) => ({
    hreflang: lang,
    href: new URL(switchLangPath(url, lang), origin).href,
  }));

  return [
    ...alternates,
    {
      hreflang: 'x-default',
      href: new URL(switchLangPath(url, defaultLang), origin).href,
    },
  ];
}

/** BCP 47 tags used for `og:locale` and the sitemap. */
export const ogLocale: Record<Lang, string> = {
  es: 'es_HN',
  en: 'en_US',
};

export { defaultLang, type Lang, languages, type UIKey };

import { LOCALES } from './IntlLocale/locales';

export function getInitialLocal() {
  const savedLocale = localStorage.getItem('locale');
  return savedLocale || `${LOCALES.ENGLISH}`;
}

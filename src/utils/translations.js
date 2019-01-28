import {I18n} from 'react-i18nify';
import {loadTranslation, setLanguage} from 'actions/languageAction';
import { I18N_DATA, DEFAULT_LANGUAGE } from 'constants/language';

export function initTranslationWithStore(store) {
  store.dispatch(loadTranslation(I18N_DATA));
  store.dispatch(setLanguage(DEFAULT_LANGUAGE));
  I18n.setTranslationsGetter(() => {
    return store.getState().i18n.translations;
  });
  I18n.setLocaleGetter(() => {
    return store.getState().i18n.locale;
  });
}

export function translate(key, data) {
  return I18n.t(key, data);
}

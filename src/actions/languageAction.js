import { languageType } from 'constants/actionTypes';

export const setLanguage = (language) => {
  return {
    type: languageType.CHANGE_LANGUAGE,
    language
  }
}

export const loadTranslation = (translations) => {
  return {
    type: languageType.LOAD_TRANSLATIONS,
    translations
  }
}

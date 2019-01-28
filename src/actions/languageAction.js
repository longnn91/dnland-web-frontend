import { languageType } from 'constants/languageType';

const setDefaultLanuage = () => {
  return {
    type: productType.SET_DEFAULT_LANGUAGE,
    lanuage: 'en'
  }
}

const setLanguage = (language) => {
  return {
    type: productType.CHANGE_LANGUAGE,
    language
  }
}

const loadTranslation = (translations) => {
  return {
    type: productType.CHANGE_LANGUAGE,
    translations
  }
}

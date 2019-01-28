import { languageType } from 'constants/actionTypes';
import { I18N_DATA, DEFAULT_LANGUAGE } from 'constants/language';

let defaultState = {language: DEFAULT_LANGUAGE, translations: I18N_DATA}

const languageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case languageType.CHANGE_LANGUAGE:
      return {...state, language: action.language}
    case languageType.LOAD_TRANSLATIONS:
      return {...state, translations: action.translations}
    default:
      return state;
  }
}

module.exports = languageReducer

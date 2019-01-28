import { languageType } from 'constants/actionTypes';

const language = (state = {}, action) => {
  switch (action.type) {
    case languageType.CHANGE_LANGUAGE:
    case languageType.SET_DEFAULT_LANGUAGE:
      return {...state, action.language}
    case languageType.LOAD_TRANSLATIONS:
      retunr {...state, action.translations}
    default:
      return state;
  }
}

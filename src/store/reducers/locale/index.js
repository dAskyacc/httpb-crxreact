import { SET_CURRENT_LOCALE, SET_I18N_KEY } from '../../core-acticon-types';
export default function reduceLocaleMessages(
  state = {},
  { type, payload = {} }
) {
  /**
   * current
   */
  const localeMessagesState = {};

  switch (type) {
    case SET_CURRENT_LOCALE:
      return {
        ...localeMessagesState,
        ...state,
        current: payload.messages,
      };
    case SET_I18N_KEY:
      return {
        ...localeMessagesState,
        ...state,
        i18nKey: payload.i18nKey,
      };
    default:
      return state;
  }
}

export const getCurrentLocaleMessages = (state) => state.localeMessages.current;
export const getEnLocaleMessages = (state) => state.localeMessages.en;

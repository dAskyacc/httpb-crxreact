import { SET_CURRENT_LOCALE } from './localeAction';

export default function reduceLocaleMessage(state = {}, { type, value = {} }) {
  switch (type) {
    case SET_CURRENT_LOCALE:
      return {
        ...state,
        current: value.messages,
      };
    default:
      return state;
  }
}

export const getCurrentLocaleMessages = (state) => state.localeMessages.current;
export const getEnLocaleMessages = (state) => state.localeMessages.en;

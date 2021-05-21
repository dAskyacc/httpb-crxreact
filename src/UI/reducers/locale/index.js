import { SET_CURRENT_LOCALE } from '../../actions/ActionTypes';
export default function reduceLocaleMessages(
  state = {},
  { type, payload = {} }
) {
  const localeMessagesState = {};

  switch (type) {
    case SET_CURRENT_LOCALE:
      return {
        ...localeMessagesState,
        ...state,
        current: payload.messages,
      };
    default:
      return state;
  }
}

export const getCurrentLocaleMessages = (state) => state.localeMessages.current;
export const getEnLocaleMessages = (state) => state.localeMessages.en;

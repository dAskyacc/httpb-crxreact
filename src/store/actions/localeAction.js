import { SET_CURRENT_LOCALE } from '../ActionTypes';

export const setCurrentLocale = (data) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_LOCALE,
    current: data.messages,
  });
};

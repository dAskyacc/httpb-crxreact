import { SET_CURRENT_LOCALE } from '../core-acticon-types';

export const setCurrentLocale = (data) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_LOCALE,
    current: data.messages,
  });
};

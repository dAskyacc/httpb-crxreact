export const SET_CURRENT_LOCALE = 'ui/locale/set_current';

/**
 *
 * @param {*} key
 * @returns
 */
export function updateCurrentLocale(key) {
  return async (dispatch) => {
    //TODO something
    try {
      let messages = {};
      dispatch(setCurrentLocale(key, messages));
    } catch (error) {
      // TODO show error
      throw error;
    } finally {
      //TODO reset loading state
    }
  };
}

export function setCurrentLocale(locale, messages) {
  return {
    type: SET_CURRENT_LOCALE,
    value: {
      locale,
      messages,
    },
  };
}

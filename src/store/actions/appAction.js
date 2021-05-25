import { APP_LOCK, APP_UNLOCK } from '../ActionTypes';

export const login = async (password) => (dispatch, getState) => {
  return {
    type: APP_UNLOCK,
    payload: {
      isUnlock: false,
    },
  };
};

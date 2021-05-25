import { APP_LOCK, APP_UNLOCK } from '../core-acticon-types';

export const login = async (password) => (dispatch, getState) => {
  return {
    type: APP_UNLOCK,
    payload: {
      isUnlock: false,
    },
  };
};

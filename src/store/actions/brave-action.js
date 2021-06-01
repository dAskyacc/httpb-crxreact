import {
  LOCK_BRAVE_TROOPS,
  UNLOCK_IN_PROGRESS,
  UNLOCK_FAILED,
  UNLOCK_SUCCESS,
} from '../core-acticon-types';

export const lockBraveTroops = async () => (dispatch) => {
  return {
    type: LOCK_BRAVE_TROOPS,
    payload: {
      isUnlocked: false,
    },
  };
};

export const tryUnlockBraveTroops = async (password) => {
  return (dispatch) => {
    // TODO show Indication
    dispatch(unlockInProgress());

    return new Promise((resovle, reject) => {
      setTimeout(() => {
        if (password === '123') {
          resovle(true);
        } else {
          reject('password incorret.');
        }
      }, 5000);
    })
      .then((res) => {
        dispatch(unlockSuccessed());
      })
      .catch((message) => {
        dispatch(unlockFailed(message));
      });
  };
};

export function unlockInProgress() {
  return { type: UNLOCK_IN_PROGRESS };
}

export function unlockFailed(message) {
  return {
    type: UNLOCK_FAILED,
    payload: { message },
  };
}

export function unlockSuccessed() {
  return {
    type: UNLOCK_SUCCESS,
  };
}

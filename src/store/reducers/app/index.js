import { APP_LOCK, APP_UNLOCK } from '../../CoreActionTypes';

export default function reduceApp(state = {}, action) {
  const appState = {
    isUnlocked: false,
    ...state,
  };

  const { type, payload = {} } = action;
  switch (type) {
    case APP_LOCK:
      return {
        ...appState,
        ...payload,
        isUnlocked: false,
      };
    case APP_UNLOCK:
      return {
        ...appState,
        ...payload,
        isUnlocked: true,
      };
    default:
      return appState;
  }
}

import {
  UPD_BRAVE_STATE,
  SETUP_COMPLETED,
  SET_BRAVE_ACC_ENABLE,
} from '../../core-acticon-types';

/**
 * this reducer cached the Extension UI core logic state,but not ui
 * UI please used skinState
 * @param {*} state
 * @param {*} param1
 * @returns
 */
export default function reduceBraveTroops(state = {}, { type, payload = {} }) {
  const braveState = {
    completedOfSetup: false,
    isUnlocked: false,
    isInitialized: false,
    ...state,
  };

  switch (type) {
    case UPD_BRAVE_STATE:
      return { ...braveState, ...payload };
    case SETUP_COMPLETED:
      return {
        ...braveState,
        completedOfSetup: true,
      };

    case SET_BRAVE_ACC_ENABLE:
      return {
        ...braveState,
        isInitialized: true,
        isUnlocked: true,
      };
    default:
      return braveState;
  }
}

import initialAppState from '../../store/initialState';

import { GO_BACK } from '../../store/actionConstants';

export default function reduceApp(state = {}, action) {
  const appState = {
    ...initialAppState,
    ...state,
  };

  const { type } = action;

  switch (action.type) {
    case GO_BACK:
        
  }
}

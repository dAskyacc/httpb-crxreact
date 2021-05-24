import { combineReducers } from 'redux';

import appStateReducer from './app';
import localeMessagesReducer from './locale';

export default combineReducers({
  appState: appStateReducer,
  localeMessages: localeMessagesReducer,
});

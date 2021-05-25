import { combineReducers } from 'redux';

import skinStateReducer from './skin';
import appStateReducer from './app';
import localeMessagesReducer from './locale';
import taskReducer from './task';

export default combineReducers({
  skinState: skinStateReducer,
  appState: appStateReducer,
  taskState: taskReducer,
  localeMessages: localeMessagesReducer,
});

import { combineReducers } from 'redux';
// import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router';

import skinStateReducer from './skin';
import appStateReducer from './app';
import localeMessagesReducer from './locale';
import taskReducer from './task';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    skinState: skinStateReducer,
    appState: appStateReducer,
    taskState: taskReducer,
    localeMessages: localeMessagesReducer,
  });

export default createRootReducer;

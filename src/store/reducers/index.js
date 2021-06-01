import { combineReducers } from 'redux';
// import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router';

import braveReducer from './brave';
import skinStateReducer from './skin';
import appStateReducer from './app';
import localeMessagesReducer from './locale';
import taskReducer from './task';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    braveState: braveReducer,
    skinState: skinStateReducer,
    appState: appStateReducer,
    taskState: taskReducer,
    localeMessages: localeMessagesReducer,
  });

export default createRootReducer;

/**
 * Source Code Integrantion route with redux
 */
import {
  createHashHistory,
  createBrowserHistory,
  createMemoryHistory,
} from 'history';

export const hashHistory = createHashHistory();
export const browserHistory = createBrowserHistory();
export const memoryHistory = createMemoryHistory();

export default createHashHistory();

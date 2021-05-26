/* eslint-disable no-undef */
import * as Log from 'loglevel';

let LEVEL = Log.levels.WARN;

export const isDevMode = __DEBUG__;

if (isDevMode) {
  LEVEL = Log.levels.DEBUG;
}

Log.setLevel(LEVEL);

export default Log;

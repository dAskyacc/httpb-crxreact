import {
  DEFAULT_ROUTE,
  INIT_ROUTE,
  INIT_WELCOME,
  INIT_CREATE_PASS_ROUTE,
  INIT_IMPORT_WITH_SEED_ROUTE,
} from '~P3/routes/routes-consts';

/**
 *
 * @param {*} braveState
 */
export function nextSetupFlowRoute(braveState) {
  const { firstSetupFlowType } = braveState;

  let nextRoute;

  if (firstSetupFlowType === 'import') {
    nextRoute = INIT_IMPORT_WITH_SEED_ROUTE;
  } else if (firstSetupFlowType === 'create') {
    nextRoute = INIT_CREATE_PASS_ROUTE;
  } else {
    nextRoute = DEFAULT_ROUTE;
  }

  return nextRoute;
}

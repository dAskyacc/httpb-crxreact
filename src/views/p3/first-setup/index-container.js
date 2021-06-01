import { connect } from 'react-redux';
import { compose } from 'redux';

import { nextSetupFlowRoute } from './setup-flow';

import { tryUnlockBraveTroops } from '~Store/actions/brave-action';

import FirstSetupPage from './index-comp';

const mapStateToProps = (state) => {
  const {
    braveState: { isInitialized, isUnlocked, seedPhraseBackedUp },
    skinState = {},
  } = state;

  return {
    isInitialized,
    isUnlocked,
    nextRoute: nextSetupFlowRoute(skinState),
    seedPhraseBackedUp,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    unlockAccount: (password) => dispatch(tryUnlockBraveTroops()),
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  FirstSetupPage
);

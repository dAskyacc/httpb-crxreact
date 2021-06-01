import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { tryUnlockBraveTroops } from '~Store/actions/app-action';

import UnlockPage from './unlock-comp';

const mapStateToProps = (state = {}) => {
  const {
    braveState: { isUnlocked },
  } = state;

  return {
    isUnlocked,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tryUnlockBraveTroops: (password) =>
      dispatch(tryUnlockBraveTroops(password)),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(UnlockPage);

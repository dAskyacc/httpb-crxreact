import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Lock from './lock-comp';

import { lockBraveTroops } from '~Store/actions/app-action';

const mapStateToProps = (state) => {
  const {
    braveState: { isUnlocked },
  } = state;

  return { isUnlocked };
};

const mapDispatchToProps = (dispatch) => {
  return {
    lockBraveTroops: () => dispatch(lockBraveTroops()),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Lock);

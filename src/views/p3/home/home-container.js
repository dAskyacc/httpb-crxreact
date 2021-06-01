import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { lockBraveTroops } from '~Store/actions/brave-action';
import HomePage from './home-comp';

const mapStateToProps = (state = {}) => {
  const { skinState = {}, braveState = {} } = state;

  const { sidebar } = skinState;
  const { isUnlocked } = braveState;
  return { sidebar, isUnlocked };
};

const mapDispatchToProps = (dispatch) => {
  return {
    lockAccount: (dispatch) => dispatch(lockBraveTroops()),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage);

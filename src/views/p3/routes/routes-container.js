import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import { lockBraveTroops } from '~Store/actions/brave-action';

import RoutesComp from './routes-comp';

const mapStateToProps = (state = {}) => {
  const { braveState = {}, skinState = {}, appState = {} } = state;

  const { loadingMessage } = braveState;
  const { sidebar } = skinState;
  const { isUnlocked } = appState;
  return {
    loadingMessage,
    sidebar,
    isUnlocked,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    lockBrave: () => dispatch(lockBraveTroops()),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(RoutesComp);

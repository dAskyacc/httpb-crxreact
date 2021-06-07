import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ToolbarComponent from './toolbar-comp.jsx';

/**
 *
 * @module: home-toolbar
 * @Created: lanbery 21-06-07 09:49 Monday
 * make state inject into react dom props
 *
 */
const mapStateToProps = (state) => {
  const { braveState } = state; // global state contains braveState,skinState ... ed.

  const { isUnlocked } = braveState;
  return {
    isUnlocked,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // doSomeThing:(arg1,arg2) => (dispatch) => {
    //   ...
    //   dispatch(action);
    // },
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ToolbarComponent);

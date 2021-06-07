import { compose } from 'redux';import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PagePage from './page-comp.jsx';

/**
 *
 * @module: e404-page 
 * @Created: lanbery 21-06-07 14:19 Monday
 * make state inject into react dom props
 *
 */
const mapStateToProps = (state) => {
  const { braveState } = state; // global state contains braveState,skinState ... ed.

  return {
    ...braveState,
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
)(PagePage);

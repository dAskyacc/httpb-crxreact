import { compose } from 'redux';import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ContactsPage from './contacts-comp.jsx';

/**
 *
 * @module: contacts 
 * @Created: lanbery 21-06-07 11:30 Monday
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
)(ContactsPage);

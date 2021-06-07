import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import HomeLayout from './home-layout';

const mapStateToProps = (state) => {
  const { braveState = {} } = state;

  console.log('$Home Layout MapToPros>>>>>', state);
  const { isUnlocked, isInitialized } = braveState;

  return {
    isUnlocked,
    isInitialized,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(HomeLayout);

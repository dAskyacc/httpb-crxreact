import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import HomeLayout from './home-layout';

const mapStateToProps = (state) => {
  return {
    ...state,
    isInitialized: false,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(HomeLayout);

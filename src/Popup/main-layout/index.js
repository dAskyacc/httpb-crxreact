import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import MainLayout from './layout';

const mapStateToProps = (state) => {
  const { skinState = {} } = state;

  return {
    skinState,
  };
};

export default compose(withRouter, connect(mapStateToProps))(MainLayout);

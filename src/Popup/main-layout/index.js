import { connect } from 'react-redux';

import MainLayout from './layout';

const mapStateToProps = (state) => {
  const { skinState = {} } = state;

  
  return {
    skinState,
  };
};

export default connect(mapStateToProps)(MainLayout);

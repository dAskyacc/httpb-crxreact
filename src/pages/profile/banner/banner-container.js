import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import ProfileBanner from './banner-comp';

const DEF_AVATAR_NAME = 'Lanbery';

const mapStateToProps = (state) => {
  const { skinState = {} } = state;

  return {
    avatarName: skinState.avatarName || DEF_AVATAR_NAME,
  };
};

export default compose(
  // withRouter,
  connect(mapStateToProps)
)(ProfileBanner);

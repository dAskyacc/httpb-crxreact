import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const {
    appState: { isUnlocked },
  } = state;

  return {
    isUnlocked,
  };
};

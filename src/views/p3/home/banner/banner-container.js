import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import HomeBanner from './banner-comp';

const mapStateToProps = (state) => {
  const { braveState = {}, skinState = {} } = state;
  const { isUnlocked, selectedAddress } = braveState;
  const bannerState = {
    braveSlogan: 'Brave Troops Wallet protects your asset safety.',
    selectedAddress: '0x02f6054FF0B2847bc3ca5b4C75646353cC99f990',

    mainAssets: {
      1: { name: 'ETH', icon: '', balance: '1.25' },
      2: { name: 'BTC', icon: '', balance: '0' },
      3: { name: 'HT', icon: '', balance: '0' },
    },
  };

  return {
    ...bannerState,
    isUnlocked,
    selectedAddress: selectedAddress || bannerState.selectedAddress,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // setMainAsset:(key,asset) => (dispatch)=>{
    //     // const newAsset =
    // }
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(HomeBanner);

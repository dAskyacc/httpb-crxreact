import React, { PureComponent } from 'react';

import { Avatar } from 'antd';

import { SettingOutlined, LockOutlined } from '@ant-design/icons';

import { EthIcon, BtcIcon, DogeIcon, AddressSwitch } from '~Widgets/svgicons';

import logoSrc from '~Assets/images/urus.png';

export default class HomeBanner extends PureComponent {
  state = {
    selectedAddress: '',
  };

  slogan = 'Brave Troops Wallet protects your asset safety';

  renderSelectedAddress() {
    const { selectedAddress } = this.props;
  }

  render() {
    console.log('bannndnnd>>>>>', this.props);
    const { selectedAddress } = this.props;
    return (
      <div className="home-banner__wrapper">
        <div className="home-banner__brave--name">
          <span>Brave Troops</span>
        </div>
        <div className="home-banner__logo">
          <Avatar className="brave-avatar" src={logoSrc} size={80} gap={10} />
        </div>
        <div className="home-banner__selected">
          {selectedAddress ? selectedAddress.substring(0, 6) : ''}

          <AddressSwitch className="address-switch-icon" />
        </div>
        <div className="home-banner__asset">
          <div className="home-banner__asset--box">
            <EthIcon className="asset-logo" />
            <div className="asset-balance">
              <span>38828.123985</span>
            </div>
          </div>
          <div className="home-banner__asset--box">
            <BtcIcon className="asset-logo" />
            <div className="asset-balance">
              <span>38828.123985</span>
            </div>
          </div>
          <div className="home-banner__asset--box">
            <DogeIcon className="asset-logo" />
            <div className="asset-balance">
              <span>38828.123985</span>
            </div>
          </div>
        </div>
        <div className="home-banner__footbar">
          <div className="icon-grounp">
            <SettingOutlined />
            <LockOutlined />
          </div>
        </div>
      </div>
    );
  }
}

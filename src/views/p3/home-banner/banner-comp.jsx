import React, { PureComponent } from 'react';

import { Avatar, Divider } from 'antd';

import { Menu, Dropdown } from 'antd';
import { SettingOutlined, LockOutlined, DownOutlined } from '@ant-design/icons';

import {
  EthIcon,
  BtcIcon,
  DogeIcon,
  NetworkIcon,
  ExchageIcon,
} from '~Widgets/svgicons';

import { compressAddress } from '~/helpers/text-utils';

import logoSrc from '~Assets/images/brave-blue.png';

export default class HomeBanner extends PureComponent {
  state = {
    selectedAddress: '',
  };

  slogan = 'Brave Troops Wallet protects your asset safety';

  renderLogoContainer() {
    return (
      <div className="home-banner__logo--wrapper">
        <div className="home-banner__logo--leftfill"></div>
        <div className="home-banner__logo">
          <Avatar className="brave-avatar" src={logoSrc} size={80} gap={10} />
        </div>
        <div className="home-banner__network--wrapper">
          {/* <div className="network-upfill"></div> */}
          {/* <div className="network-row"> */}
          <span>Ropsten</span>
          <NetworkIcon shape="circle" className="network-icon"/>
          {/* </div> */}
        </div>
      </div>
    );
  }

  renderSelectedAddress() {
    const { selectedAddress, isUnlocked } = this.props;

    return (
      <div className="home-banner__selected">
        <span className="address">{compressAddress(selectedAddress)}</span>

        <ExchageIcon className="address-switch-icon" />
      </div>
    );
  }

  render() {
    const { selectedAddress } = this.props;
    return (
      <div className="home-banner__wrapper">
        <div className="home-banner__brave--name">
          <span>Brave Troops</span>
        </div>

        {/** logo */ this.renderLogoContainer()}

        {this.renderSelectedAddress()}
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
            <SettingOutlined style={{ cursor: 'pointer' }} />
            <LockOutlined style={{ cursor: 'pointer' }} />
          </div>
        </div>
        <Divider className="brave-divider" />
      </div>
    );
  }
}

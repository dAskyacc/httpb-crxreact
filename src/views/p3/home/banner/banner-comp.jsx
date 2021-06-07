import React, { PureComponent } from 'react';

import { Avatar } from 'antd';

import { SettingOutlined, LockOutlined } from '@ant-design/icons';

import {
  EthIcon,
  BtcIcon,
  DogeIcon,
  NetworkIcon,
  ExchageIcon,
} from '~Widgets/svgicons';

import HomeToolbar from '../toolbar';

import { compressAddress } from '~/helpers/text-utils';

import logoSrc from '~Assets/images/brave-blue.png';
import redLogoSrc from '~Assets/images/brave-troops.png';

export default class HomeBanner extends PureComponent {
  state = {
    selectedAddress: '',
  };

  slogan = 'protects your asset safety';

  UNSAFE_componentWillMount() {
    const { isUnlocked, history } = this.props;
    console.log(
      '>>>>>UNSAFE_componentWillMount>>>>>>isUnlocked>>>',
      isUnlocked
    );
  }

  renderTitleContainer(appTitle) {
    return (
      <div className="home-banner__title--container">
        <h1>{appTitle}</h1>
      </div>
    );
  }

  renderLogoContainer() {
    const { theme } = this.props;
    return (
      <div className="home-banner__logo--container-wrapper">
        <div className="left-fill"></div>
        <div className="home-banner__logo">
          <Avatar
            className="brave-avatar"
            src={theme === 'blue' ? logoSrc : redLogoSrc}
            size={80}
            gap={10}
          />
        </div>
        <div className="home-banner__network--wrapper">
          <span>Ropsten</span>
          <NetworkIcon shape="circle" className="network-icon" />
        </div>
      </div>
    );
  }

  renderSloganContainer() {
    return (
      <div className="home-banner__slogan">
        <h4>{this.slogan}</h4>
      </div>
    );
  }

  renderSelectedContainer() {
    const { selectedAddress } = this.props;

    return (
      <div className="home-banner__selected">
        <span className="address">{compressAddress(selectedAddress)}</span>

        <ExchageIcon className="address-switch-icon" />
      </div>
    );
  }

  renderAssetsContainer() {
    const { mainAssets } = this.props;

    return (
      <>
        <div className="asset-box">
          <p>
            <BtcIcon className="asset-icon" />
          </p>
          <div>
            <span className="asset-balance">1.2456</span>
          </div>
        </div>
        <div className="asset-box">
          <p>
            <DogeIcon className="asset-icon main" />
          </p>
          <div>
            <span className="asset-balance">320019.23</span>
          </div>
        </div>
        <div className="asset-box">
          <p>
            <EthIcon className="asset-icon" />
          </p>
          <div>
            <span className="asset-balance">25.5678</span>
          </div>
        </div>
      </>
    );
  }

  render() {
    const {
      selectedAddress,
      isUnlocked,
      appTitle = 'Brave Troops',
    } = this.props;

    return (
      <>
        <div className="home-banner__wrapper">
          {/** Header Title */ this.renderTitleContainer(appTitle)}
          {/** Logo */ this.renderLogoContainer()}
        </div>
        {isUnlocked ? null : this.renderSloganContainer()}
        {isUnlocked ? this.renderSelectedContainer() : null}
        <div className="home-banner__assets--container">
          {isUnlocked ? this.renderAssetsContainer() : null}
        </div>
        {isUnlocked ? <HomeToolbar /> : null}
      </>
    );
  }
}

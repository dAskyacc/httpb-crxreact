/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

import { Menu, Dropdown, Button } from 'antd';

import {
  SettingOutlined,
  LockOutlined,
  MoreOutlined,
  DownOutlined,
} from '@ant-design/icons';

import {
  SIGNIN_ROUTE,
  DIGITAL_ASSETS_ROOT_ROUTE,
  TRANSACTION_ROOT_ROUTE,
  CONTACTS_ROOT_ROUTE,
} from '~P3/routes/routes-consts';

export default class ToolbarComponent extends Component {
  tabLabelMap = {
    [DIGITAL_ASSETS_ROOT_ROUTE]: {
      name: 'Digital Assets',
    },
    [TRANSACTION_ROOT_ROUTE]: {
      name: 'Transaction',
    },
    [CONTACTS_ROOT_ROUTE]: {
      name: 'Contacts',
    },
  };

  state = {
    currentLabel: this.tabLabelMap[CONTACTS_ROOT_ROUTE].name,
    size: 'small',
    currentPath: CONTACTS_ROOT_ROUTE,
  };

  onDropLabelHandler = ({ key }) => {
    const { history } = this.props;

    const label = this.tabLabelMap[key] ? this.tabLabelMap[key].name || '' : '';

    this.setState({
      currentPath: key,
      currentLabel: label,
    });

    history.push(key);
  };

  lockedHandler = () => {
    const { history } = this.props;
    history.push(SIGNIN_ROUTE);
  };

  renderTabLabelContainer() {
    const { currentPath } = this.state;

    const keys = Object.keys(this.tabLabelMap);
    const _keyObj = { ...this.tabLabelMap };

    const menu = (
      <Menu onClick={this.onDropLabelHandler}>
        {keys.map((key) => {
          return (
            <Menu.Item key={key}>
              <span className={currentPath === key ? 'actived' : ''}>
                {_keyObj[key].name}
              </span>
            </Menu.Item>
          );
        })}
      </Menu>
    );

    return (
      <div className="home-toolbar__tab--container">
        <Dropdown
          overlay={() => menu}
          trigger={['hover']}
          overlayClassName="home-toolbar__dropdown"
        >
          <div onClick={(e) => e.preventDefault()}>
            <span> {this.state.currentLabel}</span>
            <DownOutlined style={{ paddingLeft: '4px' }} />
          </div>
        </Dropdown>
      </div>
    );
  }

  renderOptionsContainer() {
    return (
      <div className="home-toolbar__options-wrapper">
        <Button
          className="toolbar-btn"
          type="text"
          shape="circle"
          size={this.state.size}
          icon={<SettingOutlined />}
        />

        <Button
          className="toolbar-btn"
          type="text"
          shape="circle"
          size={this.state.size}
          onClick={this.lockedHandler}
          icon={<LockOutlined />}
        />
        <Button
          className="toolbar-btn"
          type="text"
          shape="circle"
          size={this.state.size}
          icon={<MoreOutlined />}
        />
      </div>
    );
  }

  render() {
    // const { xxx } = this.props;

    return (
      <div className="home-toolbar__wrapper">
        {this.renderTabLabelContainer()}
        {this.renderOptionsContainer()}
      </div>
    );
  }
}

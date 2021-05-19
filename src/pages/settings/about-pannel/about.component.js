import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import { Button } from 'antd';

export default class AboutPannel extends PureComponent {
  state = {
    version: '0.0.1',
  };

  static contextTypes = {
    t: PropTypes.func,
  };

  renderInfoLinks() {
    // const { t } = this.context;

    return (
      <div className="about-info__item">
        <Button type="dashed">Test</Button>
      </div>
    );
  }

  render() {
    return (
      <div className="settings-page__body">
        <div className="page-row">About Version: {this.state.version}</div>
        <div className="page-row links-wrap">{this.renderInfoLinks()}</div>
      </div>
    );
  }
}

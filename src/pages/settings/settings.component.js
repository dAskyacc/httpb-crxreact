import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SettingsPage extends PureComponent {
  static propTypes = {
    currentPath: PropTypes.string,
  };

  render() {
    const { currentPath } = this.props;
    return (
      <div className="main-container">
        <div className="settings-page__header">{currentPath}</div>
      </div>
    );
  }
}

export default SettingsPage;

import React, { Component, isValidElement } from 'react';

export default class LoadingScreen extends Component {
  renderMessage() {
    const { loadingMessage } = this.props;

    if (!loadingMessage) {
      return null;
    }

    return isValidElement(loadingMessage) ? (
      loadingMessage
    ) : (
      <span>{loadingMessage}</span>
    );
  }

  render() {
    return (
      <div className="loading-overlay">
        {this.props.header}
        <div className="loading-overlay__container">
          <div className="loading">Loading ....</div>
          {this.renderMessage()}
        </div>
      </div>
    );
  }
}

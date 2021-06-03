import React, { PureComponent } from 'react';

export default class AssetsPage extends PureComponent {
  state = {};

  renderHeader() {
    return <div className="assets-page__header"> digital-assets Header</div>;
  }

  renderContent() {
    return <div className="assets-page__main">digital-assets Content</div>;
  }

  renderFooter() {
    return <div className="assets-page__footer">digital-assets Footer</div>;
  }

  render() {
    // const { xxx } = this.props;

    return (
      <div className="assets-page">
        {this.renderHeader()}
        {this.renderContent()}
        {this.renderFooter()}
      </div>
    );
  }
}

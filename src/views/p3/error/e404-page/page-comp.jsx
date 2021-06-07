import React, { PureComponent } from 'react';

export default class PagePage extends PureComponent {
  state = {};

  renderHeader() {
    return <div className="e404-page__header"> e404-page Header</div>;
  }

  renderContent() {
    return <div className="e404-page__main">e404-page Content</div>;
  }

  renderFooter() {
    return <div className="e404-page__footer">e404-page Footer</div>;
  }

  render() {
    // const { xxx } = this.props;

    return (
      <div className="e404-page">
        {this.renderHeader()}
        {this.renderContent()}
        {this.renderFooter()}
      </div>
    );
  }
}

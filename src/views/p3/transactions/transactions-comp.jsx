import React, { PureComponent } from 'react';

export default class TransactionsPage extends PureComponent {
  state = {};

  renderHeader() {
    return <div className="transactions-page__header"> transactions Header</div>;
  }

  renderContent() {
    return <div className="transactions-page__main">transactions Content</div>;
  }

  renderFooter() {
    return <div className="transactions-page__footer">transactions Footer</div>;
  }

  render() {
    // const { xxx } = this.props;

    return (
      <div className="transactions-page">
        {this.renderHeader()}
        {this.renderContent()}
        {this.renderFooter()}
      </div>
    );
  }
}

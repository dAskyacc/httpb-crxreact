import React, { PureComponent } from 'react';

export default class ContactsPage extends PureComponent {
  state = {};

  renderHeader() {
    return <div className="contacts-page__header"> contacts Header</div>;
  }

  renderContent() {
    return <div className="contacts-page__main">contacts Content</div>;
  }

  renderFooter() {
    return <div className="contacts-page__footer">contacts Footer</div>;
  }

  render() {
    // const { xxx } = this.props;

    return (
      <div className="contacts-page">
        {this.renderHeader()}
        {this.renderContent()}
        {this.renderFooter()}
      </div>
    );
  }
}

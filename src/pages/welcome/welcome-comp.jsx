import React, { PureComponent } from 'react';

export default class Welcome extends PureComponent {
  constructor(props, context) {
    super(props);
  }

  componentDidMount() {
    // TODO handle
  }

  render() {
    return (
      <div className="welcome-page__wrapper">
        <div className="welcome-page">Hello Welcome</div>
      </div>
    );
  }
}

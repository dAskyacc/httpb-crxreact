import React, { PureComponent } from 'react';

import { Button } from 'antd';

export default class HomePage extends PureComponent {
  state = {};

  handleLinked = () => {
    const { history } = this.props;
    // history.push(path);

    console.log('>>>>>History>>>>>>>>>', history);
    history.push('/init');
  };

  render() {
    return (
      <div className="home-page">
        <div className="home">Homer Index</div>
        <div>
          <Button onClick={this.handleLinked}>first setup</Button>
        </div>
      </div>
    );
  }
}

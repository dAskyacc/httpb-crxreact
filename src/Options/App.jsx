import React, { PureComponent } from 'react';

import ErrorPage from '~Pages/error';

class App extends PureComponent {
  state = {};

  error = {
    title: 'Options Error',
    message: 'OOOp fuck!!!!',
  };

  render() {
    return (
      <div>
        <ErrorPage error={this.error} />
      </div>
    );
  }
}

export default App;

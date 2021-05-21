import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

import ErrorPage from 'Pages/error';

class OptionsIndex extends PureComponent {
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

export default OptionsIndex;

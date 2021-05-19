import React from 'react';
import { hot } from 'react-hot-loader';

import logo from 'BaseSrc/assets/svgs/bas_logo.svg';

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="app-logo"
          alt="logo"
          width="120"
          height="120"
        />
        <h3>Hello World Hi</h3>
        <div>okcxc</div>
      </header>
      <div className="p3-main">OKEESAS</div>
    </div>
  );
};

// ract-hot-loader V4
export default module.hot ? hot(module)(Popup) : Popup;

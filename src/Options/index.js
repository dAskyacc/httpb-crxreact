import React from 'react';
import { render } from 'react-dom';

import './index.scss';

import RootContainer from './RootContainer';

render(
  <React.StrictMode>
    <RootContainer />
  </React.StrictMode>,
  document.getElementById('AppRoot')
);

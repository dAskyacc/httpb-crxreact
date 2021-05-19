import React from 'react';
import { render } from 'react-dom';

import './index.scss';

import Options from './Options';

render(
  <Options title={'Settings'} />,
  document.getElementById('app-container')
);

if (!!module && module.hot) module.hot.accept();

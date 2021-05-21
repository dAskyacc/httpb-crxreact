import React from 'react';
import { render } from 'react-dom';

import './index.scss';

import Options from './options.component';

render(<Options title={'Settings'} />, document.getElementById('AppRoot'));

if (!!module && module.hot) module.hot.accept();

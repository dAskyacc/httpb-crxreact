import React from 'react';
import { render } from 'react-dom';

import Popup from './Popup';
import './main.scss';

render(<Popup />, document.getElementById('app-container'));
// if (module.hot) module.hot.accept(); // v4

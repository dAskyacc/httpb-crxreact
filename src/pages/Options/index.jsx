import React from 'react';
import { render } from 'react-dom';

import Options from './Options';

render(<Options title={'Settings'} />, window.document.querySelector('#app-contianer'));

if (!!module && module.hot) module.hot.accept();

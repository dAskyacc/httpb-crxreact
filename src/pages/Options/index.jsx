import React from 'react';
import { render } from 'react-dom';

import Options from './Options';

render(<Options title={'Settings'} />, document.getElementById('app-container'));

if (!!module && module.hot) module.hot.accept();

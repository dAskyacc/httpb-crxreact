import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { SETUP_ROUTE, SIGNIN_ROUTE } from '~P3/routes/routes-consts';

export default function Authenticated(props) {
  const { isUnlocked } = props;

  switch (true) {
    case isUnlocked:
      return <Route {...props} />;
    default:
      return <Redirect to={{ pathname: SIGNIN_ROUTE }} />;
  }
}

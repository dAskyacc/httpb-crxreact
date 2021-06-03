import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';

import { DEFAULT_ROUTE, SETUP_ROUTE } from './routes-consts';

import HomeLayout from './home-routes';
import SetupLayout from './setup-routes';

export default class RoutesComp extends PureComponent {
  renderRoutes() {
    const routes = (
      <Switch>
        <Route exact path={DEFAULT_ROUTE} component={HomeLayout} />
        <Route path={SETUP_ROUTE} component={SetupLayout} exact />
      </Switch>
    );

    return routes;
  }

  render() {
    return <>{this.renderRoutes()}</>;
  }
}

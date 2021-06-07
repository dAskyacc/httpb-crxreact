import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';

import { DEFAULT_ROUTE, SETUP_ROUTE } from './routes-consts';

import HomeLayout from './home-routes';
import SetupLayout from './setup-routes';

export default class RoutesComp extends PureComponent {
  renderRoutes() {
    const routes = (
      <Switch>
        <Route path={SETUP_ROUTE} component={SetupLayout} />

        <Route path={DEFAULT_ROUTE}>
          <HomeLayout />
        </Route>
      </Switch>
    );

    return routes;
  }

  render() {
    return <>{this.renderRoutes()}</>;
  }
}

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Divider } from 'antd';

import HomeLayout from './home-layout';

export default class HomeRouter extends Component {
  render() {
    return (
      <>
        <HomeLayout>
          <Route
            exact={true}
            path="/"
            component={() => <div className="home-default">Defaylt</div>}
          />
          <Route path="/digital" component={() => <DigitalNestedRoutes />} />
        </HomeLayout>
      </>
    );
  }
}

export function DigitalNestedRoutes(props) {
  const { path, url, params } = props;

  console.log('>>>>>>>DigitalNestedRoutes>>>>', path, props);
  return (
    <>
      <Route exact path={path} component={() => <h3>嵌套路由</h3>} />
      <Route
        path={`${path}/assets/view`}
        component={() => <h3>嵌套路由view</h3>}
      />
      <Route
        exact
        path={`${path}/assets`}
        component={() => <h3>嵌套路由 Assets/index</h3>}
      />
    </>
  );
}

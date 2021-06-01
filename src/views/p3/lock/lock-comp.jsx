import React, { PureComponent } from 'react';

import Loading from '~Widgets/loading-screen';

import { DEFAULT_ROUTE } from '../routes/routes-consts';

export default class Lock extends PureComponent {
  componentDidMount() {
    const { lockBraveTroops, isUnlocked, history } = this.props;

    // if (isUnlocked) {
    //   lockBraveTroops().then(() => history.push(DEFAULT_ROUTE));
    // } else {
    //   history.replace(DEFAULT_ROUTE);
    // }
  }

  render() {
    return (
      <div>
        <div>Hello</div>
        <Loading />
      </div>
    );
  }
}

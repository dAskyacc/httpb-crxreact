import React, { PureComponent } from 'react';

export default class MainLayout extends PureComponent {
  state = {
    /**
     * 这里缓存Store 中state
     * 供 Component 使用
     */
  };

  componentDidMount() {
    const { router } = this.props;
  }
}

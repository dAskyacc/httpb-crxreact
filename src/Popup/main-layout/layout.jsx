import React, { PureComponent } from 'react';

export default class MainLayout extends PureComponent {
  state = {
    /**
     * 这里缓存Store 中state
     * 供 Component 使用
     */
  };

  componentDidMount() {}

  renderPlaceholder() {
    return <div className="holder">Block</div>;
  }

  render() {
    return (
      <div className="main-container">
        <div className="home-header">Header</div>
        <div className="main-body">Border</div>
        <div className="flex"></div>
      </div>
    );
  }
}

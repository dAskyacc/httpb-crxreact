import React, { Component } from 'react';
import { Button } from 'antd';

class DemoComp extends Component {
  componentDidMount() {}

  render() {
    const { isUnlocked, demoTitle } = this.props;
    return (
      <div className="demo-page__wrapper">
        <div className="demo-page">
          <div className="demo-page__header">
            <h2>{demoTitle}</h2>
            <p>
              <span>State</span>
              {isUnlocked}
            </p>
          </div>
          <div className="demo-page__body">
            <div className="todo-page__form">
              <form>
                
              </form>
            </div>
          </div>

          <div className="demo-page__bottombar">
            <Button type="primary">{isUnlocked ? 'Colsed' : 'Open'}</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default DemoComp;

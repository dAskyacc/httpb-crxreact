import React, { Component } from 'react';

export default class TaskPage extends Component {
  renderActions() {}

  render() {
    return (
      <li className="task-item">
        <div className="task-item__wrapper">
          <div className="item-content"></div>
          <div className="item-actions"></div>
        </div>
      </li>
    );
  }
}

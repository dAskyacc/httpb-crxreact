import React, { PureComponent } from 'react';
import cx from 'classnames';

import TaskAdd from './task-add-comp';
import TaskItem from './task-item-comp';

import { TASK_STATUS_FILTER } from '~Store/core-state-consts';

export default class TaskPage extends PureComponent {
  renderTaskList() {
    const { tasks } = this.props;

    return (
      <ul className="task-list">
        {tasks && tasks.length
          ? tasks.map((task, index) => {
              return (
                <li className="list-item" key={`task-${task.id}`}>
                  <TaskItem task={task} />
                </li>
              );
            })
          : 'No Tasks!'}
      </ul>
    );
  }

  renderTaskTabs() {
    const { taskFilter } = this.props;

    return (
      <div className="task-page__bottomtab">
        {Object.keys(TASK_STATUS_FILTER).map((key) => {
          const currentFilter = TASK_STATUS_FILTER[key];

          return (
            <span
              key={`task-tab-${currentFilter}`}
              className={cx(
                'tab',
                currentFilter === taskFilter && 'tab-active'
              )}
            >
              {currentFilter}
            </span>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div className="task-page">
        <TaskAdd />
        <div className="task-page__wrapper--list">{this.renderTaskList()}</div>

        {this.renderTaskTabs()}
      </div>
    );
  }
}

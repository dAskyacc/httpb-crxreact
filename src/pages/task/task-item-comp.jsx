import React, { PureComponent } from 'react';

import { Button } from 'antd';

import { TASK_STATUS_FILTER } from '~Store/core-state-consts';
import { DateFormatter } from '~/helpers/date-util';

class TaskItem extends PureComponent {
  renderCompleteButton(id) {
    return <Button shape="round">Complete</Button>;
  }

  renderInvalidButton(id) {
    // const { id } = this.props;
    return (
      <Button type="primary" shape="round" danger>
        Invalid
      </Button>
    );
  }

  renderCompleteShow() {
    const { status } = this.props;
    return <div className="no-operate--text">{status}</div>;
  }

  render() {
    const { task } = this.props;

    return (
      <div className="task-list__item">
        <div className="task-list__item--content">
          <span className="task-list__item--id">{task.id}</span>
          <span>{task.title}</span>
          <span>{DateFormatter(task.created)}</span>
        </div>
        {task.status === TASK_STATUS_FILTER.INCOMPLETE ? (
          <div className="task-list__item--actions">
            {this.renderCompleteButton(task.id)}
            {this.renderInvalidButton(task.id)}
          </div>
        ) : (
          <div className="task-list__item--actions">
            {this.renderCompleteShow()}
          </div>
        )}
      </div>
    );
  }
}

export default TaskItem;

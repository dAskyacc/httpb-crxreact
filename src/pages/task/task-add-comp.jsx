import React, { Component } from 'react';

import { addTask } from '~Store/actions/task-action';

import { Button } from 'antd';
import { connect } from 'react-redux';

class AddTaskComp extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
  }

  updateTitle = (input) => {
    this.setState({ title: input });
  };

  handleAddTask = () => {
    this.props.addTask(this.state.title);
    this.setState({ title: '' });
  };

  render() {
    return (
      <div className="task-page__wrapper--add">
        <input
          type="text"
          onChange={(e) => this.updateTitle(e.target.value)}
          value={this.state.title}
        />

        <Button type="warn" onClick={this.handleAddTask}>
          Add Task
        </Button>
      </div>
    );
  }
}

export default connect(null, { addTask })(AddTaskComp);

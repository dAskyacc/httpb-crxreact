import { Component } from 'react';

import { addTask } from 'Store/actions/TaskAction';

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
      <div className="task-add">
        <input
          type="text"
          onChange={(e) => this.updateTitle(e.target.value)}
          value={this.state.title}
        />

        <Button type="warn" onClick={this.handleAddTask}>
          Add
        </Button>
      </div>
    );
  }
}

export default connect(null, { addTask })(AddTaskComp);

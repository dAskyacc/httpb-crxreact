import { connect } from 'react-redux';

import TaskPage from './task-page';

import { setTaskFilter } from '~Store/actions/task-action';

const mapStateToProps = (state, ownProps) => {
  const { taskState = {} } = state;
  const { tasks = [], taskFilter } = taskState;
  return {
    tasks,
    taskFilter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTaskFilter: (filter) => dispatch(setTaskFilter(filter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);

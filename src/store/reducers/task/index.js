import {
  TASK_ADD_ITEM,
  TASK_CHANGE_ITEM_PROPS,
  TASK_INVALID_ITEM,
  // TASK_COMPLETE_ITEM,
  TASK_SET_FILTER,
} from '../../core-acticon-types';

import { TASK_STATUS_FILTER } from '../../core-state-consts';

export const nextTaskId = (state = {}) => {
  let currentMaxId = 0;
  const { tasks = [] } = state;
  if (tasks.length) {
    currentMaxId = tasks.reduce((acc, t) => {
      const { id = 0 } = t;
      return id > acc ? id : acc;
    }, currentMaxId);
  }

  return ++currentMaxId;
};

export default function reducerTodo(state = {}, { type, payload = {} }) {
  const taskState = {
    taskFilter: TASK_STATUS_FILTER.ALL,
    tasks: [],
    ...state,
  };

  let cloneTasks = [...taskState.tasks];
  switch (type) {
    case TASK_ADD_ITEM: {
      const { title } = payload;
      console.log(
        '>>>>>>>>>>>>>>>>>>>>>>>>>',
        taskState,
        nextTaskId(taskState)
      );
      if (title) {
        cloneTasks.push({
          id: nextTaskId(taskState),
          ...payload,
          status: TASK_STATUS_FILTER.INCOMPLETE,
          created: new Date().getTime(),
        });
      }

      return {
        ...taskState,
        tasks: cloneTasks,
      };
    }

    case TASK_CHANGE_ITEM_PROPS: {
      const { id, status } = payload;
      const idx = cloneTasks.findIndex((t) => t.id === id);

      if (idx >= 0) {
        cloneTasks[idx] = { ...cloneTasks[idx], status: status };
      }

      return {
        ...taskState,
        tasks: [...cloneTasks],
      };
    }

    case TASK_INVALID_ITEM: {
      const { id } = payload;
      const idx = cloneTasks.findIndex((t) => t.id === id);
      if (idx >= 0) {
        cloneTasks[idx] = {
          ...cloneTasks[idx],
          status: TASK_STATUS_FILTER.INVALID,
          updated: new Date().getTime(),
        };
      }

      return {
        ...taskState,
        tasks: [...cloneTasks],
      };
    }

    case TASK_SET_FILTER: {
      const { taskFilter = TASK_STATUS_FILTER.ALL } = payload;
      return {
        ...taskState,
        taskFilter: taskFilter,
      };
    }

    default:
      return taskState;
  }
}

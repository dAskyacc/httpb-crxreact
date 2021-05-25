import {
  TASK_ADD_ITEM,
  TASK_CHANGE_ITEM_PROPS,
  TASK_SET_FILTER,
} from '../CoreActionTypes';

let nextTaskId = 0;

export const TASK_STATUS_COMPLETE = 'complete';
export const TASK_STATUS_INCOMPLETE = 'incomplete';

export const addTask = (content) => ({
  type: TASK_ADD_ITEM,
  payload: {
    id: ++nextTaskId,
    title: content,
    created: new Date(),
  },
});

export const updateTaskStatus = (id, status) => ({
  type: TASK_CHANGE_ITEM_PROPS,
  payload: {
    id,
    status,
    updated: new Date(),
  },
});

export const setTaskFilter = (filter) => ({
  type: TASK_SET_FILTER,
  payload: {
    taskFilter: filter,
  },
});

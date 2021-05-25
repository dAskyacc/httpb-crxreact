import {
  TASK_ADD_ITEM,
  TASK_CHANGE_ITEM_PROPS,
  TASK_INVALID_ITEM,
  TASK_SET_FILTER,
} from '../core-acticon-types';

export const addTask = (content) => ({
  type: TASK_ADD_ITEM,
  payload: {
    title: content,
  },
});

export const updateTaskStatus = (id, status) => ({
  type: TASK_CHANGE_ITEM_PROPS,
  payload: {
    id,
    status,
  },
});

export const invalidateTask = (id) => ({
  type: TASK_INVALID_ITEM,
  payload: {
    id,
  },
});

export const setTaskFilter = (filter) => ({
  type: TASK_SET_FILTER,
  payload: {
    taskFilter: filter,
  },
});

import {
  TASK_ADD_ITEM,
  TASK_CHANGE_ITEM_PROPS,
  TASK_INVALID_ITEM,
  // TASK_COMPLETE_ITEM,
  TASK_SET_FILTER,
} from '../../CoreActionTypes';

export const TASK_STATUS_INIT = 'create';
export const TASK_STATUS_INVALID = 'invalid';
export const TASK_STATUS_COMPLETE = 'complete';
export const TASK_STATUS_ALL = 'all';

export default function reducerTodo(state = {}, { type, payload = {} }) {
  const todoState = {
    taskFilter: TASK_STATUS_ALL,
    tasks: [],
    ...state,
  };

  const { title, status = TASK_STATUS_INIT } = payload;
  let cloneTasks = [];
  switch (type) {
    case TASK_ADD_ITEM:
      return !title
        ? todoState
        : {
            ...todoState,
            tasks: todoState.tasks.push({
              ...payload,
              createTime: new Date(),
              status: status,
            }),
          };
    case TASK_CHANGE_ITEM_PROPS:
      const currIndex = todoState.tasks.findIndex((t) => t.title === title);
      if (currIndex < 0) return todoState;
      cloneTasks = [...todoState.tasks];

      cloneTasks[currIndex] = {
        ...cloneTasks[currIndex],
        ...payload,
        updateTime: new Date(),
      };
      return {
        ...todoState,
        tasks: cloneTasks,
      };
    case TASK_INVALID_ITEM:
      const invalidIdx = todoState.tasks.findIndex((t) => t.title === title);
      if (invalidIdx < 0) return todoState;
      cloneTasks = [...todoState.tasks];
      cloneTasks[invalidIdx].status = TASK_STATUS_INVALID;
      cloneTasks[invalidIdx].updateTime = new Date();

      return {
        ...todoState,
        tasks: cloneTasks,
      };
    case TASK_SET_FILTER: {
      return {
        ...todoState,
        taskFilter: payload.taskFilter,
      };
    }

    default:
      return todoState;
  }
}

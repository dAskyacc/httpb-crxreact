import { UI_OPEN_SIDEBAR, UI_CLOSE_SIDEBAR } from '../../actions/ActionTypes';

export default function reduceApp(state = {}, action) {
  const appState = {
    sidebar: {
      isOpen: false,
      props: {},
    },
    ...state,
  };

  const { type, payload = {} } = action;
  switch (type) {
    case UI_OPEN_SIDEBAR:
      return {
        ...appState,
        sidebar: {
          ...payload,
          isOpen: true,
        },
      };
    case UI_CLOSE_SIDEBAR:
      return {
        ...appState,
        sidebar: {
          ...payload,
          isOpen: true,
        },
      };
    default:
      return appState;
  }
}

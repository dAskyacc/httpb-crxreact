import initialAppState from '../../store/initialState';

export default function reduceApp(state = {}, action) {
  const appState = {
    ...initialAppState,
    ...state,
  };

  const {type} = action;

  switch(action.type){
    case '':
        
  }
}

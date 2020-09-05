export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //this is to stop getting login pop up during development.
  token: 'BQD1AdQXyjYb--wGJU5nLwKSOeo2cE2H9fAflL2LJk9uk4fhc6iUmaALM_9ihajhuZ6kYlX5Tc27ULUvA5aG0ViW9HI2xaH5NmdB8OeeYhHTN16qb-RVtlqGyy_MUOH2DUy09Tfy8DSGjY4W9jh5UAuD_jIgQw'
};

const reducer = (state, action) => {
  console.log(action);

  switch(action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      }
    default:
      return state;
  }
};

export default reducer;

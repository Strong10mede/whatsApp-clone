//initial look of data layer
export const initialState = {
  user: null,
};

//action to push data
export const actionTypes = {
  SET_USER: "SET_USER",
};

//takes two component the current state and action object returns the new State
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;

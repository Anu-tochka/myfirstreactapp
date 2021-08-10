
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ACTION:
      return {
        ...state,
		name: action.payload
        // ,showName: !state.showName
      }
      default:
        return state
  }
}

export const TOGGLE_ACTION = "PROFILE::TOGGLE_ACTION";

export const changeName = (newName) => ({
  type: TOGGLE_ACTION,
  payload: newName,
});

export default profileReducer;
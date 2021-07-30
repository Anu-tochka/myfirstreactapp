
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ACTION:
      return {
        ...state,
        showName: !state.showName
      }
      default:
        return state
  }
}

export default profileReducer;
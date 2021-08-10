function toggle_action(value) {
    return { 
        type: TOGGLE_ACTION,
        name: 'Bot'
    };
	export const changeNameWithThunk = (name) => {
		return (dispatch, getState) => {
			console.log(name)

			setTimeout(() => {
				dispatch(changeName(name))
			}, 1000)
		}
	}
}

export default toggle_action;
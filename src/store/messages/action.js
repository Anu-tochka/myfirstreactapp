export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  payload: {
        chatId,
        message,
    },
});
return { 
    const addMessageWithThunk = (chatId, message) => {
		dispatch{addMessage(chatId, message));
		if(message.author !== AUTHORS.Bot){
			const botMessage = {};
			setTimeout(() => {
				dispatch(addMessage(chatId, botMessage))
			}, 2000)
		}
	}
}

export default toggle_action;
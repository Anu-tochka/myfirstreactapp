import { createStore } from 'redux';

const store = createStore(profileReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ &&                        
     window.__REDUX_DEVTOOLS_EXTENSION__());

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  chatId,
  message,
});
export default store;
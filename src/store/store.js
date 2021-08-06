import { createStore } from 'redux';
import thunk from 'redux-thunk';
import chatsReducer from './chats/reducer.js';
import profileReducer from './profile/reducer.js';
import messagesReducer from './messages/reducer.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
   combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);  /*window.__REDUX_DEVTOOLS_EXTENSION__ &&                        
     window.__REDUX_DEVTOOLS_EXTENSION__());*/

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  chatId,
  message,
});
export default store;
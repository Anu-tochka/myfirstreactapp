import './Message.css';
import React from 'react';

const profileName = useSelector(state => state.profile.name);
/*
const chats = useSelector((state) => state.chats.chatList);
  const messages = useSelector(state => state.messages.messageList);
*/
 const dispatch = useDispatch();

  const onAddMessage = (message) => {
    dispatch(addMessage(chatId, message));
  }

  import { messageList } from "../store/messages/selectors";
  const messages = useSelector(messageList, shallowEqual);


  const renderMessage = useCallback((message, i) => (
    <div key={i}>
      <span>
        {message.author === AUTHORS.ME ? profileName : message.author}:
       </span>
      <span>{message.text}</span>
    </div>
  ), [profileName]);
  
function Message(props) {
  return (
    <div className="Message" style={{marginTop: '50px'}}>
      {props.render(messageList)}
    </div>
  );
}

export default Message;

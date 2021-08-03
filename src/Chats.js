import React from 'react';
import { useState } from 'react';
import {useParams, useRouteMatch} from 'react-router';
import Message from './Message.js';
import ChatList from './Chatlist.js';
import './Chats.css';

function Chats(props) {
 const { chatId } = useParams();

 const [chats, setChats] = useState(initialChats);

   if (!chats[chatId]) {
   return null
 }

  import { getChatList } from "../store/chats/selectors";
  const chats = useSelector(getChatList, shallowEqual);

return (
    <div className="chats" style={{marginTop: '30px'}}>
      <h2>��� �{chatId}</h2>
       <div>
         <ChatList
           chats={chats}
           chatId={chatId}
         />
       </div>
       <div>
         <MessagesList messages={chats[chatId].messages} />
       </div>

    </div>
  );
}

export default Chats;

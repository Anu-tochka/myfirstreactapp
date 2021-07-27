import React from 'react';
import Message from './Message.js';'
import Chats from './Chats.js'
import './App.css';
import { useState } from 'react';
import { TextField } from "@material-ui/core";
import Button from '@material-ui/core/Button';

function App() {
 
 const initialChats = {
 id1: {
   name: "Chat1",
   messages: [{ text: "FirstMessage", author: AUTHORS.BOT }],
 },
 id2: {
   name: "Chat2",
   messages: [{ text: "FirstMessageHereToo!", author: AUTHORS.ME }],
 },
};
const handleChangeChat = (chat) => setCurrentChat(chat)

  return (
    <div className='app'>
	<List subheader={<li />} className={classes.list}>
  {chats.map((chat) => (
    <li key={chat.id} className={classes.listSection}>
      <ListItem key={chat.id}>
            <ListItemText primary={setCurrentChat(chat)} />
          </ListItem>
    </li>
  ))}
</List>
 
<div
	{messageList.map((message, index:number) => (
     <Message key={index} author={message.author} text={message.text} />
     ))}
	 <TextField autofocus
     style={{ margin: '20px' }}
     id="inputValue"
     label="Outlined"
     variant="outlined"
     value={inputValue}
     onChange={handleMessageChange}
   />
	 <TextField
     style={{ margin: '20px' }}
     id="author"
     label="Outlined"
     variant="outlined"
     value={author}
   />
	 <Button variant="contained" color="secondary onClick={sendMsg}>Click!</Button>
   </div>
  </div>
  );
}

export default App;

}

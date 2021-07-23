import Message from './Message.js';
import './App.css';
import { useState } from 'react';
import { TextField } from "@material-ui/core";
import Button from '@material-ui/core/Button';

function App() {
 const [messageList, setmessageList] = React.useState(initialState: [])
 const [inputValue, setInputValue] = React.useState(initialState: '')
 
 React.useEffect(effect() => {
   if (messageList[messageList.length-1].author != 'bot'){
	   setmessageList{author: 'bot', text:'hello!'
 }, deps: [messageList]);

 const handleMessageChange = (e) => {
	 setInputValue(e.target.Value)
 }
 
  return (
    <div className='app'>
	<List subheader={<li />} className={classes.list}>
  {[name, id].map((sectionId) => (
    <li key={`section-${sectionId}`} className={classes.listSection}>
      <ListItem key={`item-${sectionId}-${item}`}>
            <ListItemText primary={`Item ${item}`} />
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

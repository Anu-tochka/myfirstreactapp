//import Message from './Message.js';
import './App.css';
import { useState } from 'react';

function App() {
	let mes = "Hello!";
  return (
    <div id='msg'></div>
 
  );
}

export default App;

function FragmentMsg() {
 return (
   <>
    
     <input type="text" value={author}  id='authorN'/>
     <input type="text" value={text}  id='textN' />
     <button className="write" onClick={sendMsg}>Click!</button>
   </>
 );
}

  ReactDOM.render(<FragmentMsg />, document.getElementById('msg'));
  
export function messageList() {
 const [msg, setMsg] = useState([]);
 
 return msg.map((author, text) => <div>
     <span className="author">{setMsg(author)}</span>
   <div>
     {setMsg(text)}
   </div>
   </div>);
 
function sendMsg() {
   let authorN = document.getElementById('authorN');
   let textN = document.getElementById('textN');
   authorN.push({textN, authorN});
 }
 
 useEffect(() => {
   '<div>' + author + ', hello!<div>'
 }, [author]);

}

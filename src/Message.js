import './Message.css';
import React from 'react';

function Message(props) {
  return (
    <div className="Message" style={{marginTop: '50px'}}>
      {props.render(messageList)}
    </div>
  );
}

export default Message;

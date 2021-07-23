import './Message.css';

function Message(props) {
  return (
    <div className="Message" style={{marginTop: '50px'}}>
      {props.author}: {props.text}
    </div>
  );
}

export default Message;

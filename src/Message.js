import './Message.css';

function Message(props) {
  return (
    <div className="Message" style={{marginTop: '50px'}}>
      {props.message}
    </div>
  );
}

export default Message;

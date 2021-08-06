import React from 'react';
import {useParams, useRouteMatch} from 'react-router';
import Chats from './Chats.js';
import './Chats.css';

export default ({ chatId }) => {
  const [visible, setVisible] = useState(false);
  const [newChatName, setNewChatName] = useState("");

  const chats = useSelector((state) => state.chats.chatList);
  const dispatch = useDispatch();
  
  const handleClose = () => setVisible(false);
  const handleOpen = () => setVisible(true);
  const handleChange = (e) => setNewChatName(e.target.value);
  const onAddChat = () => {
    dispatch(addChat(newChatName));
    setNewChatName("");
    handleClose();
  };

  return (
    <>
      <div>
        {Object.keys(chats).map((id, i) => (
          <div key={i}>
            <Link to={`/chats/${id}`}>
              <b style={{ color: id === chatId ? "#000000" : "grey" }}>
                {chats[id].name}
              </b>
            </Link>
          </div>
        ))}
        <span className="add-chat" onClick={handleOpen}>
          Add Chat
        </span>
      </div>
      <Dialog open={visible} onClose={handleClose}>
        <DialogTitle>Please enter a name for new chat</DialogTitle>
        <TextField value={newChatName} onChange={handleChange} />
        <Button onClick={onAddChat} disabled={!newChatName}>
          Submit
        </Button>
      </Dialog>
    </>
  );
};

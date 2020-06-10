import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
  let dialogsItem = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
  let messagesItem = props.state.messages.map((m) => <Message message={m.message} />);

  let newMessage = React.createRef();
  let handleClick = () => {
    let text = newMessage.current.value;
    alert(text);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsItem}</div>
      <div className={s.messages}>{messagesItem}</div>
      <textarea ref={newMessage}></textarea>
      <button onClick={handleClick}>add message</button>
    </div>
  );
};

export default Dialogs;

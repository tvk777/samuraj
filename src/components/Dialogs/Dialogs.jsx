import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  const dialogsItem = props.state.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));
  const messagesItem = props.state.messages.map((m) => (
    <Message key={m.id} message={m.message} />
  ));
  const newMessageText = props.state.newMessageText;

  const handleClick = () => {
    props.handleClick();
  };

  const handleChange = (e) => {
    let text = e.target.value;
    props.handleChange(text);
  };


  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsItem}</div>
      <div className={s.messages}>
        <div>{messagesItem}</div>
        <div>
          <textarea
            onChange={handleChange}
            value={newMessageText}
          ></textarea>
        </div>
        <div>
          <button onClick={handleClick}>add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

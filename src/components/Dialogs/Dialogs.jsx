import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
  let dialogsItem = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
  let messagesItem = props.messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsItem}</div>
      <div className={s.messages}>{messagesItem}</div>
    </div>
  );
};

export default Dialogs;

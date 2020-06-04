import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  );
};
const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogs = [
    {id: 1, name: 'Dymich'},
    {id: 2, name: 'Sasha'},
    {id: 3, name: 'Victor'},
    {id: 4, name: 'Sveta'},
    {id: 5, name: 'Valera'},
  ];

  let dialogsItem = dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);

  let messages = [
    {id: 1, message: 'Hello!'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'YO!'},
    {id: 4, message: "I'm fine"},
    {id: 5, message: 'Yo!'},
  ];

  let messagesItem = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsItem}</div>
      <div className={s.messages}>{messagesItem}</div>
    </div>
  );
};

export default Dialogs;

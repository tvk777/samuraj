import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Field, reduxForm} from 'redux-form';

const AddMessageForm = (props) => {
  const {handleSubmit} = props;
  console.log(1);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="newMessageText" component="textarea" placeholder="Enter your message" />
      </div>
      <div>
        <button>add message</button>
      </div>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({
  form: 'dialogdAddMessageForm',
})(AddMessageForm);

const Dialogs = (props) => {
  //debugger;
  const dialogsItem = props.state.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));
  const messagesItem = props.state.messages.map((m) => (
    <Message key={m.id} message={m.message} />
  ));
  const onSubmit = (values) => {
    console.log(values.newMessageText);
    props.addMessage(values.newMessageText);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsItem}</div>
      <div className={s.messages}>
        <div>{messagesItem}</div>
        <AddMessageReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default Dialogs;

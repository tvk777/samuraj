import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Field, reduxForm} from 'redux-form';
import {Textarea} from '../common/formFields/Textarea'; 
import {required, maxLength} from '../../utils/validators/validators';


const maxLength20 = maxLength(20);
const AddMessageForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="newMessageText" component={Textarea} placeholder="Enter your message" validate={[required, maxLength20]} />
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

const Dialogs = ({state, addMessage}) => {
  //debugger;
  const dialogsItem = state.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));
  const messagesItem = state.messages.map((m) => (
    <Message key={m.id} message={m.message} />
  ));
  const onSubmit = (values) => {
    console.log(values.newMessageText);
    addMessage(values.newMessageText);
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

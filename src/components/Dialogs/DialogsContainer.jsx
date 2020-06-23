import React from 'react';
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
  const state = props.store.getState().dialogsPage;

  const handleClick = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  const handleChange = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return <Dialogs handleClick={handleClick} handleChange={handleChange} state={state}/>;
};

export default DialogsContainer;

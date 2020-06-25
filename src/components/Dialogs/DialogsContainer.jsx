import React from 'react';
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const handleClick = () => {
          store.dispatch(addMessageActionCreator());
        };

        const handleChange = (text) => {
          store.dispatch(updateNewMessageTextActionCreator(text));
        };
        return (
          <Dialogs handleClick={handleClick} handleChange={handleChange} state={store.getState().dialogsPage}/>
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;

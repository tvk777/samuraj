import React from 'react';
import Profile from './Profile';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from './../../redux/profileReducer';
import StoreContext from '../../StoreContext';

const ProfileContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState().profilePage;
        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        const changeNewPostText = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text));
        };
        return (
          <Profile
            state={state}
            addPost={addPost}
            changeNewPostText={changeNewPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default ProfileContainer;

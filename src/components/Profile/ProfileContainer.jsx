import React from 'react';
import Profile from './Profile';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../redux/profileReducer';



const ProfileContainer = (props) => {
  const state = props.store.getState().profilePage;
  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  const changeNewPostText = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  }

  return <Profile state={state} addPost={addPost} changeNewPostText={changeNewPostText}/>
  /* (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}     
      />
    </div>
  ); */
};

export default ProfileContainer;

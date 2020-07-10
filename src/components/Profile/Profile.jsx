import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPosts
        posts={props.state.posts}
        newPostText={props.state.newPostText}
        addPost={props.addPost} 
        changeNewPostText={props.changeNewPostText}
      />
    </div>
  );
};

export default Profile;

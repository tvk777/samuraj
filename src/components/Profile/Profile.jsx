import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <MyPosts
        posts={props.state.posts}
        newPostText={props.state.newPostText}
        addPost={props.addPost} 
      />
    </div>
  );
};

export default Profile;

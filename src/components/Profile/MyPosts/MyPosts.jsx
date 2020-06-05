import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  
  let postsElements = props.posts.map((p, i) => (
    <Post message={p.message} likecount={p.likecount} key={i}/>
  ));
  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;

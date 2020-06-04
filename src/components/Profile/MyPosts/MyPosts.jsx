import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let posts = [
    {id: 1, message: 'How are you?', likecount: 5},
    {id: 2, message: 'My first comment', likecount: 8},
    {id: 3, message: 'My second comment', likecount: 9},
  ];

  let postsElements = posts.map((p) => (
    <Post message={p.message} likecount={p.likecount} />
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

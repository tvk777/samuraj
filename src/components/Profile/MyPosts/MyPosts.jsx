import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map((p, i) => (
    <Post message={p.message} likecount={p.likecount} key={i} />
  ));
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };

  let changeText = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <textarea ref={newPostElement} value={props.newPostText} onChange={changeText}/>
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;

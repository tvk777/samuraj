import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
  let postsElements = props.posts.map((p, i) => (
    <Post message={p.message} likecount={p.likecount} key={i} />
  ));

  const onAddPost = () => {
    props.addPost();
  };

  const onChangeNewPostText = (e) => {
    //debugger
    let text = e.target.value;
    props.changeNewPostText(text);
  }

  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <textarea value={props.newPostText} onChange={e => onChangeNewPostText(e) }/>
      </div>
      <div>
        <button onClick={ onAddPost }>Add post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;

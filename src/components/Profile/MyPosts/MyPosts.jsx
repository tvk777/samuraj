import React from 'react';
import {Field, reduxForm} from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let MyPostForm = (props) => {
  const {handleSubmit} = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="newPost"
          component="textarea"
          placeholder="enter new post"
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

MyPostForm = reduxForm({
  form: 'postForm'
})(MyPostForm);

const MyPosts = (props) => {
  let postsElements = props.posts.map((p, i) => (
    <Post message={p.message} likecount={p.likecount} key={i} />
  ));


  const onSubmit = (values) => {
    props.addPost(values.newPost);
  }

  return (
    <div className={s.postsBlock}>
      My posts
      <MyPostForm onSubmit={onSubmit} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;

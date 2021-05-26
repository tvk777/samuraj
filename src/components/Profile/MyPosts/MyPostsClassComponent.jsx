import React from 'react';
import {Field, reduxForm} from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {required, maxLength} from '../../../utils/validators/validators';
import {Textarea} from '../../common/formFields/Textarea';
import {PureComponent} from 'react';

const maxLength10 = maxLength(10);

const MyPostForm = (props) => {
  const {handleSubmit} = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="newPost"
          component={Textarea}
          type="textarea"
          placeholder="enter new post"
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const MyPostReduxForm = reduxForm({
  form: 'postForm',
})(MyPostForm);

class MyPosts extends PureComponent {

  render() {
    console.log('render');

    let postsElements = this.props.posts.map((p, i) => (
      <Post message={p.message} likecount={p.likecount} key={i} />
    ));

    let onSubmit = (values) => {
      this.props.addPost(values.newPost);
    };

    return (
      <div className={s.postsBlock}>
        My posts
        <MyPostReduxForm onSubmit={onSubmit} />
        <div className={s.posts}>{postsElements}</div>
      </div>
    );
  }
}

export default MyPosts;

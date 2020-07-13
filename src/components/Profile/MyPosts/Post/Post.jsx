import React from 'react';
import s from './Post.module.css';

const Post = ({message, likecount}) => {
  return (
    <div className={s.item}>
      <img src='https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' alt="" />
      {message}
          <div>
        <span>like{likecount}</span>
      </div>
    </div>
  )

}

export default Post;

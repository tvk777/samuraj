import React from 'react';
import userPhoto from '../../assets/images/user.jpg';
import classes from './Users.module.css';
import {Preloader} from '../common/Preloader/Preloader';
import {NavLink} from 'react-router-dom';

const Users = (props) => {
  return (
    <>
      {props.isFetching && <Preloader />}
      <div>
        {props.pages.map((p, i) => {
          return (
            <span
              key={i}
              onClick={() => props.onPageChanged(p)}
              className={p === props.currentPage ? classes.selectedPage : ''}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => {
        return (
          <div key={u.id}>
            <div>
              <p>
                <NavLink to={`/profile/${u.id}`}>
                  <img
                    src={u.photos.small !== null ? u.photos.small : userPhoto}
                    alt="ava"
                    style={{width: '100px'}}
                  />
                </NavLink>
              </p>
              {u.followed ? (
                <button
                  disabled={props.isFollowingProgress.some(id => id === u.id)}
                  onClick={() => {props.unfollow(u.id)}}
                >
                  Unollow
                </button>
              ) : (
                <button
                  disabled={props.isFollowingProgress.some(id => id === u.id)}
                  onClick={() => {props.follow(u.id)}}
                >
                  Follow
                </button>
              )}
            </div>
            <div>
              <p>{u.name}</p>
              <p>{u.status}</p>
              <p>{'u.location.country'}</p>
              <p>{'u.location.city'}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Users;

import React from 'react';
import userPhoto from '../../assets/images/user.jpg';
import {NavLink} from 'react-router-dom';

export const User = ({user, isFollowingProgress, unfollow, follow}) => {

  return (
      <div>
            <div>
              <p>
                <NavLink to={`/profile/${user.id}`}>
                  <img
                    src={user.photos.small !== null ? user.photos.small : userPhoto}
                    alt="ava"
                    style={{width: '100px'}}
                  />
                </NavLink>
              </p>
              {user.followed ? (
                <button
                  disabled={isFollowingProgress.some(id => id === user.id)}
                  onClick={() => {unfollow(user.id)}}
                >
                  Unollow
                </button>
              ) : (
                <button
                  disabled={isFollowingProgress.some(id => id === user.id)}
                  onClick={() => {follow(user.id)}}
                >
                  Follow
                </button>
              )}
            </div>
            <div>
              <p>{user.name}</p>
              <p>{user.status}</p>
              <p>{'user.location.country'}</p>
              <p>{'user.location.city'}</p>
            </div>
            </div>
            );
};


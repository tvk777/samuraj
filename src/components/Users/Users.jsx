import React from 'react';
import classes from './Users.module.css';
import {Preloader} from '../common/Preloader/Preloader';
import {Paginator} from '../common/Paginator/Paginator';
import {User} from './User';

const Users = ({totalUsersCount, pageSize, onPageChanged, currentPage, isFetching, users, isFollowingProgress, unfollow, follow}) => {

  return (
    <>
      {isFetching && <Preloader />}
      <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} onPageChanged={onPageChanged} currentPage={currentPage} />
      {users.map((u) => {
        return (
          <User key={u.id} user={u} isFollowingProgress={isFollowingProgress} unfollow={unfollow} follow={follow} />
        );
      })}
    </>
  );
};

export default Users;

import React from 'react';
import userPhoto from '../../assets/images/user.jpg';
import classes from './Users.module.css';
import preloader from '../../assets/images/preloader.svg';



const Users = (props) => {
    return (
      <>
      {props.isFetching && <img src={preloader} alt="users loading"/>}
      <div>
       {props.pages.map((p, i) => {
         return (<span key={i} onClick={() => props.onPageChanged(p) }className={p===props.currentPage ? classes.selectedPage : ''}>{p}</span>);
       })} 
      </div>
        {props.users.map((u) => {
          return (
            <div key={u.id}>
              <div>
                <p>
                  <img
                    src={u.photos.small !== null ? u.photos.small : userPhoto}
                    alt="ava"
                    style={{width: '100px'}}
                  />
                </p>
                {u.followed ? (
                  <button onClick={() => props.unfollow(u.id)}>Unollow</button>
                ) : (
                  <button onClick={() => props.follow(u.id)}>Follow</button>
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
  }

export default Users;

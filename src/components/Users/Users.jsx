import React, {Component} from 'react';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.jpg';
import classes from './Users.module.css';


class Users extends Component {
  componentDidMount(){
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = page => {
    this.props.setCurrentPage(page);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    const pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
    let pages = [];
    for(let i=1; i<=pagesCount; i++){
      pages.push(i);
    }

  
    return (
      <div>
      <div>
       {pages.map((p, i) => {
         return (<span key={i} onClick={() => this.onPageChanged(p) }className={p===this.props.currentPage ? classes.selectedPage : ''}>{p}</span>);
       })} 
      </div>
        {this.props.users.map((u) => {
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
                  <button onClick={() => this.props.unfollow(u.id)}>Unollow</button>
                ) : (
                  <button onClick={() => this.props.follow(u.id)}>Follow</button>
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
      </div>
    );
  }
}

export default Users;

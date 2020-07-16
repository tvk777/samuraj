import Users from './Users';
import { follow, unfollow, setUsers, setCurrentPage, setTotalPageCount, setTotalUsersCount, setIsFetching, setIsFollowingProgress } from './../../redux/usersReducer';
import { connect } from 'react-redux';

import React, {Component} from 'react';

import {getUsers} from '../../api/api'

class UsersContainer extends Component {
  componentDidMount(){
    this.props.setIsFetching(true);
    getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
        this.props.setIsFetching(false);
      });
  }

  onPageChanged = page => {
    this.props.setCurrentPage(page);
    this.props.setIsFetching(true);
    getUsers(page, this.props.pageSize)
      .then(data => {
        this.props.setUsers(data.items);
        this.props.setIsFetching(false);
      });
  }

  render() {
    const pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
    let pages = [];
    for(let i=1; i<=pagesCount; i++){
      pages.push(i);
    }

  
    return (
      <Users 
      pages={pages}
      currentPage={this.props.currentPage}
      onPageChanged={this.onPageChanged}
      users={this.props.users}
      unfollow = {this.props.unfollow}
      follow={this.props.follow}
      isFetching={this.props.isFetching}
      isFollowingProgress={this.props.isFollowingProgress}
      setIsFollowingProgress={this.props.setIsFollowingProgress}
      />
    );
  }
}




const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFollowingProgress: state.usersPage.isFollowingProgress,    
  }
}
/* const mapDispatchToProps = (dispatch) => {
  return {
    follow: userId => dispatch(follow(userId)),
    unfollow: userId => dispatch(unfollow(userId)),
    setUsers: users => dispatch(setUsers(users)),
    setCurrentPage: page => dispatch(setCurrentPage(page)),
    setTotalUsersCount: count => dispatch(setTotalPageCount(count)),
    setIsFetching: isFetching => dispatch(setIsFetching(isFetching)),
  }
} */

export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalPageCount, setTotalUsersCount, setIsFetching, setIsFollowingProgress })(UsersContainer);

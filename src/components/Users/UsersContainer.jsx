import Users from './Users';
import { follow, unfollow, setCurrentPage, setTotalPageCount, setTotalUsersCount, getUsers } from './../../redux/usersReducer';
import { connect } from 'react-redux';

import React, {Component} from 'react';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';


class UsersContainer extends Component {
  componentDidMount(){
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = page => {
    this.props.getUsers(page, this.props.pageSize);    
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
export default withAuthRedirect(connect(mapStateToProps, 
  { follow, unfollow, setCurrentPage, setTotalPageCount, setTotalUsersCount, getUsers}
  )(UsersContainer));


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


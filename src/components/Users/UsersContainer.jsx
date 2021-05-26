import Users from './Users';
import { follow, unfollow, setCurrentPage, setTotalPageCount, setTotalUsersCount, getCurrentUsers } from './../../redux/usersReducer';
import { connect } from 'react-redux';

import React, {Component} from 'react';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getIsFollowingProgress} from './../../redux/users-selectors';


class UsersContainer extends Component {
  componentDidMount(){
    this.props.getCurrentUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = page => {
    this.props.getCurrentUsers(page, this.props.pageSize);    
  }

  render() {  
    return (
      <Users 
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
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
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    isFollowingProgress: getIsFollowingProgress(state),    
  }
}

export default compose(
  connect(mapStateToProps, {follow, unfollow, setCurrentPage, setTotalPageCount, setTotalUsersCount, getCurrentUsers}) 
)(UsersContainer);

/* export default withAuthRedirect(connect(mapStateToProps, 
  { follow, unfollow, setCurrentPage, setTotalPageCount, setTotalUsersCount, getUsers}
  )(UsersContainer));
 */



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


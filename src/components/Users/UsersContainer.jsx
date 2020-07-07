import Users from './Users';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalPageCountAC } from './../../redux/usersReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    follow: userId => dispatch(followAC(userId)),
    unfollow: userId => dispatch(unfollowAC(userId)),
    setUsers: users => dispatch(setUsersAC(users)),
    setCurrentPage: page => dispatch(setCurrentPageAC(page)),
    setTotalUsersCount: count => dispatch(setTotalPageCountAC(count))
  }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;

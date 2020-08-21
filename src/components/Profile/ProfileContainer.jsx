import React, {Component} from 'react';
import Profile from './Profile';
import {
  addPost,
  getUserProfile,
  getUserStatus,
  updateStatus
} from './../../redux/profileReducer';
import {getAuthUserData} from '../../redux/authReducer';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId){
      userId = this.props.authUserId;
      /* if(!userId) {
        this.props.history.push("/login");
      } */
    }

    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} status={this.props.state.status} updateStatus={this.props.updateStatus} />;
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.profilePage,
    profile: state.profilePage.profile,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth
  };
};


/* const AuthRedirectComponent = withAuthRedirect(ProfileContainer);
const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, {
  addPost,
  updateNewPostText,
  getUserProfile,
})(WithUrlDataContainerComponent); */

export default compose(
  connect(mapStateToProps, {
    addPost,
    getUserProfile,
    getUserStatus,
    updateStatus,
    getAuthUserData
  }),
  withRouter,
  withAuthRedirect 
)(ProfileContainer)

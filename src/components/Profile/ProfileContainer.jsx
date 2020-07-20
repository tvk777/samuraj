import React, {Component} from 'react';
import Profile from './Profile';
import {
  addPost,
  updateNewPostText,
  getUserProfile,
} from './../../redux/profileReducer';
import {connect} from 'react-redux';
import {withRouter, Redirect} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';


class ProfileContainer extends Component {
  componentDidMount() {
    const userId = this.props.match.params.userId
      ? this.props.match.params.userId
      : 2;
    this.props.getUserProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.profilePage,
    profile: state.profilePage.profile,
  };
};


const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {
  addPost,
  updateNewPostText,
  getUserProfile,
})(WithUrlDataContainerComponent);

import React, {Component} from 'react';
import Profile from './Profile';
import { addPost, updateNewPostText, setUserProfile} from './../../redux/profileReducer';
import { connect } from 'react-redux';
import * as axios from 'axios';
import {withRouter} from 'react-router-dom';


class ProfileContainer extends Component {
  debugger;
  componentDidMount(){
    const userId = this.props.match.params.userId ? this.props.match.params.userId : 2;
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
    .then((response) => {
      this.props.setUserProfile(response.data);
    });
  }
render()
  {
    return <Profile {...this.props} profile={this.props.profile} />
  }

}

const mapStateToProps = (state) => {
  return {
    state: state.profilePage,
    profile: state.profilePage.profile
  }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { addPost, updateNewPostText, setUserProfile})(WithUrlDataContainerComponent);


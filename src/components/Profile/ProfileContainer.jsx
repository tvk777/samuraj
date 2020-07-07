import Profile from './Profile';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from './../../redux/profileReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    state: state.profilePage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => { dispatch(addPostActionCreator()); },
    changeNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    }  
  }
}
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;

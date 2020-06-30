import Profile from './Profile';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from './../../redux/profileReducer';
import { connect } from 'react-redux';

/* const _ProfileContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState().profilePage;
        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        const changeNewPostText = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text));
        };
        return (
          <Profile
            state={state}
            addPost={addPost}
            changeNewPostText={changeNewPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}; */

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

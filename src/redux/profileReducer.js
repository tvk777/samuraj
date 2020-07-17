import {usersApi} from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
    posts: [
        { id: 1, message: 'How are you?', likecount: 5 },
        { id: 2, message: 'My first comment', likecount: 8 },
        { id: 3, message: 'My second comment', likecount: 9 },
    ],
    newPostText: 'react redux learning',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    let stateCopy = { ...state };
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                likecount: 0
            };
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        case UPDATE_NEW_POST_TEXT:
            return  {
                ...state,
                newPostText:action.text
            }
            case SET_USER_PROFILE:
                return  {
                    ...state,
                    profile:action.profile
                }
    default:
            return state;
    }
}


export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: text
});
export const setUserProfile = (profile) =>({ type:SET_USER_PROFILE, profile});
export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersApi.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
    }
}


export default profileReducer;
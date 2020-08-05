import { profileApi } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';


const initialState = {
    posts: [
        { id: 1, message: 'How are you?', likecount: 5 },
        { id: 2, message: 'My first comment', likecount: 8 },
        { id: 3, message: 'My second comment', likecount: 9 },
    ],
    newPostText: 'react redux learning',
    profile: null,
    status: ''
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
            return {
                ...state,
                newPostText: action.text
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
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
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileApi.getProfile(userId).then((response) => {
            dispatch(setUserProfile(response.data));
        });
    }
}
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileApi.getStatus(userId).then((response) => {
            dispatch(setUserStatus(response.data));
        })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        })
    }
}



export default profileReducer;
import { profileApi } from '../api/api';

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';


const initialState = {
    posts: [
        { id: 1, message: 'How are you?', likecount: 5 },
        { id: 2, message: 'My first comment', likecount: 8 },
        { id: 3, message: 'My second comment', likecount: 9 },
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    let stateCopy = { ...state };
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: action.post,
                likecount: 0
            };
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            return stateCopy;
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


export const addPost = (text) => ({ type: ADD_POST, post: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileApi.getProfile(userId)
    dispatch(setUserProfile(response.data));
}
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });

export const getUserStatus = (userId) => async (dispatch) => {
        const response = profileApi.getStatus(userId)
            dispatch(setUserStatus(response.data));
    }

export const updateStatus = (status) => async (dispatch) => {
    const response = profileApi.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
    }



export default profileReducer;
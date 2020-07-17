import {getAuth} from '../api/api';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    //debugger;
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({type:SET_AUTH_USER_DATA, data: {userId, email, login}});
export const getAuthUserData = () => {
    return (dispatch) => {
        getAuth().then((data) => {
          if (data.resultCode === 0) {
            const {id, login, email} = data.data;
            dispatch(setAuthUserData(id, email, login));
        }
        });
  
    }
}

export default authReducer;

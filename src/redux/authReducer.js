import {authApi} from '../api/api';
import {stopSubmit} from 'redux-form';

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
                ...action.payload,
            };
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type:SET_AUTH_USER_DATA, payload: {userId, email, login, isAuth}});

export const getAuthUserData = () => {
    return (dispatch) => {
        return authApi.me().then((data) => {
          if (data.resultCode === 0) {
            const {id, login, email} = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
        });
  
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authApi.login(email, password, rememberMe).then((data) => {
          if (data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            const errorMessage = data.messages.length>0 ? data.messages[0] : 'Some error';
            dispatch(stopSubmit('login', {_error: errorMessage}))
        }
        });  
    }
}

export const logout = () => {
    return (dispatch) => {
        authApi.logout().then((data) => {
          if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
        });  
    }
}



export default authReducer;

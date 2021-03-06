import { usersApi } from '../api/api';
import {updateObject} from '../utils/objectHelper'


const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const SET_IS_FETCHING = 'users/SET_IS_FETCHING';
const SET_IS_FOLLOWING_PROGRESS = 'users/SET_IS_FOLLOWING_PROGRESS';

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObject(state.users, action.userId, 'id', {followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObject(state.users, action.userId, 'id', {followed: false})
            };
        case SET_USERS:
            return { ...state, users: [...action.users] };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.page }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.count }
        case SET_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case SET_IS_FOLLOWING_PROGRESS:
            console.log(state.isFollowingProgress);
            return {
                ...state,
                isFollowingProgress: action.isFollowingProgress
                    ? [...state.isFollowingProgress, action.userId]
                    : state.isFollowingProgress.filter(id => action.userId !== id)
            }
        default:
            return state;
    }
}


export const followSuccess = userId => ({ type: FOLLOW, userId });
export const unfollowSuccess = userId => ({ type: UNFOLLOW, userId });
export const setUsers = users => ({ type: SET_USERS, users });
export const setCurrentPage = page => ({ type: SET_CURRENT_PAGE, page });
export const setTotalPageCount = count => ({ type: SET_TOTAL_USERS_COUNT, count });
export const setTotalUsersCount = count => ({ type: SET_TOTAL_USERS_COUNT, count });
export const setIsFetching = isFetching => ({ type: SET_IS_FETCHING, isFetching });
export const setIsFollowingProgress = (isFollowingProgress, userId) => ({ type: SET_IS_FOLLOWING_PROGRESS, isFollowingProgress, userId });
export const getCurrentUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(setIsFetching(true));
    const data = await usersApi.getUsers(currentPage, pageSize)
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setIsFetching(false));
}
const followUnfollowFlow = (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(setIsFollowingProgress(true, userId));
    apiMethod(userId);
    dispatch(actionCreator(userId));
    dispatch(setIsFollowingProgress(false, userId));
}
export const follow = (userId) => (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersApi.setFollow.bind(usersApi), followSuccess)
}

export const unfollow = (userId) => (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersApi.setUnFollow.bind(usersApi), unfollowSuccess)

}



export default usersReducer;
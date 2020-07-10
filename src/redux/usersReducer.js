const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true };
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false };
                    }
                    return u;
                })
            };
        case SET_USERS:
            return { ...state, users: [...action.users] };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.page }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.count }
        case SET_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        default:
            return state;
    }
}


export const follow = userId => ({ type: FOLLOW, userId });
export const unfollow = userId => ({ type: UNFOLLOW, userId });
export const setUsers = users => ({ type: SET_USERS, users });
export const setCurrentPage = page => ({ type: SET_CURRENT_PAGE, page });
export const setTotalPageCount = count => ({ type: SET_TOTAL_USERS_COUNT, count });
export const setTotalUsersCount = count => ({ type: SET_TOTAL_USERS_COUNT, count });
export const setIsFetching = isFetching => ({ type: SET_IS_FETCHING, isFetching });




export default usersReducer;
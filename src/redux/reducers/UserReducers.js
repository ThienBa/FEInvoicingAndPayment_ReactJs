import { SET_ALL_USER_REDUCER, SET_DETAIL_USER_REDUCER, SET_NEW_USER_REDUCER } from "../constants/UserConstants";

const initialState = {
    userList: [],
    userDetail: {},
    newUser: {}
}

const UserReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_USER_REDUCER: {
            return { ...state, userList: action.userList }
        }
        case SET_DETAIL_USER_REDUCER: {
            return { ...state, userDetail: action.userDetail }
        }
        case SET_NEW_USER_REDUCER: {
            return { ...state, newUser: action.newUser }
        }
        default:
            return { ...state }
    }
}

export default UserReducers;

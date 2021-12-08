import { ADD_USER_API_SAGA, GET_ALL_USER_API_SAGA, GET_DETAIL_USER_API_SAGA } from "../constants/UserConstants";

export const addUserAction = (newUser) => ({
    type: ADD_USER_API_SAGA,
    newUser
});

export const getAllUserAction = () => ({
    type: GET_ALL_USER_API_SAGA,
});

export const getDetailUserAction = (user_id) => ({
    type: GET_DETAIL_USER_API_SAGA,
    user_id
});


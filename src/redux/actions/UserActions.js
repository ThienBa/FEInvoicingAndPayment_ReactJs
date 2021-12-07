import { ADD_USER_API_SAGA } from "../constants/UserConstants";

export const addUserAction = (newUser) => ({
    type: ADD_USER_API_SAGA,
    newUser
})

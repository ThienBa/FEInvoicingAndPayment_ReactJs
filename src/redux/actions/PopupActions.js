import { DISPLAY_POPUP_REDUCERS, HIDE_POPUP_REDUCERS, SET_USER_ID_REDUCER } from "../constants/PopupConstants";

export const displayPopupAction = () => ({
    type: DISPLAY_POPUP_REDUCERS,
});

export const hidePopupAction = () => ({
    type: HIDE_POPUP_REDUCERS,
});

export const setUserIdAction = (user_id) => ({
    type: SET_USER_ID_REDUCER,
    user_id
});

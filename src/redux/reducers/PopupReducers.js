import { DISPLAY_POPUP_REDUCERS, HIDE_POPUP_REDUCERS, SET_USER_ID_REDUCER } from "../constants/PopupConstants";

const initialState = {
    displayPopup: false,
    user_id: 0
}

const PopupReducers = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_POPUP_REDUCERS: {
            return { ...state, displayPopup: true }
        }
        case HIDE_POPUP_REDUCERS: {
            return { ...state, displayPopup: false }
        }
        case SET_USER_ID_REDUCER: {
            return { ...state, user_id: action.user_id }
        }
        default:
            return { ...state }
    }
}

export default PopupReducers;

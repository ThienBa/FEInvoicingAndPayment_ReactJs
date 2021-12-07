import { DISPLAY_POPUP_REDUCERS, HIDE_POPUP_REDUCERS } from "../constants/PopupConstants";

const initialState = {
    displayPopup: false,
}

const PopupReducers = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_POPUP_REDUCERS: {
            return { ...state, displayPopup: true }
        }
        case HIDE_POPUP_REDUCERS: {
            return { ...state, displayPopup: false }
        }
        default:
            return { ...state }
    }
}

export default PopupReducers;

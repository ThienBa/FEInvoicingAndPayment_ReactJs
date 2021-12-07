import { DISPLAY_POPUP_REDUCERS, HIDE_POPUP_REDUCERS } from "../constants/PopupConstants";

export const displayPopupAction = () => ({
    type: DISPLAY_POPUP_REDUCERS,
})

export const hidePopupAction = () => ({
    type: HIDE_POPUP_REDUCERS,
})

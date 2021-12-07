import { DISPLAY_LOADING_REDUCER, HIDE_LOADING_REDUCER } from "../constants/LoadingConstants";

const initialState = {
    isLoading: false,
}

const LoadingReducers = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_LOADING_REDUCER: {
            return { ...state, isLoading: true };
        }
        case HIDE_LOADING_REDUCER: {
            return { ...state, isLoading: false };
        }
        default:
            return { ...state }
    }
}

export default LoadingReducers;
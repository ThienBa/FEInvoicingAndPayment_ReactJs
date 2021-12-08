import { call, takeLatest, put, delay } from 'redux-saga/effects';
import { userService } from '../../services/InvoicingAndPaymentServices/UserSevices';
import { DISPLAY_LOADING_REDUCER, HIDE_LOADING_REDUCER } from '../constants/LoadingConstants';
import { ADD_USER_API_SAGA, GET_ALL_USER_API_SAGA, GET_DETAIL_USER_API_SAGA, SET_ALL_USER_REDUCER, SET_DETAIL_USER_REDUCER, SET_NEW_USER_REDUCER } from '../constants/UserConstants';
import { history } from '../../App';
import { SweetAlertError, SweetAlertSuccess } from '../../utils/SweetAlert/SweetAlert';
import { SET_DISPLAY_TABLE_ITEM_REDUCER } from '../constants/InvoiceConstants';

function* addUserApiSaga(action) {
    yield put({
        type: DISPLAY_LOADING_REDUCER
    });

    yield delay(500);

    try {
        const { data } = yield call(() => userService.addUserApi(action.newUser))
        yield put({
            type: SET_NEW_USER_REDUCER,
            newUser: data
        })
        yield put({
            type: SET_DISPLAY_TABLE_ITEM_REDUCER,
        })
        SweetAlertSuccess("Save user successfully!");
        history.push("/generate_invoice");
    } catch (error) {
        SweetAlertError(error);
    }

    yield put({
        type: HIDE_LOADING_REDUCER
    });
}

export function* followAddUserApiSaga() {
    yield takeLatest(ADD_USER_API_SAGA, addUserApiSaga)
}

function* getAllUserApiSaga() {
    try {
        const { data } = yield call(() => userService.getAllUserApi());
        yield put({
            type: SET_ALL_USER_REDUCER,
            userList: data
        });
    } catch (error) {
        SweetAlertError(error);
    }
}

export function* followGetAllserApiSaga() {
    yield takeLatest(GET_ALL_USER_API_SAGA, getAllUserApiSaga)
}

function* getDetailUserApiSaga(action) {
    try {
        const { data } = yield call(() => userService.getDetailUserApi(action.user_id));
        yield put({
            type: SET_DETAIL_USER_REDUCER,
            userDetail: data
        });
    } catch (error) {
        SweetAlertError(error);
    }
}

export function* followGetDetailUserApiSaga() {
    yield takeLatest(GET_DETAIL_USER_API_SAGA, getDetailUserApiSaga)
}
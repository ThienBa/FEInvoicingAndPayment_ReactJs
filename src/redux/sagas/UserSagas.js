import { call, takeLatest, put, delay } from 'redux-saga/effects';
import { userService } from '../../services/InvoicingAndPaymentServices/UserSevices';
import { DISPLAY_LOADING_REDUCER, HIDE_LOADING_REDUCER } from '../constants/LoadingConstants';
import { ADD_USER_API_SAGA } from '../constants/UserConstants';
import { history } from '../../App';
import { SweetAlertError, SweetAlertSuccess } from '../../utils/SweetAlert/SweetAlert';

function* addUserApiSaga(action) {
    yield put({
        type: DISPLAY_LOADING_REDUCER
    });

    yield delay(500);

    try {
        yield call(() => userService.addUserApi(action.newUser))
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
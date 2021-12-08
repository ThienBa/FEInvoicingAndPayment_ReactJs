import { call, takeLatest, put, delay } from 'redux-saga/effects';
import { DISPLAY_LOADING_REDUCER, HIDE_LOADING_REDUCER } from '../constants/LoadingConstants';
import { SweetAlertError, SweetAlertSuccess } from '../../utils/SweetAlert/SweetAlert';
import { sendMailService } from '../../services/InvoicingAndPaymentServices/SendMailServices';
import { SEND_MAIL_API_SAGA } from '../constants/SendMailConstants';

function* sendMailApiSaga(action) {
    yield put({
        type: DISPLAY_LOADING_REDUCER
    });

    yield delay(500);

    try {
        yield call(() => sendMailService.sendMailApi(action.infoMail))
        SweetAlertSuccess("Send mail successfully!");
    } catch (error) {
        SweetAlertError(error);
    }

    yield put({
        type: HIDE_LOADING_REDUCER
    });
}

export function* followSendMailApiSaga() {
    yield takeLatest(SEND_MAIL_API_SAGA, sendMailApiSaga)
}
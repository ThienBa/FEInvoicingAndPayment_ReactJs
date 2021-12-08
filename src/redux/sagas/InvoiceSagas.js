import { call, takeLatest, put } from 'redux-saga/effects';
import { invoiceService } from '../../services/InvoicingAndPaymentServices/InvoiceServices';
import { SweetAlertError, SweetAlertSuccess } from '../../utils/SweetAlert/SweetAlert';
import { ADD_INVOICE_ITEM_API_SAGA, GET_INVOICE_ITEM_BY_USER_ID_API_SAGA, SET_INVOICE_LIST_ITEM_REDUCER } from '../constants/InvoiceConstants';
import { HIDE_POPUP_REDUCERS } from '../constants/PopupConstants';

function* getInvoiceItemByUserIdApiSaga(action) {
    try {
        const { data } = yield call(() => invoiceService.getInvoiceItemByUserIdApi(action.user_id));
        yield put({
            type: SET_INVOICE_LIST_ITEM_REDUCER,
            invoiceListItem: data
        })
    } catch (error) {
        SweetAlertError(error);
    }
}

export function* followGetInvoiceItemByUserIdApiSaga() {
    yield takeLatest(GET_INVOICE_ITEM_BY_USER_ID_API_SAGA, getInvoiceItemByUserIdApiSaga)
}

function* addInvoiceItemApiSaga(action) {
    try {
        yield call(() => invoiceService.addInvoiceItemApi(action.newInvoiceItem));
        yield put({
            type: GET_INVOICE_ITEM_BY_USER_ID_API_SAGA,
            user_id: action.newInvoiceItem.user_id
        });
        yield put({
            type: HIDE_POPUP_REDUCERS
        })
        SweetAlertSuccess("Add invoice item successfully!");
    } catch (error) {
        SweetAlertError(error);
    }
}

export function* followAddInvoiceItemApiSaga() {
    yield takeLatest(ADD_INVOICE_ITEM_API_SAGA, addInvoiceItemApiSaga)
}
import { all } from "@redux-saga/core/effects";
import * as UserSagas from "./UserSagas";
import * as InvoiceSagas from "./InvoiceSagas";
import * as SendMailSagas from "./SendMailSagas";

export function* rootSagas() {
    yield all([
        UserSagas.followAddUserApiSaga(),
        UserSagas.followGetAllserApiSaga(),
        UserSagas.followGetDetailUserApiSaga(),

        InvoiceSagas.followGetInvoiceItemByUserIdApiSaga(),
        InvoiceSagas.followAddInvoiceItemApiSaga(),

        SendMailSagas.followSendMailApiSaga(),
    ])
}
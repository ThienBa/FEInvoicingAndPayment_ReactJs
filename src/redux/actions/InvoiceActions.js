import { ADD_INVOICE_ITEM_API_SAGA, GET_INVOICE_ITEM_BY_USER_ID_API_SAGA, SET_DISPLAY_TABLE_ITEM_REDUCER } from "../constants/InvoiceConstants";


export const getInvoiceItemByUserIdAction = (user_id) => ({
    type: GET_INVOICE_ITEM_BY_USER_ID_API_SAGA,
    user_id
});

export const addInvoiceItemAction = (newInvoiceItem) => ({
    type: ADD_INVOICE_ITEM_API_SAGA,
    newInvoiceItem
});

export const setDisplayTableItemAction = () => ({
    type: SET_DISPLAY_TABLE_ITEM_REDUCER,
});

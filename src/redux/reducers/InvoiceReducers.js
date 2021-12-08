import { SET_DISPLAY_TABLE_ITEM_REDUCER, SET_INVOICE_LIST_ITEM_REDUCER } from "../constants/InvoiceConstants";


const initialState = {
    invoiceListItem: [],
    displayTableItem: false,
}

const InvoiceReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_INVOICE_LIST_ITEM_REDUCER: {
            return { ...state, invoiceListItem: action.invoiceListItem }
        }
        case SET_DISPLAY_TABLE_ITEM_REDUCER: {
            return { ...state, displayTableItem: true }
        }
        default:
            return { ...state }
    }
}

export default InvoiceReducers;

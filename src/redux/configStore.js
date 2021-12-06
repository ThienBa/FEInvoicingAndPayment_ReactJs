import { combineReducers, createStore } from 'redux';
import InvoicingAndPaymentReducer from './reducers/InvoicingAndPaymentReducer';

const rootReducers = combineReducers({
    InvoicingAndPaymentReducer
});

export const store = createStore(rootReducers);
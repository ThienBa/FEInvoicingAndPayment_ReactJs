import { applyMiddleware, combineReducers, createStore } from 'redux';
import createMiddleWareSaga from "redux-saga";
import PopupReducers from './reducers/PopupReducers';
import LoadingReducers from './reducers/LoadingReducers';
import { rootSagas } from './sagas/rootSagas';
import UserReducers from './reducers/UserReducers';
import InvoiceReducers from './reducers/InvoiceReducers';
const middlewareSaga = createMiddleWareSaga();

const rootReducers = combineReducers({
    PopupReducers,
    LoadingReducers,
    UserReducers,
    InvoiceReducers
});

export const store = createStore(rootReducers, applyMiddleware(middlewareSaga));
middlewareSaga.run(rootSagas);
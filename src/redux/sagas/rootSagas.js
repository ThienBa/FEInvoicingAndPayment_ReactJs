import { all } from "@redux-saga/core/effects";
import * as UserSagas from "./UserSagas";
export function* rootSagas() {
    yield all([
        UserSagas.followAddUserApiSaga(),
    ])
}
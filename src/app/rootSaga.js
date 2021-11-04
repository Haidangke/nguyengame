
import searchSaga from "features/search/searchSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
    yield all([searchSaga()]);
}

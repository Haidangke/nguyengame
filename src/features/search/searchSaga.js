import { gameApi } from "apis/gameApi";
import { debounce, call, put } from "redux-saga/effects";
import { fetchDataFailed, fetchDataSuccess, fetchData } from "./searchSlice";

function* handleFetchData(action) {
    const input = action.payload;
    if (input) {
        try {
            yield put(fetchData());
            const response = yield call(gameApi.search, input, {
                limit: 5
            });
            yield put(fetchDataSuccess(response));
        } catch (error) {
            yield put(fetchDataFailed());
        }
    }

}

export default function* searchSaga() {
    yield debounce(500, "search/setInput", handleFetchData);
}
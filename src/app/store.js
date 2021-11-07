import { configureStore } from "@reduxjs/toolkit";
import authReducer from "features/auth/authSlice";
import browseReducer from "features/browse/browseSlice";
import notifyReducer from "features/notify/notifySlice";
import searchReducer from "features/search/searchSlice";
import topbarReducer from "features/topbar/topbarSlice";
import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleWare = createSagaMiddleware();

const rootReducer = combineReducers({
    auth: authReducer,
    search: searchReducer,
    browse: browseReducer,
    topbar: topbarReducer,
    notify: notifyReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleWare),
});

sagaMiddleWare.run(rootSaga);

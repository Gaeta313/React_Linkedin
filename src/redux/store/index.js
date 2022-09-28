import { configureStore, combineReducers } from "@reduxjs/toolkit";
import mainReducer from "../reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import themeReducer from "../reducers/themeReducer";

const persistConfig = {
    key: "root",
    whitelist: ["userTheme"],
    storage,
};

const bigReducer = combineReducers({
    main: mainReducer,
    userTheme: themeReducer,
});
const persistedReducer = persistReducer(persistConfig, bigReducer);

export const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);

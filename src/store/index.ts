import { Action, combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import rootSaga from "./saga";
import documentsReducer from "../features/documents/slice";

const rootReducer = combineReducers({
    document: documentsReducer
});

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { store } from "@/app/store";

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, AnyAction>;

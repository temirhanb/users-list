import {configureStore} from "@reduxjs/toolkit";
import usersSlices from "./slices/usersListSlice";

export const store = configureStore({
  reducer: {
    users: usersSlices,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
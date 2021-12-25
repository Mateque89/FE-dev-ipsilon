import { configureStore } from "@reduxjs/toolkit";
import summarySlice from "./summary/summarySlice";

export const store = configureStore({
  reducer: {
    summary: summarySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

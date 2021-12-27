import { configureStore } from '@reduxjs/toolkit';
import countriesSlice from './countries/countriesSlice';
import detailedSlice from './detailed/detailedSlice';
import summarySlice from './summary/summarySlice';

export const store = configureStore({
  reducer: {
    summary: summarySlice,
    detailed: detailedSlice,
    countries: countriesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

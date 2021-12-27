import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CountrySummary } from '../../react-app-env';
import { getCountriesSummary } from '../../utility/API';

interface SummaryState {
  countries: CountrySummary[];
  loading: 'failed' | 'success' | 'loading';
}

const initialState: SummaryState = {
  countries: [],
  loading: 'loading',
};

export const fetchCountries = createAsyncThunk('summary/fetchSummary', async () => {
  const response = await getCountriesSummary();
  return response.data as unknown as {
    Countries: CountrySummary[];
  };
});

export const summarySlice = createSlice({
  name: 'summary',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.countries = action.payload.Countries;
      state.loading = 'success';
    });
    builder.addCase(fetchCountries.rejected, (state, _) => {
      state.loading = 'failed';
    });
    builder.addCase(fetchCountries.pending, (state, _) => {
      state.loading = 'loading';
    });
  },
});

export default summarySlice.reducer;

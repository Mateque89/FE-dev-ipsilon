import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CountryByDate } from '../../react-app-env';
import { getCountryDays } from '../../utility/API';

interface DetailedState {
  days: CountryByDate[];
  loading: 'failed' | 'success' | 'loading';
  wasPicked: boolean;
}

const initialState: DetailedState = {
  days: [],
  wasPicked: false,
  loading: 'success',
};

export const fetchCountry = createAsyncThunk(
  'details/fetchCountryByDate',
  async (country: string) => {
    const response = await getCountryDays(country);
    const data = response.data as unknown as CountryByDate[];
    data.map((x) => (x.Date = x.Date.substring(0, 10)));
    return data;
  },
);

export const detailedSlice = createSlice({
  name: 'detailed',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountry.fulfilled, (state, action) => {
      state.days = action.payload.filter((x) => x.Province === '');
      state.loading = 'success';
    });
    builder.addCase(fetchCountry.rejected, (state, _) => {
      state.loading = 'failed';
    });
    builder.addCase(fetchCountry.pending, (state, _) => {
      state.loading = 'loading';
      state.wasPicked = true;
    });
  },
});

export default detailedSlice.reducer;

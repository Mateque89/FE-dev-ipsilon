import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CountryName } from '../../react-app-env';
import { getAvailableCountries } from '../../utility/API';

interface DetailedState {
  pickedCountry: string | undefined;
  countryList: CountryName[];
  loading: 'failed' | 'success' | 'loading';
}

const initialState: DetailedState = {
  countryList: [],
  pickedCountry: undefined,
  loading: 'success',
};
export const fetchNames = createAsyncThunk('details/fetchNames', async () => {
  const response = await getAvailableCountries();
  return response.data as unknown as CountryName[];
});

export const countriesSlice = createSlice({
  name: 'detailed',
  initialState,
  reducers: {
    setPickedCountry(state, action: PayloadAction<string>) {
      state.pickedCountry = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNames.fulfilled, (state, action) => {
      state.countryList = action.payload;
      state.loading = 'success';
    });
    builder.addCase(fetchNames.rejected, (state, _) => {
      state.loading = 'failed';
    });
    builder.addCase(fetchNames.pending, (state, _) => {
      state.loading = 'loading';
    });
  },
});

export const { setPickedCountry } = countriesSlice.actions;

export default countriesSlice.reducer;

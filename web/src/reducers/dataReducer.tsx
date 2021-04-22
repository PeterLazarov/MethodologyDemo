import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'dataReducer',
    initialState: {
      dataLoading: false as boolean
    },
    reducers: {
      dataLoading: (state, action: PayloadAction<{isLoading: boolean}>) => {
        state.dataLoading = action.payload.isLoading;
      },
    }
  });

export const { dataLoading } = slice.actions;

export default slice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'dataReducer',
    initialState: {
        dataLoading: false,
    },
    reducers: {
      dataLoading: (state, action) => {
        state.dataLoading = action.payload.isLoading;
      },
    }
  });

export const { dataLoading } = slice.actions;

export default slice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'dialogReducer',
    initialState: {
      globalPopupData: {
        blockDetails: null
      }
    },
    reducers: {
      showDataDialog: (state, action) => {
        state.globalPopupData[action.payload.popupName] = action.payload.data;
      },
      hideDataDialog: (state, action) => {
        state.globalPopupData[action.payload.popupName] = null;
      }
    }
  });

export const { showDataDialog, hideDataDialog } = slice.actions;

export default slice.reducer;
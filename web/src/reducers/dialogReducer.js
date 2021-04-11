import { createSlice } from '@reduxjs/toolkit';
import { pullAt } from 'lodash';

const slice = createSlice({
    name: 'dataReducer',
    initialState: {
        globalPopupData: []
    },
    reducers: {
      showDataDialog: (state, action) => {
          debugger;
        // let globalPopupDataForAdd = state.globalPopupData || [];
        // globalPopupDataForAdd[action.payload.popupName] = action.payload.data;
        // state.globalPopupData = globalPopupDataForAdd;
        state.globalPopupData.splice(action.payload.popupName, 0, action.payload.data);
      },
      hideDataDialog: (state, action) => {
        let globalPopupDataForPull = state.globalPopupData;
        pullAt(globalPopupDataForPull, action.payload.popupName)

        state.globalPopupData = globalPopupDataForPull;
      }
    }
  });

export const { showDataDialog, hideDataDialog } = slice.actions;

export default slice.reducer;
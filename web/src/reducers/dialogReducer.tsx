import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Block } from 'src/models';

interface DialogState {
  globalPopupData: {
    blockDetails: Block,
    [key: string]: Block;
  }
}

const slice = createSlice({
    name: 'dialogReducer',
    initialState: {
      globalPopupData: {
        blockDetails: {}
      } 
    } as DialogState,
    reducers: {
      showDataDialog: (state, action: PayloadAction<{popupName: string, data: Block}>) => {
        state.globalPopupData[action.payload.popupName] = action.payload.data;
      },
      hideDataDialog: (state, action: PayloadAction<{popupName: string}>) => {
        state.globalPopupData[action.payload.popupName] = {} as Block
      }
    }
  });

export const { showDataDialog, hideDataDialog } = slice.actions;

export default slice.reducer;
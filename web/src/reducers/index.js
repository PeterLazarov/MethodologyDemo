import { combineReducers  } from 'redux';
import dialogReducer from './dialogReducer';
import dataReducer from './dataReducer';

export const initialState = {
  dataState: {
    dataLoading: false,
  },
  dialogState: {
    allPopupData: []
  }
};

export const rootReducer = combineReducers({
  dialogState: dialogReducer,
  dataState: dataReducer
});
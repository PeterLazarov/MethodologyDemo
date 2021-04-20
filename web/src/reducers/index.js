
import { configureStore } from '@reduxjs/toolkit';
import { rollbarRedux } from 'Services/rollbarLogger';
import dialogReducer from './dialogReducer';
import dataReducer from './dataReducer';

export default function configureAppStore() {
  const store = configureStore({
    reducer: {
      dialogState: dialogReducer,
      dataState: dataReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rollbarRedux),
  })

  return store
}
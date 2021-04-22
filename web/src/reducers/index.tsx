
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { rollbarRedux } from 'src/services/rollbarLogger';
import dialogReducer from './dialogReducer';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
  dialogState: dialogReducer,
  dataState: dataReducer
})

export type ReduxState = ReturnType<typeof rootReducer>

export default function configureAppStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rollbarRedux),
  })

  return store
}
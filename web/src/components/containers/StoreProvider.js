
import React from 'react';
import { Provider } from 'react-redux'
import configureAppStore from 'Reducers';

const store = configureAppStore()

export const dialogStateSelector = state => state.dialogState;
export const dataStateSelector = state => state.dataState;

export const StoreProvider = ({ children }) =>  {
  return (
    <Provider store={store}> {children} </Provider>
  );
}

import React from 'react';
import { rootReducer, initialState } from 'Redux';

export const Store = React.createContext();

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(rootReducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>
  );
}
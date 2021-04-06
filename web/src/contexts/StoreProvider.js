
import React, { useEffect } from 'react';
import { rootReducer, initialState } from 'Reducers';

export const StoreContext = React.createContext();

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(rootReducer, initialState, () => {
    const localData = localStorage.getItem('experiment-state');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('experiment-state', JSON.stringify(state));
  }, [state]);

  return (
    <StoreContext.Provider value={ { ...state, dispatch } }>{props.children}</StoreContext.Provider>
  );
}
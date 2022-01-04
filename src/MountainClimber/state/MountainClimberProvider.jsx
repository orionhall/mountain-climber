import React, { createContext, useEffect, useReducer } from 'react';
import { reducer, resetState } from './reducer';
import { initialState } from './initialState';
import { STORAGE_KEY } from '../constants';

export const MountainClimberContext = createContext(null);

export const MountainClimberProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, resetState);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.goalData));
  }, [state.goalData]);

  return (
    <MountainClimberContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </MountainClimberContext.Provider>
  );
};

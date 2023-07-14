import React, { useState, createContext } from 'react';

export interface StateContextProps {
  displayedItemId: number | null;
  setDisplayedItemId: React.Dispatch<React.SetStateAction<number | null>>;
}

export const StateContext = createContext<StateContextProps>({
  displayedItemId: null,
  setDisplayedItemId: () => {},
});
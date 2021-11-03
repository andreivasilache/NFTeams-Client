import React, { ReactComponentElement } from 'react';
import { MainStore } from './Main.store';

export interface StoreProviderInterface {
  children: ReactComponentElement<any>;
}

export interface ContextInterface {
  store: MainStore;
}
const mainStore = new MainStore();

export const StoreContext = React.createContext<ContextInterface>({ store: mainStore });

export const StoreProvider = ({ children }: StoreProviderInterface) => (
  <StoreContext.Provider value={{ store: mainStore }}>{children}</StoreContext.Provider>
);

export const getCurrentStoreInstance = () => mainStore;

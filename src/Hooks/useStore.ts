import React from 'react';
import { MainStoreEnum } from '../Store/Main.store';
import { ContextInterface, StoreContext } from '../Store/StoreProvider';

export const useStore = (storeName: MainStoreEnum) => {
  const { store } = React.useContext<ContextInterface>(StoreContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.');
  }

  return store[storeName];
};

export default useStore;

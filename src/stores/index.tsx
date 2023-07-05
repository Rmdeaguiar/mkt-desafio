import { createContext, useContext } from 'react';
import { useAside } from './asideStore';

interface StoresContextType {
  asideStore: {
    aside: boolean;
    setAside: React.Dispatch<React.SetStateAction<boolean>>;
  };
}


const storesCtx = createContext<StoresContextType | null>(null);

export function useStores() {
  return useContext(storesCtx);
}

export function StoresProvider({ children} : { children: React.ReactNode }) {

  const asideStore = useAside();

  return (
    <storesCtx.Provider value={{asideStore}}>
      {children}
    </storesCtx.Provider>
  );
}
import { createContext, useContext } from 'react';
import { useAside } from './asideStore';
import { useLoading } from './loadingStore';

interface StoresContextType {
  asideStore: {
    aside: boolean;
    setAside: React.Dispatch<React.SetStateAction<boolean>>;
  },
  loadingStore : {
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  }
  ;
}


const storesCtx = createContext<StoresContextType | null>(null);

export function useStores() {
  return useContext(storesCtx);
}

export function StoresProvider({ children }: { children: React.ReactNode }) {

  const asideStore = useAside();
  const loadingStore = useLoading();

  return (
    <storesCtx.Provider value={
      {
        asideStore,
        loadingStore
      }}>
      {children}
    </storesCtx.Provider>
  );
}
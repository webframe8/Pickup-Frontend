import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [progresLoading, setProgresLoading] = useState(false);

  const showProgresLoader = () => setProgresLoading(true);
  const hideProgresLoader = () => setProgresLoading(false);

  return (
    <LoaderContext.Provider
      value={{ progresLoading, showProgresLoader, hideProgresLoader }}
    >
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);

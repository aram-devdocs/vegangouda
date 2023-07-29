import React, { createContext, useState } from 'react';

interface AppContextProps {
  count: number;
  incrementCount: () => void;
}

export const AppContext = createContext<AppContextProps>({
  count: 0,
  incrementCount: () => {
    // do nothing
  },
});

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <AppContext.Provider value={{ count, incrementCount }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);

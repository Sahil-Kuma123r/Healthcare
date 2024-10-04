import { createContext } from 'react';
import { doctors } from '../data';

// Create a context
export const AppContext = createContext();

const AppContextProvider = (props) => {
  // Define the value to pass down to the context consumers
  const value = {
    doctors,
  };

  // Use `AppContext.Provider` to provide the value to children components
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

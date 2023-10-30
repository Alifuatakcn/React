import { createContext, useContext, useReducer } from "react";
import { counterReducer } from "./counter/counter-reducer";
import { counterInitialState } from "./counter/counter-initial-state";

// Boş bir merkezi state oluştuurldu
const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);

const StoreProvider = ({ children }) => {
  // useReducer hook u reducer ve initial state lerimizi parametre olarak alır
  // Ve bize geriye setter ve getter fonksiyonlarını döndürür.

  //        getter           setter  
  const [counterState, dispatchCounter] = useReducer(
    counterReducer,
    counterInitialState
  );

  return (
    <StoreContext.Provider value={{ counterState, dispatchCounter }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;

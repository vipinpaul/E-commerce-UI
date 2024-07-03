import { createContext, useState } from "react";

export const storeContext = createContext();

const StoreContextProvider = (props) => {
  const [totalCount, setTotalCount] = useState(0);

  return (
    <storeContext.Provider value={{ totalCount, setTotalCount }}>
      {props.children}
    </storeContext.Provider>
  );
};
export default StoreContextProvider;

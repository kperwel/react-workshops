// Implement SlotsProvider component that passes data from context to the render function (passed as a children)
import React, { createContext, useContext } from "react";
import slots from "../data/slots";

import { SearchSlotsList } from "./task-2";

const SlotsContext = createContext([]);

const SlotsProvider = ({ children }) => {
  const data = useContext(SlotsContext);
  return children(data);
};

export const Main = () => (
  <SlotsContext.Provider value={slots}>
    <SlotsProvider>
      {slots => <SearchSlotsList slots={slots} />}
    </SlotsProvider>
  </SlotsContext.Provider>
);

export default Main;
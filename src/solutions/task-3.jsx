import React, { createContext, useContext } from 'react';
import slots from "../data/slots";

import { SearchSlotsList } from "./task-2";

const SlotsContext = createContext([]);

const FilledSearchSlotsList = () => {
    const data = useContext(SlotsContext);

    return <SearchSlotsList slots={data} />
}

// Provide slot list using context API instead of passing them as a prop

const Main = () => (
    <SlotsContext.Provider value={slots}>
        <FilledSearchSlotsList />
    </SlotsContext.Provider>
    
);

export default Main;
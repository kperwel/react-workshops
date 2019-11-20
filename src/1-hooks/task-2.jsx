import React from 'react';
import slots from "../data/slots";

/*
slots = [
  { "gameId": 7310, "name": "Dark Joker", "codename": "darkjoker" },
  ...
*/

/**
 * 1. Take component written in 0-basics/task-1.js (you can copy and past Your previous code, or import it as a module)
 * 2. Add possibility to search slot by input value
 */

const SearchSlotsList = ({ slots }) => {
    return <SlotsList slots={slots} />;
}

// --------------------- MAIN ---------------------

const Main = () => <>
    <SearchSlotsList slots={slots} />
</>

export default Main;
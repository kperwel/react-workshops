import React, { useState } from "react";
import slots from "../data/slots";

import { SlotsList } from "./task-1";

/*
slots = [
  { "gameId": 7310, "name": "Dark Joker", "codename": "darkjoker" },
  ...
*/

/**
 * 1. Take component written in 0-basics/task-1.js (you can copy and past, or import it as an module)
 * 2. Add possibility filter them based on the input value
 */

export const SearchSlotsList = ({ slots }) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <input onChange={e => setSearch(e.target.value)} type="text" />
      <SlotsList slots={slots.filter(s => s.name.includes(search))} />
    </>
  );
};

// --------------------- MAIN ---------------------

const Main = () => (
  <>
    <SearchSlotsList slots={slots} />
  </>
);

export default Main;

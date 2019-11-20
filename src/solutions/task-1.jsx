import React from "react";
import PropTypes from "prop-types";
import data from "../data/slots";

/*
slots = [
  { "gameId": 7310, "name": "Dark Joker", "codename": "darkjoker" },
  ...
*/

/**
 * 1. Make SlotsList component display html list of slots game passed by a props
 * 2. Add configurable by props ability to mark every N element of the list in any way
 * 3. Make every list element console.log it's codename on click
 */

const Slot = ({ name, codename }) => (
  <div onClick={() => console.log(codename)}>{name}</div>
);

Slot.propTypes = {
  name: PropTypes.string,
  codename: PropTypes.string
};

// HINT: use map function to map slots array to array of components
// TODO: Edit this component body
export const SlotsList = ({ slots, markEvery }) => (
  <ul>
    {slots.map(({ gameId, name, codename }, i) => (
      <li
        key={gameId}
        style={{ background: i % markEvery === 0 ? "lightseagreen" : "none" }}
      >
        <Slot name={name} codename={codename} />
      </li>
    ))}
  </ul>
);

SlotsList.propTypes = {
  slots: PropTypes.arrayOf(
    PropTypes.shape({
      gameId: PropTypes.number,
      name: PropTypes.string,
      codename: PropTypes.string
    })
  ),
  name: PropTypes.string,
  codename: PropTypes.string
};

// --------------------- MAIN ---------------------

const Main = () => (
  <>
    <SlotsList slots={data} markEvery={3} />
  </>
);

export default Main;

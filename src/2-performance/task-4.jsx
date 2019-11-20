import React, { useState, memo, useMemo } from "react";

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

// Optimize following component

const Player = ({ name }) => {
  console.log(`Player [${name}] is rendering`);
   // lets simulate that rendering of the player component is extremally expensive and takes 50ms
  sleep(50);
  return <span>{name}</span>;
};

const PlayersList = ({ players }) => {
  console.log("PlayerList is rendering");
  sleep(10);
  return (
    <ul>
      {players.map(item => (
        <li>
          <Player name={item.name} />
        </li>
      ))}
    </ul>
  );
};

const StaticComponent = ({ onHover }) => {
  console.log("StaticComponent is rendering");
  sleep(10);
  return (
    <div onMouseEnter={onHover}>
      Static components calling function on hover
    </div>
  );
};

const PlayersPage = () => {
  const [players, setPlayers] = useState([]);

  const addRandomItem = () =>
    setPlayers([
      { name: `Player ${players.length}`, id: Math.random() },
      ...players
    ]);

  return (
    <div>
      <StaticComponent
        onHover={() => console.log("You hovered static component!")}
      />
      <PlayersList players={players} />
      List predefined 3 players:
      <PlayersList
        players={[
          { id: 0, name: "Predefined player 0" },
          { id: 1, name: "Predefined player 1" }
        ]}
      />
      <button onClick={addRandomItem}>PREPEND LIST WITH RANDOM ITEM</button>
    </div>
  );
};

const Main = () => <PlayersPage />;

export default Main;

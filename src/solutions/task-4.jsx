import React, { useState, memo, useCallback } from "react";

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

// Optimize following component

const Player = memo(({ name }) => {
  console.log(`Player [${name}] is rendering`);
  // lets simulate that rendering of the player component is extremally expensive and takes 50ms
  sleep(50);
  return <span>{name}</span>;
});

const PlayersList = memo(({ players }) => {
  console.log("PlayerList is rendering");
  sleep(10);
  return (
    <ul>
      {players.map(item => (
        <li key={item.id}>
          <Player name={item.name} />
        </li>
      ))}
    </ul>
  );
});

const StaticComponent = memo(({ onHover }) => {
  console.log("StaticComponent is rendering");
  sleep(10);
  return (
    <div onMouseEnter={onHover}>
      Static components calling function on hover
    </div>
  );
});

const predefindedPlayerList = [
  { id: 0, name: "Predefined player 0" },
  { id: 1, name: "Predefined player 1" }
];

const PlayersPage = () => {
  const [players, setPlayers] = useState([]);

  const addRandomItem = () =>
    setPlayers([
      { name: `Player ${players.length}`, id: Math.random() },
      ...players
    ]);

    const onStaticComponentHover = useCallback(() => console.log("You hovered static component!"), []);

  return (
    <div>
      <StaticComponent
        onHover={onStaticComponentHover}
      />
      <PlayersList players={players} />
      List predefined 3 players:
      <PlayersList players={predefindedPlayerList} />
      <button onClick={addRandomItem}>PREPEND LIST WITH RANDOM ITEM</button>
    </div>
  );
};

const Main = () => <PlayersPage />;

export default Main;

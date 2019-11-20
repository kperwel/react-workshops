import React from "react";

import gandalfImage from "../assets/gandalf.png";
import sarumanImage from "../assets/saruman.png";

// DATA

const PLAYER_TYPE = {
  EVIL: 0,
  GOOD: 1
};

const players = [
  {
    type: PLAYER_TYPE.GOOD,
    name: "Gandalf",
    image: gandalfImage
  },
  {
    type: PLAYER_TYPE.EVIL,
    name: "Saruman",
    image: sarumanImage
  },
  {
    type: PLAYER_TYPE.EVIL,
    name: "Melkor",
    image: null
  }
];

// CHARACTER COMPONENT

const Character = ({ renderAvatar, ...props }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      minWidth: 300,
      border:
        props.type === PLAYER_TYPE.EVIL ? "1px solid red" : "1px solid green"
    }}
  >
    {renderAvatar(props)} {props.name}
  </div>
);

// FUNCTION FOR RENDERING AVATAR

const avatarStyle = {
  width: 100,
  height: 100,
  display: "block",
  marginRight: 10
};

const avatarPlaceholderStyle = {
  ...avatarStyle,
  background: "#666",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  fontFamily: "sans-serif",
  fontSize: 30
};

const renderAvatarOrPlaceholder = ({ image, name }) =>
  image ? (
    <img style={avatarStyle} src={image} />
  ) : (
    <div style={avatarPlaceholderStyle}>{name[0]}</div>
  );

// MAIN RENDER COMPONENT

const Main = () => (
  <ul style={{ listStyle: "none" }}>
    {players.map(character => (
      <li key={character.name} style={{ display: "flex", padding: 10 }}>
        <Character {...character} renderAvatar={renderAvatarOrPlaceholder} />
      </li>
    ))}
  </ul>
);

export default Main;

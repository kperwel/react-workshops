import React, { useState } from "react";
import {
  Container,
  Avatar,
  Name,
  Description,
  darkTheme,
  lightTheme
} from "./styles/User.styles";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.background};
  }
`;

const User = ({ userName, description }) => (
  <Container>
    <Avatar />
    <div>
      <Name color="seagreen">{userName}</Name>
      <Description>{description}</Description>
    </div>
  </Container>
);

const Bulb = ({ onClick }) => (
  <button onClick={onClick} style={{ border: 0, background: "#000" }}>
    <span role="img" aria-label="bulb">
      &#x1f4a1;
    </span>
  </button>
);

const Main = () => {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <Bulb
        onClick={() => setTheme(theme === darkTheme ? lightTheme : darkTheme)}
      />
      <GlobalStyle />
      <User userName="Lorem Ipsum" description="Dolor ati ament" />
    </ThemeProvider>
  );
};

export default Main;

import styled from "styled-components";

export const Name = styled.h2`
  display: block;
  color: ${props => props.theme.color};
`;
export const Description = styled.p`
  display: block;
  color: ${props => props.theme.color};
`;
export const Container = styled.div`
  font-family: sans-serif;
  outline: 1px solid grey;
  min-height: 100px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  background: ${props => props.theme.background};
  max-width: 300px;
`;
export const Avatar = styled.div`
  background: ${props => props.theme.color};
  margin: 0 10px 0 0;
  width: 128px;
  height: 128px;
`;

export const lightTheme = {
  background: "#eee",
  color: "#111"
};

export const darkTheme = {
  background: "#111",
  color: "#ccc"
};

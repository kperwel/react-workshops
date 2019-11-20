import React from "react";

// IMPORTANT: Make sure if there are no other solutions for tasks done by HOCs (renderProps or hooks).
// Hoc were good when there was no other solutions. It is still usefull pattern,
// but have to be used wisely because of readability issues.

const Title = ({ text }) => <h1>{text}</h1>;
const Description = ({ text }) => <p>{text}</p>;

const makeTextUpperCase = BaseComponent => ({ text, ...passProps }) => {
  return <BaseComponent text={text.toUpperCase()} {...passProps} />;
};

const UpperCaseTitle = makeTextUpperCase(Title);
const UpperCaseDescription = makeTextUpperCase(Description);

const Main = () => (
  <>
    <Title text="Any case title" />
    <Description text="Any case title" />
    <br />
    <UpperCaseTitle text="Any case title transformed to uppercase" />
    <UpperCaseDescription text="Any case description transformed to uppercase" />
  </>
);

export default Main;

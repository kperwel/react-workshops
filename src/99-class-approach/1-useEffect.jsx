import React, { Component } from "react";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  componentWillUnmount() {
    document.title = `Clicker is not in the tree`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

const Main = () => {
  const [exampleVisible, setExampleVisible] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setExampleVisible(!exampleVisible);
        }}
      >
        Toggle Example
      </button>
      {exampleVisible && <Example />}
    </div>
  );
};

export default Main;

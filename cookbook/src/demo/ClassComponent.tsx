import React, { ReactElement } from 'react';

class Component extends React.Component {
  state = {
    name: 'Klaus',
  };

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  handleClick() {
    this.setState({ name: 'Peter' });
  }

  render(): ReactElement {
    return <button onClick={() => this.handleClick()}></button>;
  }
}

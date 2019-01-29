import React, { Component } from 'react';
import styled from 'styled-components';
import PaneCustomer from './PaneCustomer';
import PaneChat from './PaneChat';
import PaneBot from './PaneBot';

export default class VNextContainer extends Component {
  constructor(props) {
    super(props);
    this.testFunc = this.testFunc.bind(this);
    this.state = {
      test: ''
    };
  }

  testFunc = test => {
    console.log(test);
  };

  render() {
    return (
      <Container>
        <PaneCustomer />
        <PaneChat />
        <PaneBot testFunc={this.testFunc} />
      </Container>
    );
  }
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 24% 38% 38%;
`;

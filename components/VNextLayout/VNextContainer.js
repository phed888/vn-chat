import React, { Component } from 'react';
import styled from 'styled-components';
import PaneCustomer from './PaneCustomer';
import PaneChat from './PaneChat';
import PaneBot from './PaneBot';

export default class VNextContainer extends Component {
  constructor(props) {
    super(props);

    this.chatInput = this.chatInput.bind(this);
    this.botInput = this.botInput.bind(this);

    this.state = {
      test: ''
    };
  }

  chatInput = (test, type) => {
    if (type === 'bot') {
      console.log('from bot pane ' + test);
    } else {
      console.log('from chat pane ' + test);
    }
  };

  botInput = test => {
    console.log('from bot pane ' + test);
  };

  render() {
    return (
      <Container>
        <PaneCustomer />
        <PaneChat chatInput={this.chatInput} />
        <PaneBot chatInput={this.chatInput} />
      </Container>
    );
  }
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 24% 38% 38%;
`;

import React, { Component } from 'react';
import styled from 'styled-components';
import PaneCustomer from './PaneCustomer';
import PaneChat from './PaneChat';
import PaneBot from './PaneBot';
import { Agent } from 'https';

let chatCounter = 0;
let chatTimer = null;

export default class VNextContainer extends Component {
  constructor(props) {
    super(props);

    this.chatInput = this.chatInput.bind(this);

    this.state = {
      custConvers: [
        {
          msgType: 'Agent',
          msgContent: 'Hello'
        },
        {
          msgType: 'Agent',
          msgContent: 'Hello2'
        }
      ],
      botConvers: [
        {
          msgType: 'Bot',
          msgContent: 'Hello'
        },
        {
          msgType: 'Bot',
          msgContent: 'Hello2'
        }
      ]
    };
  }

  chatInput = (test, type) => {
    let message = {
      msgType: type,
      msgContent: test
    };
    // console.log(this.state.custConvers);
    // let message = test;
    if (type === 'bot') {
      this.setState({ botConvers: [...this.state.botConvers, message] });
    } else {
      this.setState({ custConvers: [...this.state.custConvers, message] });
    }
  };

  render() {
    return (
      <Container>
        <PaneCustomer />
        <PaneChat
          chatInput={this.chatInput}
          custConvers={this.state.custConvers}
        />
        <PaneBot
          chatInput={this.chatInput}
          botConvers={this.state.botConvers}
        />
      </Container>
    );
  }
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 24% 38% 38%;
`;

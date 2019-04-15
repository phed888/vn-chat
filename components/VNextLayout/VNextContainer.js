import React, { Component } from 'react';
import styled from 'styled-components';
import PaneCustomer from './PaneCustomer';
import PaneChat from './PaneChat';
import PaneBot from './PaneBot';
import SmartCard from '../SmartCard/SmartCard';
import CustomerBanner from './CustomerBanner';

export default class VNextContainer extends Component {
  constructor(props) {
    super(props);

    this.chatInput = this.chatInput.bind(this);

    this.state = {
      custReply: false,
      botReply: false,
      custConvers: [
        {
          msgSource: 'custConvers',
          msgType: 'outgoing',
          msgKind: 'text',
          thoughts: [
            {
              thought:
                "Hi, I'm the Expedia virtual assistant, here to help you with your booking needs."
            },
            {
              thought:
                "And if I can't help you, I'll connect you to a friendly customer service agent."
            }
          ]
        },
        {
          msgSource: 'custConvers',
          msgType: 'incoming',
          msgKind: 'text',
          thoughts: [
            {
              thought: 'I need to talk to an agent about my room.'
            }
          ]
        },
        {
          msgSource: 'custConvers',
          msgType: 'outgoing',
          msgKind: 'text',
          thoughts: [
            {
              thought:
                'Please give me your name so that I can connect you with an agent.'
            }
          ]
        },
        {
          msgSource: 'custConvers',
          msgType: 'incoming',
          msgKind: 'text',
          thoughts: [
            {
              thought: 'Wilo'
            }
          ]
        },
        {
          msgSource: 'custConvers',
          msgType: 'outgoing',
          msgKind: 'text',
          thoughts: [
            {
              thought:
                'Here is the check-in and check-out information for Westin Hotel Seattle: • test'
            }
          ]
        }
      ],
      botConvers: [
        {
          msgSource: 'botConvers',
          msgType: 'incoming',
          msgKind: 'text',
          thoughts: [
            {
              thought:
                'Here is the check-in and check-out information for Westin Hotel Seattle'
            }
          ]
        },
        {
          msgSource: 'botConvers',
          msgType: 'incoming',
          msgKind: 'widget',
          thoughts: [
            {
              thought: <SmartCard />
            }
          ]
        }
      ]
    };
  }

  // chatInput();

  chatInput = (thought, type, source) => {
    let currentThought = thought;
    if (source === 'custConvers') {
      let convers = [...this.state.custConvers];
      let lastMsg = convers[convers.length - 1];
      let lastMsgType = lastMsg.msgType;
      if (lastMsgType === 'outgoing') {
        let newThought = {
          thought: currentThought
        };
        lastMsg.thoughts.push(newThought);
        this.setState({ custConvers: convers });
      } else {
        let newThought = {
          msgSource: 'custConvers',
          msgType: 'outgoing',
          thoughts: [
            {
              thought: currentThought
            }
          ]
        };
        convers.push(newThought);
        this.setState({ custConvers: convers });
      }
    } else {
      let convers = [...this.state.botConvers];
      let lastMsg = convers[convers.length - 1];
      let lastMsgType = lastMsg.msgType;
      if (lastMsgType === 'outgoing') {
        let newThought = {
          thought: currentThought
        };
        lastMsg.thoughts.push(newThought);
        this.setState({ botConvers: convers });
        this.botResponse(currentThought.source);
      } else {
        let newThought = {
          msgSource: 'botConvers',
          msgType: 'outgoing',
          thoughts: [
            {
              thought: currentThought
            }
          ]
        };
        convers.push(newThought);
        this.setState({ botConvers: convers });
        this.botResponse(currentThought.source);
      }
    }
  };

  botResponse = (message, source) => {
    console.log('inside botResponse');
    let convers = [...this.state.botConvers];
    let newThought = null;
    if (message === 'x') {
    } else {
      newThought = {
        msgSource: { source },
        msgType: 'incoming',
        thoughts: [
          {
            thought: "I don't understand - what do you mean?"
          }
        ]
      };
    }
    convers.push(newThought);
    this.setState({ botConvers: convers });
  };

  removeLast = whichArray => {
    if (whichArray === 'botConvers') {
      let currConvers = [...this.state.botConvers];
      const last = currConvers.length - 1;
      currConvers[last].thoughts.pop();
    } else {
      let currConvers = [...this.state.custConvers];
      const last = currConvers.length - 1;
      currConvers[last].thoughts.pop();
    }
  };

  render() {
    return (
      <Container>
        <PaneChat
          chatInput={this.chatInput}
          removeLast={this.removeLast}
          custConvers={this.state.custConvers}
          custReply={this.state.custReply}
          chatInput={this.chatInput}
        />
        <PaneBot
          chatInput={this.chatInput}
          removeLast={this.removeLast}
          botConvers={this.state.botConvers}
          botReply={this.state.botReply}
          chatInput={this.chatInput}
        />
      </Container>
    );
  }
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column: 1/3;
`;

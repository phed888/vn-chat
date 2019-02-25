import React, { Component } from "react";
import styled from "styled-components";
import PaneCustomer from "./PaneCustomer";
import PaneChat from "./PaneChat";
import PaneBot from "./PaneBot";

let chatCounter = 0;
let chatTimer = null;
let scroller = null;

export default class VNextContainer extends Component {
  constructor(props) {
    super(props);

    this.chatInput = this.chatInput.bind(this);

    this.state = {
      custReply: false,
      botReply: false,
      custConvers: [
        {
          msgSource: "custConvers",
          msgType: "outgoing",
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
          msgSource: "custConvers",
          msgType: "incoming",
          thoughts: [
            {
              thought: "I need to talk to an agent about my room."
            }
          ]
        },
        {
          msgSource: "custConvers",
          msgType: "outgoing",
          thoughts: [
            {
              thought:
                "Please give me your name so that I can connect you with an agent."
            }
          ]
        },
        {
          msgSource: "custConvers",
          msgType: "incoming",
          thoughts: [
            {
              thought: "Wilo"
            }
          ]
        },
        {
          msgSource: "custConvers",
          msgType: "outgoing",
          thoughts: [
            {
              thought: "Well, howdy Wilo!"
            }
          ]
        }
      ],
      botConvers: [
        {
          msgSource: "botConvers",
          msgType: "outgoing",
          thoughts: [
            {
              thought:
                "Please give me your name so that I can connect you with an agent."
            }
          ]
        },
        {
          msgSource: "botConvers",
          msgType: "incoming",
          thoughts: [
            {
              thought: "Wilo"
            }
          ]
        },
        {
          msgSource: "botConvers",
          msgType: "outgoing",
          thoughts: [
            {
              thought: "Well, howdy there Wilo!"
            }
          ]
        }
      ]
    };
  }

  chatInput = (thought, type, source) => {
    if (source === "custConvers") {
      let currentThought = thought;
      let convers = [...this.state.custConvers];
      let lastMsg = convers[convers.length - 1];
      let lastMsgType = lastMsg.msgType;
      if (lastMsgType === "outgoing") {
        let newThought = {
          thought: currentThought
        };
        lastMsg.thoughts.push(newThought);
        this.setState({ custConvers: convers });
      }
    } else {
    }

    // if (source === 'botConvers') {
    //   this.setState({ botConvers: [...this.state.botConvers, message] });
    // } else {
    //   this.setState({ custConvers: [...this.state.custConvers, message] });
    // }
  };
  removeLast = whichArray => {
    if (whichArray === "botConvers") {
      const last = this.state.botConvers.length - 1;
      let array = [...this.state.botConvers];
      array.splice(last, 1);
      this.setState({ botConvers: array });
    } else {
      const last = this.state.custConvers.length - 1;
      let array = [...this.state.custConvers];
      array.splice(last, 1);
      this.setState({ custConvers: array });
    }
  };

  handleClick = () => {
    let convers = this.state.custConvers;
    console.log("Hello");
    console.log(convers[convers.length - 1].msgType);
  };

  render() {
    return (
      <Container>
        <PaneCustomer />
        <PaneChat
          chatInput={this.chatInput}
          removeLast={this.removeLast}
          custConvers={this.state.custConvers}
          custReply={this.state.custReply}
        />
        <PaneBot
          chatInput={this.chatInput}
          removeLast={this.removeLast}
          botConvers={this.state.botConvers}
          botReply={this.state.botReply}
        />
      </Container>
    );
  }
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 24% 38% 38%;
`;

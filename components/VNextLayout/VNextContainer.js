import React, { Component } from "react";
import styled from "styled-components";
import PaneCustomer from "./PaneCustomer";
import PaneChat from "./PaneChat";
import PaneBot from "./PaneBot";

let chatCounter = 0;
let chatTimer = null;

export default class VNextContainer extends Component {
  constructor(props) {
    super(props);

    this.chatInput = this.chatInput.bind(this);

    this.state = {
      custReply: false,
      botReply: false,
      // custConvers2: {
      //   message: {
      //     msgSource: "custConvers",
      //     msgType: "outgoing",
      //     thought: {
      //       msgContent:
      //         "Hi, I'm the Expedia virtual assistant, here to help you with your booking needs."
      //     },
      //     thought: {
      //       msgContent:
      //         "And if I can't help you, I'll connect you to a friendly customer service agent."
      //     }
      //   },
      //   message: {
      //     msgSource: "custConvers",
      //     msgType: "incoming",
      //     thought: {
      //       msgContent: "I need to speak to an agent about my room."
      //     }
      //   },
      //   message: {
      //     msgSource: "custConvers",
      //     msgType: "outgoing",
      //     thought: {
      //       msgContent:
      //         "Please give me your name so that I can connect you with an agent."
      //     }
      //   },
      //   message: {
      //     msgSource: "custConvers",
      //     msgType: "incoming",
      //     thought: {
      //       msgContent: "Wilo"
      //     }
      //   }
      // },
      custConvers: [
        {
          msgSource: "custConvers",
          msgType: "outgoing",
          msgContent:
            "Hi, I'm the Expedia virtual assistant, here to help you with your booking needs."
        },
        {
          msgSource: "custConvers",
          msgType: "outgoing",
          msgContent:
            "And if I can't help you, I'll connect you to a friendly customer service agent."
        },
        {
          msgSource: "custConvers",
          msgType: "incoming",
          msgContent: "I need to speak to an agent about my room."
        },
        {
          msgSource: "custConvers",
          msgType: "outgoing",
          msgContent:
            "Please give me your name so that I can connect you with an agent."
        },
        {
          msgSource: "custConvers",
          msgType: "incoming",
          msgContent: "Wilo"
        }
      ],
      botConvers: [
        {
          msgSource: "botConvers",
          msgType: "outgoing",
          msgContent: "Hello"
        },
        {
          botSource: "custConvers",
          msgType: "incoming",
          msgContent: "Hello2"
        }
      ]
    };
  }

  chatInput = (test, type, source) => {
    let message = {
      msgSource: source,
      msgType: type,
      msgContent: test
    };
    if (source === "botConvers") {
      this.setState({ botConvers: [...this.state.botConvers, message] });
    } else {
      this.setState({ custConvers: [...this.state.custConvers, message] });
    }
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

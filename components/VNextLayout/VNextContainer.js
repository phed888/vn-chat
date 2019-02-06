import React, { Component } from "react";
import styled from "styled-components";
import PaneCustomer from "./PaneCustomer";
import PaneChat from "./PaneChat";
import PaneBot from "./PaneBot";

export default class VNextContainer extends Component {
  constructor(props) {
    super(props);

    this.chatInput = this.chatInput.bind(this);
    this.botInput = this.botInput.bind(this);

    this.state = {
      custConvers: [],
      botConvers: []
    };
  }

  chatInput = (test, type) => {
    let message = "{" + test + "}";
    if (type === "bot") {
      this.setState({ botConvers: [...this.state.botConvers, message] });
    } else {
      this.setState({ custConvers: [...this.state.custConvers, message] });
    }
  };

  botInput = test => {
    console.log("from bot pane " + test);
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

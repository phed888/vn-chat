import React, { Component } from "react";
import ConvoContainer from "../utilities/globalStyles/ConversationStyles";

export default class Conversation extends Component {
  render() {
    return (
      <ConvoContainer>
        <p>{this.props.convers}</p>
      </ConvoContainer>
    );
  }
}

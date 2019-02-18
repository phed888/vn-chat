import React, { Component } from "react";
import ConversationStyles from "./ConversationStyles";

export default class CustConversation extends Component {
  render() {
    const messages = this.props.custConvers.map((convo, index) => {
      return (
        <li key={index} className={`message ${convo.msgType}`}>
          <p className="thought">{convo.msgContent}</p>
        </li>
      );
    });

    return (
      <ConversationStyles>
        <ul className="conversation customer">{messages}</ul>
      </ConversationStyles>
    );
  }
}

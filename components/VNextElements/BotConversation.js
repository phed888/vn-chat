import React, { Component } from "react";
import ConversationStyles from "./ConversationStyles";

let chatCounter = 0;
let chatTimer = null;
// let botReply = this.props.botReply;

export default class BotConversation extends Component {
  componentDidUpdate() {
    if (chatCounter > 0) {
      clearInterval(chatTimer);
      chatCounter = 0;
      this.startTimer();
    } else {
      this.startTimer();
    }
  }
  startTimer() {
    chatTimer = setInterval(() => this.tick(), 1000);
  }
  tick() {
    chatCounter = chatCounter + 1;
  }

  render() {
    const messages = this.props.botConvers.map(convo => {
      return (
        <li key={convo.msgContent} className={`message ${convo.msgType}`}>
          <p className="thought">{convo.msgContent}</p>
        </li>
      );
    });

    return (
      <ConversationStyles>
        <ul className="conversation bot">{messages}</ul>
      </ConversationStyles>
    );
  }
}

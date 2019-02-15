import React, { Component } from 'react';
import ConversationPane from './ConversationPane';

let chatCounter = 0;
let chatTimer = null;

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
        <li key={convo.msgContent} className="thought">
          <span>{convo.msgContent}</span>
        </li>
      );
    });

    return (
      <ConversationPane>
        <ul className="message incoming">{messages}</ul>
      </ConversationPane>
    );
  }
}

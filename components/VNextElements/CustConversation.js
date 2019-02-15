import React, { Component } from 'react';
import ConversationPane from './ConversationPane';

export default class CustConversation extends Component {
  render() {
    const messages = this.props.custConvers.map(convo => {
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

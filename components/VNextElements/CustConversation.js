import React, { Component } from 'react';
import ConversationStyles from './ConversationStyles';

export default class CustConversation extends Component {
  render() {
    const messages = this.props.custConvers.map((convo, index) => {
      return (
        <li key={index} className={`message ${convo.msgType}`}>
          <div class="thoughts">
            {convo.thoughts.map((thought, index) => {
              return <p className="thought">{thought.thought}</p>;
            })}
          </div>
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

import React, { Component } from 'react';
import ConversationStyles from './ConversationStyles';

export default class CustConversation extends Component {
  render() {
    const messages = this.props.custConvers2.map((convers, index) => {
      return (
        <li key={index} className={`message ${convers.msgType}`}>
          <div className="thoughts">
            {convers.thoughts.map((thought, index) => {
              return (
                <p className="thought" key={index}>
                  {thought.thought}
                </p>
              );
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

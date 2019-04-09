import React, { Component } from 'react';
import ConversationPane from './ConversationStyles';

export default class CustConversation extends Component {
  constructor(props) {
    super(props);
    this.scrollTargetBot = React.createRef();
  }
  componentDidMount() {
    this.scrollTargetBot.current.scrollIntoView({
      block: 'end',
      behavior: 'smooth'
    });
  }
  componentDidUpdate() {
    this.scrollTargetBot.current.scrollIntoView({
      block: 'end',
      behavior: 'smooth'
    });
  }
  render() {
    const messages = this.props.botConvers.map((bconvers, index) => {
      return (
        <li key={index} className={`message ${bconvers.msgType}`}>
          <div className="thoughts">
            {bconvers.thoughts.map((thought, index) => {
              return (
                <p className={`thought ${bconvers.msgKind}`} key={index}>
                  {thought.thought}
                </p>
              );
            })}
          </div>
        </li>
      );
    });
    return (
      <ConversationPane>
        <ul className="conversation bot">
          {messages}
          <div className="scrollTargetCust" ref={this.scrollTargetBot} />
        </ul>
      </ConversationPane>
    );
  }
}

import React, { Component } from 'react';
import ConvoContainer from './ConversationStyles';
import ConversationPane from './ConversationStyles';

export default class CustConversation extends Component {
  constructor(props) {
    super(props);
    this.scrollTargetCust = React.createRef();
  }
  componentDidMount() {
    this.scrollTargetCust.current.scrollIntoView({
      block: 'end',
      behavior: 'smooth'
    });
  }
  componentDidUpdate() {
    this.scrollTargetCust.current.scrollIntoView({
      block: 'end',
      behavior: 'smooth'
    });
  }
  render() {
    const messages = this.props.custConvers.map((cconvers, index) => {
      return (
        <li key={index} className={`message ${cconvers.msgType}`}>
          <div className="thoughts">
            {cconvers.thoughts.map((thought, index) => {
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
      <ConversationPane>
        <ul className="conversation customer">
          {messages}
          <div className="scrollTargetCust" ref={this.scrollTargetCust} />
        </ul>
      </ConversationPane>
    );
  }
}

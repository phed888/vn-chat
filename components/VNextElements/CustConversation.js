import React, { Component } from "react";
import ConversationStyles from "./ConversationStyles";

export default class CustConversation extends Component {
  constructor(props) {
    super(props);
    this.scrollTargetCust = React.createRef();
  }
  componentDidMount() {
    this.scrollTargetCust.current.scrollIntoView({
      block: "end",
      behavior: "smooth"
    });
  }
  componentDidUpdate() {
    this.scrollTargetCust.current.scrollIntoView({
      block: "end",
      behavior: "smooth"
    });
  }
  render() {
    const messages = this.props.custConvers.map((convers, index) => {
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
        <ul className="conversation customer">
          {messages}
          <div className="scrollTargetCust" ref={this.scrollTargetCust} />
        </ul>
      </ConversationStyles>
    );
  }
}

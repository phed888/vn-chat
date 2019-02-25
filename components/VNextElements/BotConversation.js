import React, { Component } from "react";
import ConversationStyles from "./ConversationStyles";

export default class CustConversation extends Component {
  constructor(props) {
    super(props);
    this.scrollTargetBot = React.createRef();
  }
  componentDidMount() {
    this.scrollTargetBot.current.scrollIntoView({
      block: "end",
      behavior: "smooth"
    });
  }
  componentDidUpdate() {
    this.scrollTargetBot.current.scrollIntoView({
      block: "end",
      behavior: "smooth"
    });
  }
  render() {
    const messages = this.props.botConvers.map((convers, index) => {
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
        <ul className="conversation bot">
          {messages}
          <div className="scrollTargetCust" ref={this.scrollTargetBot} />
        </ul>
      </ConversationStyles>
    );
  }
}

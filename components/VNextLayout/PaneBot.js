import React, { Component } from "react";
import ChatPane from "../utilities/globalStyles/ChatPane";
import PaneHeader from "../utilities/globalStyles/PaneHeader";
import ChatBot from "../icons/ChatBot";
import ChatInput from "../VNextElements/ChatInput/ChatInput";
import Conversation from "../VNextElements/Conversation";

export default class PaneBot extends Component {
  handleClick = () => {
    this.props.testFunc("Bloop");
  };

  render() {
    return (
      <ChatPane BGColor="rgba(255, 255, 255, 0.8)">
        <PaneHeader onClick={this.handleClick}>
          <ChatBot color="#4a4a4a" />
          <div className="header-title">
            <p className="title">Agent Help Bot</p>
            <p className="subtitle">Have a trip or service question?</p>
          </div>
        </PaneHeader>
        <Conversation convers={this.props.botConvers} />
        <ChatInput
          submitTitle="Go"
          inputPlaceholder="Placeholder text..."
          chatInput={this.props.chatInput}
          inputType="bot"
        />
      </ChatPane>
    );
  }
}

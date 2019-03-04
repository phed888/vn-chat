import React, { Component } from 'react';
import ChatPane from '../utilities/globalStyles/ChatPane';
import PaneHeader from '../utilities/globalStyles/PaneHeader';
import ChatBot from '../icons/ChatBot';
import ChatInput from '../VNextElements/ChatInput/ChatInput';
import BotConversation from '../VNextElements/BotConversation';

export default class PaneBot extends Component {
  render() {
    return (
      <ChatPane BGColor="rgba(255, 255, 255, 0.8)">
        <PaneHeader className="botChat" onClick={this.handleClick}>
          <ChatBot color="#4a4a4a" />
          <div className="header-title">
            <p className="title">Agent Help Bot</p>
            <p className="subtitle">Have a trip or service question?</p>
          </div>
        </PaneHeader>
        <BotConversation
          botConvers={this.props.botConvers}
          botReply={this.props.botReply}
        />
        <ChatInput
          submitTitle="Go"
          inputPlaceholder="Placeholder text..."
          chatInput={this.props.chatInput}
          removeLast={this.props.removeLast}
          msgSource="botConvers"
          inputType="outgoing"
        />
      </ChatPane>
    );
  }
}

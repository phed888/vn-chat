import React, { Component } from 'react';
import ChatPane from '../utilities/globalStyles/ChatPane';
import PaneHeader from '../utilities/globalStyles/PaneHeader';
import ChatInput from '../VNextElements/ChatInput/ChatInput';
import Conversation from '../VNextElements/Conversation';

export default class PaneChat extends Component {
  handleClick = () => {
    this.props.testFunc('Bloop');
  };

  render() {
    return (
      <ChatPane BGColor="rgba(255, 255, 255, 0.9)">
        <PaneHeader onClick={this.handleClick}>
          <div className="header-title">
            <p className="title">Hotel cancel</p>
            <p className="subtitle">Have a trip or service question?</p>
          </div>
        </PaneHeader>
        <Conversation />
        <ChatInput
          submitTitle="Go"
          inputPlaceholder="Placeholder text..."
          chatInput={this.props.chatInput}
          inputType="chat"
        />
      </ChatPane>
    );
  }
}

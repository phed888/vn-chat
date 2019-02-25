import React, { Component } from 'react';
import ChatPane from '../utilities/globalStyles/ChatPane';
import PaneHeader from '../utilities/globalStyles/PaneHeader';
import ChatInput from '../VNextElements/ChatInput/ChatInput';
import CustConversation from '../VNextElements/CustConversation';
import ExpediaChatLogo from '../icons/ExpediaChatLogo';
import TransferChat from '../icons/TransferChat';

export default class PaneChat extends Component {
  render() {
    return (
      <ChatPane BGColor="rgba(255, 255, 255, 0.9)">
        <PaneHeader className="customerChat">
          <div className="custPOS">
            <ExpediaChatLogo />
            <div className="header-title">
              <p className="title">Hotel cancel</p>
              <p className="subtitle">Have a trip or service question?</p>
            </div>
          </div>
          <div className="conversationControls">
            <TransferChat />
          </div>
        </PaneHeader>
        <CustConversation
          custConvers={this.props.custConvers}
          custReply={this.props.custReply}
        />
        <ChatInput
          submitTitle="Go"
          inputPlaceholder="Placeholder text..."
          chatInput={this.props.chatInput}
          removeLast={this.props.removeLast}
          msgSource="custConvers"
          custConvers2={this.props.custConvers} //remove
        />
      </ChatPane>
    );
  }
}

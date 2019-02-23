import React, { Component } from 'react';
import ChatPane from '../utilities/globalStyles/ChatPane';
import PaneHeader from '../utilities/globalStyles/PaneHeader';
import ChatInput from '../VNextElements/ChatInput/ChatInput';
import CustConversation from '../VNextElements/CustConversation';

export default class PaneChat extends Component {
  render() {
    return (
      <ChatPane BGColor="rgba(255, 255, 255, 0.9)">
        <PaneHeader onClick={this.handleClick}>
          <div className="header-title">
            <p className="title">Hotel cancel</p>
            <p className="subtitle">Have a trip or service question?</p>
          </div>
        </PaneHeader>
        <CustConversation
          custConvers2={this.props.custConvers2}
          custReply={this.props.custReply}
        />
        <ChatInput
          submitTitle="Go"
          inputPlaceholder="Placeholder text..."
          chatInput={this.props.chatInput}
          removeLast={this.props.removeLast}
          msgSource="custConvers"
          custConvers2={this.props.custConvers2} //remove
        />
      </ChatPane>
    );
  }
}

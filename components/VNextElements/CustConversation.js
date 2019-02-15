import React, { Component } from 'react';
import styled from 'styled-components';

export default class CustConversation extends Component {
  render() {
    const messages = this.props.custConvers.map(convo => {
      return (
        <li key={convo.msgContent} className="thought">
          <span>{convo.msgContent}</span>
        </li>
      );
    });

    return (
      <ConversationPane>
        <ul className="message incoming">{messages}</ul>
      </ConversationPane>
    );
  }
}

const ConversationPane = styled.div`
  padding: 16px;
  flex-grow: 2;
  overflow-y: auto;
  .message {
    position: relative;
    list-style: none;
    padding: 0;
    margin: 0 0 8px 0;
    .thought {
      display: flex;
    }
    .thought span {
      border-radius: 0;
      margin-bottom: 2px;
      padding: 12px 16px;
      max-width: 75%;
    }
  }
  .incoming:before {
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    background-image: url('../../static/images/icn-chatBot.svg');
    height: 24px;
    width: 24px;
  }
  .message.incoming {
    padding-left: 32px;
    .thought span {
      background-color: #f0f0f2;
    }
    .thought:only-child span {
      border-radius: 8px 8px 8px 0;
    }
    .thought:first-child span {
      border-radius: 8px 8px 0 0;
    }
    .thought:last-child span {
      border-radius: 0 0 8px 0;
    }
  }
  .message.outgoing:after {
    position: absolute;
    right: 0;
    bottom: 0;
    content: '';
    background-image: url('../../static/images/icn-chatBot.svg');
    height: 24px;
    width: 24px;
  }
  .message.outgoing {
    padding-right: 32px;
    .thought {
      flex-direction: row-reverse;
    }
    .thought span {
      /* background-color: #dbdbf1; */
      background-color: #f0f0f2;
      display: inline-block;
    }
    .thought:only-child span {
      border-radius: 8px 8px 0 8px;
    }
    .thought:first-child span {
      border-radius: 8px 8px 0 0;
    }
    .thought:last-child span {
      border-radius: 0 0 0 8px;
    }
  }
`;

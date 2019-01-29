import React, { Component } from 'react';
import styled from 'styled-components';
import ChatBot from '../icons/ChatBot';
import ChatInput from '../VNextElements/ChatInput';

export default class PaneBot extends Component {
  handleClick = () => {
    this.props.testFunc('Bloop');
  };

  render() {
    return (
      <BotPane>
        <header onClick={this.handleClick}>
          <ChatBot color="#4a4a4a" />
          <div className="header-title">
            <p className="title">Agent Help Bot</p>
            <p className="subtitle">Have a trip or service question?</p>
          </div>
        </header>
        <ChatInput
          submitTitle="Go"
          inputPlaceholder="Placeholder text..."
          testFunc={this.props.testFunc}
        />
      </BotPane>
    );
  }
}

const BotPane = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  flex-direction: column;
  header {
    display: flex;
    align-items: center;
    padding: 40px 20px 20px;
    background-color: #fff;
    height: 80px;
    font-size: 16px;
    border-radius: 0 4px 0 0;
  }
  .title,
  .subtitle {
    padding: 0;
    margin: 0;
  }
  .header-title {
    padding-left: 16px;
  }
  .title {
    font-size: 16px;
    color: #00001e;
  }
  .subtitle {
    font-size: 12px;
    color: #00001e;
    opacity: 0.6;
    margin-top: 2px;
  }
  .conversation {
    height: 100%;
  }
  .chat-container {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto 84px;
    height: calc(100vh - 222px);
    border-radius: 0 0 4px 0;
  }
`;

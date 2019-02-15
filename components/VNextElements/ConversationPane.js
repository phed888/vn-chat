import styled from 'styled-components';

const ConversationPane = styled.div`
  padding: 16px;
  flex-grow: 2;
  overflow-y: auto;
  .message {
    position: relative;
    font-size: 14px;
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
  .incoming {
    padding-left: 32px;
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
  .outgoing {
    padding-right: 32px;
  }
  .outgoing:after {
    position: absolute;
    right: 0;
    bottom: 0;
    content: '';
    background-image: url('../../static/images/icn-chatBot.svg');
    height: 24px;
    width: 24px;
  }
  .outgoing .thought {
    flex-direction: row-reverse;
  }
  .message {
    .thought span {
      background-color: #ffffff;
    }
    .thought:first-child span {
      border-radius: 8px 8px 0 0;
    }
    .thought:last-child span {
      border-radius: 0 0 8px 0;
    }
    .thought:only-child span {
      border-radius: 8px 8px 8px 0;
    }
  }
`;

export default ConversationPane;

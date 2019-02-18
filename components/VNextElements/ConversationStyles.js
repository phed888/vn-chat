import styled from 'styled-components';

const ConversationPane = styled.div`
  padding: 16px;
  font-size: 14px;
  flex-grow: 2;
  overflow-y: auto;
  .conversation {
    list-style: none;
    padding: 0;
    margin: 0 0 8px 0;
    .message {
      display: flex;
      position: relative;
    }
    .message .thought {
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
    flex-direction: row-reverse;
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
  .conversation {
    .message .thought {
      background-color: #ffffff;
    }
    .message:first-child .thought {
      border-radius: 8px 8px 0 0;
    }
    .message:last-child .thought {
      border-radius: 0 0 8px 0;
    }
    .message:only-child .thought {
      border-radius: 8px 8px 8px 0;
    }
  }
`;

export default ConversationPane;

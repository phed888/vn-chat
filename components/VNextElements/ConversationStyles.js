import styled from "styled-components";

const ConversationPane = styled.div`
  font-size: 14px;
  height: calc(100vh - 305px);
  /* overflow-y: auto; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .scrolling-container {
  }
  .conversation {
    overflow-y: auto;

    padding: 16px;

    margin: 0;
    .message {
      display: flex;
      position: relative;
      margin-bottom: 10px;
    }
    .message .thoughts {
      display: flex;
      flex-direction: column;
      max-width: 75%;
    }
    .thoughts .thought {
      display: block;
      border-radius: 0;
      margin: 0 0 2px;
      padding: 12px 16px;
    }
  }
  .incoming {
    padding-left: 32px;
  }
  .incoming:before {
    position: absolute;
    left: 0;
    bottom: 0;
    content: "";
    background-image: url("../../static/images/icn-chatBot.svg");
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
    content: "";
    background-image: url("../../static/images/icn-chatBot.svg");
    height: 24px;
    width: 24px;
  }
  .outgoing .thought {
    flex-direction: row-reverse;
  }
  .message.incoming {
    .thoughts .thought {
      background-color: #ffffff;
    }
    .thoughts:first-child .thought {
      border-radius: 8px 8px 0 0;
    }
    .thoughts:last-child .thought {
      border-radius: 0 0 8px 0;
    }
    .thoughts:only-child .thought {
      border-radius: 8px 8px 8px 0;
    }
  }
  .message.outgoing {
    .thoughts .thought {
      background-color: #dddddd;
    }
    .thoughts .thought:last-child {
      border-radius: 0 0 0 8px;
    }
    .thoughts .thought:first-child {
      border-radius: 8px 8px 0 0;
    }
    .thoughts .thought:only-child {
      border-radius: 8px 8px 0 8px;
    }
  }
`;

export default ConversationPane;

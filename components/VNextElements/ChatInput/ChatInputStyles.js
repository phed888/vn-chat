import styled from 'styled-components';

const ChatInputContainer = styled.form`
  background-color: rgba(0, 0, 30, 0.1);
  border-top: 1px solid rgba(0, 0, 30, 0.12);
  padding: 16px 20px;
  position: relative;
  height: 85px;
  input {
    border: 1px solid rgba(0, 0, 30, 0.12);
    font-size: 14px;
    border-radius: 4px;
    background-color: #fff;
    height: 52px;
    width: 100%;
    padding: 0 66px 0 16px;
  }
  input::placeholder {
    font-style: italic;
    font-size: 14px;
    color: rgba(0, 0, 30, 0.6);
  }
  button {
    border: none;
    background-color: transparent;
    position: absolute;
    padding: 16px;
    right: 20px;
    font-size: 14px;
    color: rgba(0, 0, 30, 0.28);
    height: 52px;
    cursor: pointer;
  }
`;

export default ChatInputContainer;

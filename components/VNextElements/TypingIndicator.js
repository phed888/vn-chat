import React, { Component } from 'react';
import styled from 'styled-components';

export default class TypingIndicator extends Component {
  render() {
    return (
      <Typing>
        <p />
        <p />
        <p />
      </Typing>
    );
  }
}
const Time = 1000;
const Typing = styled.div`
  box-sizing: border-box;
  display: flex;
  margin: 4px 0;
  p {
    margin: 0;
    background-color: #00001e;
    height: 9px;
    width: 9px;
    opacity: 0.3;
    border-radius: 50%;
    margin-right: 6px;
    animation: bouncing ${Time}ms infinite;
  }
  p:nth-child(2) {
    animation-delay: ${Time * -0.846}ms;
  }
  p:nth-child(3) {
    animation-delay: ${Time * -0.692}ms;
    margin-right: 0;
  }
  @keyframes bouncing {
    0% {
      transform: translateY(-4px);
      animation-timing-function: ease-in;
    }
    60% {
      transform: translateY(4px);
      animation-timing-function: linear;
    }
    100% {
      transform: translateY(-4px);
      animation-timing-function: ease-in;
    }
  }
`;

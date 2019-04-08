import React, { Component } from 'react';
import styled from 'styled-components';
import ChevronLeft from '../icons/ChevronLeft'
import ChevronRight from '../icons/ChevronRight';

export default class CardHeader extends Component {
  goPrevious = () => {
    let activeCard = this.props.activeCard
    if(activeCard > 1) {
      activeCard = activeCard - 1;
    } else {
      activeCard = 3;
    }
    this.props.changeState(activeCard);
  }
  goNext = () => {
    let activeCard = this.props.activeCard;
    if(activeCard < 3) {
      activeCard = activeCard + 1;
    } else {
      activeCard = 1;
    }
    this.props.changeState(activeCard);
  }
  render() {
    return (
      <HeaderContainer >
        <span className="icn-Previous" onClick={this.goPrevious}>
        <ChevronLeft />
        </span>
        <span className="header-title">Header</span>
        <span className="icn-Next" onClick={this.goNext}>
          <ChevronRight />
        </span>
      </HeaderContainer>
    )
  }
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #cccccc;
  .icn-Previous, .icn-Next {
    display: block;
    padding: 8px;
    cursor: pointer;
  }
  .icn-Previous {
    margin-right: 8px;
  }
  .icn-Next {
    margin-left: 8px;
  }
  .icn-Previous:hover, .icn-Next:hover {
    background-color: #f0f0f0;
    border-radius: 4px
  }
`;

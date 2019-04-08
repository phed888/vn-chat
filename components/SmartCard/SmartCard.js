import React, { Component } from 'react';
import styled from 'styled-components';
import CardHeader from './CardHeader';
import SmartContent from './SmartContent';

export default class SmartCard extends Component {
  state = {
    activeCard: 1
  }
  changeState = (activeCard) => {
    this.setState({activeCard: activeCard});
  }

  render() {
    return (
      <SmartCardContainer>
        <CardHeader activeCard={this.state.activeCard} changeState={this.changeState}/>
        <SmartContent activeCard={this.state.activeCard}/>
      </SmartCardContainer>
    )
  }
}

const SmartCardContainer = styled.div`
    background-color: #ffffff;
    border-radius: 8px;
    width: 100%;
`;

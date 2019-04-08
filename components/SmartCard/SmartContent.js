import React, { Component } from 'react';
import styled from 'styled-components';
import ContentCard from './ContentCard';

export default class SmartContent extends Component {
  
  render() {
    return (
      <SmartContentContainer>
        <ContentCard cardText="1" activeCard={this.props.activeCard}/>
        <ContentCard cardText="2" activeCard={this.props.activeCard} />
        <ContentCard cardText="3" activeCard={this.props.activeCard} />
      </SmartContentContainer>
    )
  }
}

const SmartContentContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  position: relative;
`;

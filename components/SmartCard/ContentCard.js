import React, { Component } from 'react';
import styled from 'styled-components';

export default class ContentCard extends Component {
  render() {
    return (
      <ContentCardContainer className={this.props.activeCard == this.props.cardText ? 'cardActive' : ''}>
        <p className="cardTitle">{ this.props.cardText }</p>
      </ContentCardContainer>
    )
  }
}

const ContentCardContainer = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  &.cardActive {
    display: flex;
    width: 100%;
  }
  .cardTitle {
    font-size: 100px;
  }
`;

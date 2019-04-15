import React, { Component } from 'react';
import styled from 'styled-components';
import ContentCard from './ContentCard';
import Amenity1 from './Amenity1';
import Amenity2 from './Amenity2';

export default class SmartContent extends Component {
  
  render() {
    return (
      <SmartContentContainer>
        <Amenity1 cardText="1" activeCard={this.props.activeCard}/>
        <Amenity2 cardText="2" activeCard={this.props.activeCard} />
        {/* <ContentCard cardText="3" activeCard={this.props.activeCard} /> */}
      </SmartContentContainer>
    )
  }
}

const SmartContentContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  position: relative;
`;

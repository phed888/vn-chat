import React from 'react';
import styled from 'styled-components';

export default class Amenity1 extends React.Component {
  render() {
    return (
      <AmenityContainer
        className={
          this.props.activeCard == this.props.cardText ? 'cardActive' : ''
        }
      >
        <ul>
          <li>Check-in is from 3 PM – midnight and check-out is 11 AM</li>
          <li>Check-in is located at 123 Elm Street</li>
          <li>
            Early check-in is 18 USD (subject to availability) and after-hours
            check-in from 1AM – 3AM is 24 USD
          </li>
        </ul>
        <div className="card-pagination">1 of 2</div>
      </AmenityContainer>
    );
  }
}

const AmenityContainer = styled.div`
  padding: 0 12px 12px;
  display: none;
  justify-content: center;
  align-items: center;
  &.cardActive {
    display: block;
    width: 100%;
  }
  ul {
    list-style-type: disc;
    margin: 0;
    padding: 0 0 0 12px;
    margin-bottom: 12px;
    li {
      padding: 12px 0;
      border-bottom: 1px solid #eeeeee;
    }
  }
  .card-pagination {
    text-align: center;
  }
`;


import React from 'react';
import styled from 'styled-components';

export default class Amenity2 extends React.Component {
  render() {
    return (
      <AmenityContainer
        className={
          this.props.activeCard == this.props.cardText ? 'cardActive' : ''
        }
      >
        <ul>
          <li>
            Late check-out is available for a fee (subject to availability)
          </li>
          <li>Minimum check-in age: 18</li>
          <li>Express check-in and check-out</li>
          <li>24-hour front desk</li>
        </ul>
        <div className="card-pagination">2 of 2</div>
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

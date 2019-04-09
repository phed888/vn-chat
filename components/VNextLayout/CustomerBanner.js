import React, { Component } from 'react';
import styled from 'styled-components';

export default class CustomerBanner extends Component {
  render() {
    return (
      <CustomerBannerContainer>
        <li className="customer-name">Chachi Arredondo</li>
        <li className="customer-email">
          <span className="label">Email:</span>thechachi@gmail.com
        </li>
        <li className="customer-phone">
          <span className="label">Phone:</span>44 20 7123 123
        </li>
        <li className="customer-account">
          <span className="label">Account:</span>3587168
        </li>
      </CustomerBannerContainer>
    );
  }
}

const CustomerBannerContainer = styled.ul`
  height: 64px;
  margin: 0;
  align-items: center;
  width: 100%;
  display: flex;
  grid-column: 1/3;
  background-color: #ffffff;
  border-radius: 8px 8px 0 0;
  border-bottom: 1px solid rgba(0, 0, 30, 0.12);
  list-style-type: none;
  padding-left: 20px;
  grid-column: 1/3;
  .customer-name {
    font-size: 20px;
  }
  .customer-email,
  .customer-phone,
  .customer-account {
    padding-top: 3px;
    margin-left: 24px;
    .label {
      margin-right: 4px;
      color: rgba(0, 0, 30, 0.6);
    }
  }
  .customer-phone {
    padding-right: 24px;
    border-right: 1px solid rgba(0, 0, 30, 0.12);
  }
`;

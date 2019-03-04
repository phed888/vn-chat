import React, { Component } from 'react';
import styled from 'styled-components';
import VoyLogo from '../icons/VoyLogo';
import IconPhone from '../icons/IconPhone';
import IconNotification from '../icons/IconNotification';
import DropdownCaret from '../icons/DropdownCaret';

export default class GlobalHeader extends Component {
  render() {
    return (
      <GlobalHeaderContainer>
        <VoyLogo />
        <div className="global-controls">
          <IconPhone />
          <IconNotification />
          <div className="agent-lockup">
            <div className="agent-id">
              <div className="agent-avatar">AS</div>
              <div className="agent-info">
                <p className="agent-name">Angela Smith</p>
                <p className="agent-status">Initial login</p>
              </div>
            </div>
            <DropdownCaret />
          </div>
        </div>
      </GlobalHeaderContainer>
    );
  }
}

const GlobalHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
  .global-controls {
    display: flex;
    align-items: center;
    * {
      margin-right: 20px;
    }
    *:last-child {
      margin-right: 0;
    }
    .agent-lockup,
    .agent-id {
      display: flex;
      align-items: center;
      justify-content: space-between;
      *:last-child {
        float: right;
      }
      .agent-avatar {
        display: flex;
        border-radius: 18px;
        height: 36px;
        width: 36px;
        background-color: rgba(255, 255, 255, 0.7);
        align-items: center;
        justify-content: center;
        margin-right: 8px;
        color: #00001d;
      }
      .agent-info {
        .agent-name,
        .agent-status {
          margin: 0;
          font-size: 14px;
          font-weight: bold;
          color: rgba(255, 255, 255, 0.7);
        }
        .agent-status {
          font-weight: normal;
          color: #fff;
          margin-top: 4px;
        }
      }
    }
    .agent-lockup {
      min-width: 184px;
      justify-content: space-between;
    }
  }
`;

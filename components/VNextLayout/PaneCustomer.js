import React, { Component } from 'react';
import ChatPane from '../utilities/globalStyles/ChatPane';
import PaneHeader from '../utilities/globalStyles/PaneHeader';
import CustDetails from '../VNextElements/CustDetails';

export default class PaneCustomer extends Component {
  render() {
    return (
      <ChatPane BGColor="rgba(255, 255, 255, 1)">
        <PaneHeader onClick={this.handleClick}>
          <div className="header-title">
            <p className="title">Wilhelmina Longmire</p>
            <p className="subtitle" />
          </div>
        </PaneHeader>
        <CustDetails />
        <div />
      </ChatPane>
    );
  }
}

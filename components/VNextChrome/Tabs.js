import React, { Component } from 'react';
import styled from 'styled-components';
import Tab from './Tab';

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'Chachi Arredondo'
    };

    // This binding is necessary to make `this` work in the callback
    this.onClickTabItem = this.onClickTabItem.bind(this);
  }

  onClickTabItem = title => {
    this.setState({ activeTab: title });
  };

  render() {
    return (
      <TabBar>
        <Tab
          active={this.state.activeTab}
          title="Allesandro"
          link="/"
          tabType="tab-title alert"
          badgeType="badge-disc"
          badgeValue="1"
          tabClick={this.onClickTabItem}
        />
        <Tab
          active={this.state.activeTab}
          title="Chachi Arredondo"
          link="/"
          tabType="tab-title"
          badgeType="badge-bubble"
          badgeValue=""
          tabClick={this.onClickTabItem}
        />
      </TabBar>
    );
  }
}

const TabBar = styled.ul`
  height: 40px;
  display: flex;
  list-style: none;
  padding-left: 48px;
  margin: 12px 0 0 0;
  grid-column: 1/3;
  li {
    display: flex;
    background-color: #fff;
    padding: 0;
    position: relative;
    margin-right: 27px;
    font-size: 14px;
    cursor: pointer;
    width: 174px;
  }
  li:hover,
  li:hover::before,
  li:hover::after {
    background-color: #dddfe5;
  }

  li.is-active {
    z-index: 1;
  }
  li.is-active,
  li.is-active::before,
  li.is-active::after {
    background-color: #fff;
    border: none;
  }
  li,
  li::before,
  li::after {
    background-color: #bbc0cc;
  }
  li::after,
  li::before {
    content: '';
    width: 28px;
    height: 40px;
    position: absolute;
    top: 0;
  }
  li::after {
    z-index: -1;
    transform: skewX(26deg);
    right: -18px;
    border-top-right-radius: 8px;
    border-right: 3px solid #212c53;
  }
  li::before {
    z-index: -2;
    transform: skewX(-26deg);
    left: -18px;
    border-top-left-radius: 8px;
    border-left: 3px solid #212c53;
  }
  li a,
  li a:link,
  li a:visited,
  li a:active {
    text-decoration: none;
    text-align: left;
    color: #000;
  }
  .tab-title {
    display: flex;
    padding-top: 14px;
    width: 100%;
  }
  .tab-title.alert {
    border-top: 4px solid #e83e8c;
    padding-top: 10px;
  }
  .badge-disc {
    height: 16px;
    width: 16px;
    background-color: #e83e8c;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #fff;
    margin-right: 8px;
    border-radius: 8px;
  }
  .badge-bubble {
    width: 16px;
    height: 16px;
    margin-right: 8px;
    background: url('/static/images/chat-bubble.svg');
    color: red;
  }
`;

export default Tabs;

import React, { Component } from 'react';
import Link from 'next/link';

class Tab extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    const { title, tabClick } = this.props;
    tabClick(title);
  };

  render() {
    return (
      <li
        className={
          this.props.active === this.props.title ? 'is-active' : undefined
        }
        onClick={this.handleClick}
      >
        <Link href={this.props.link}>
          <a className={this.props.tabType}>
            <span className={this.props.badgeType}>
              {this.props.badgeValue}
            </span>
            {this.props.title}
          </a>
        </Link>
      </li>
    );
  }
}

export default Tab;

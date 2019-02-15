import React, { Component } from 'react';
import ConvoContainer from '../utilities/globalStyles/ConversationStyles';

export default class CustDetails extends Component {
  render() {
    // console.log(this.props.custConvers);
    // const messages = this.props.custConvers.map(convo => {
    //   return <li key={convo.msgContent}>{convo.msgContent}</li>;
    // });

    return (
      <ConvoContainer>
        <ul>Customer details</ul>
      </ConvoContainer>
    );
  }
}

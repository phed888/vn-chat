import React, { Component } from 'react';
import ChatInputContainer from './ChatInputStyles';

class ChatInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textInput: ''
    };
  }

  handleChange = event => {
    this.setState({ textInput: event.target.value });
  };

  submitChange = event => {
    event.preventDefault();
    this.props.chatInput(this.state.textInput, this.props.inputType);
    this.setState({ textInput: '' });
  };

  render() {
    return (
      <ChatInputContainer onSubmit={this.submitChange}>
        <input
          type="text"
          placeholder={this.props.inputPlaceholder}
          value={this.state.textInput}
          onChange={this.handleChange}
        />
        <button
          type="submit"
          className={this.state.textInput ? 'is-active' : null}
        >
          {this.props.submitTitle}
        </button>
      </ChatInputContainer>
    );
  }
}

export default ChatInput;

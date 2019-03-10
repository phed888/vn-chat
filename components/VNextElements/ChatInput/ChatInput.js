import React, { Component } from 'react';
import ChatInputContainer from './ChatInputStyles';
import TypingIndicator from '../TypingIndicator';

let typingTimer = null;

class ChatInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textInput: '',
      formInput: ''
    };
  }

  handleChange = event => {
    this.setState({ textInput: event.target.value });
    this.setState({ formInput: event.target.value });
  };

  submitChange = event => {
    event.preventDefault();
    this.setState({ formInput: '' });
    // this.startTyping(1000);
    this.props.chatInput(
      this.state.textInput,
      this.props.inputType,
      this.props.msgSource
    );
    this.setState({ textInput: '' });
    this.setState({ formInput: '' });
  };

  // Display typing indicator after submittin
  startTyping(delay) {
    typingTimer = setInterval(() => this.stopTyping(), delay);
    this.props.chatInput(
      <TypingIndicator />,
      this.props.inputType,
      this.props.msgSource
    );
  }
  stopTyping() {
    clearInterval(typingTimer);
    this.props.removeLast(this.props.msgSource, this.props.inputType);
    this.addMessage();
  }
  addMessage() {
    this.props.chatInput(
      this.state.textInput,
      this.props.inputType,
      this.props.msgSource
    );
    this.setState({ textInput: '' });
    this.setState({ formInput: '' });
  }

  render() {
    return (
      <ChatInputContainer onSubmit={this.submitChange}>
        <input
          type="text"
          placeholder={this.props.inputPlaceholder}
          value={this.state.formInput}
          onChange={this.handleChange}
        />
        <button
          type="submit"
          className={this.state.formInput ? 'is-active' : null}
        >
          {this.props.submitTitle}
        </button>
      </ChatInputContainer>
    );
  }
}

export default ChatInput;

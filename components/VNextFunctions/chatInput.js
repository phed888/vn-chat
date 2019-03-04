chatInput = (thought, type, source) => {
  let currentThought = thought;
  if (source === 'custConvers') {
    let convers = [...this.state.custConvers];
    let lastMsg = convers[convers.length - 1];
    let lastMsgType = lastMsg.msgType;
    if (lastMsgType === 'outgoing') {
      let newThought = {
        thought: currentThought
      };
      lastMsg.thoughts.push(newThought);
      this.setState({ custConvers: convers });
    } else {
      let newThought = {
        msgSource: 'custConvers',
        msgType: 'outgoing',
        thoughts: [
          {
            thought: currentThought
          }
        ]
      };
      convers.push(newThought);
      this.setState({ custConvers: convers });
    }
  } else {
    let convers = [...this.state.botConvers];
    let lastMsg = convers[convers.length - 1];
    let lastMsgType = lastMsg.msgType;
    if (lastMsgType === 'outgoing') {
      let newThought = {
        thought: currentThought
      };
      lastMsg.thoughts.push(newThought);
      this.setState({ botConvers: convers });
    }
  }
};

export default chatInput;

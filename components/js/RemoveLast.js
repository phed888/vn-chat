export function removeLast(whichArray) {
  if (whichArray === 'botConvers') {
    let currConvers = [...this.state.botConvers];
    const last = currConvers.length - 1;
    currConvers[last].thoughts.pop();
  } else {
    let currConvers = [...this.state.custConvers];
    const last = currConvers.length - 1;
    currConvers[last].thoughts.pop();
  }
}

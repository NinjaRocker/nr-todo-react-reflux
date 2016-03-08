import React from 'react';

import actions from './actions';

//const Controls = () => (
//  <div>Controls</div>
//);

class Controls extends React.Component {
  add() {
    console.log('[Controls]', 'add');
    actions.add(Math.random().toString().substr(2,5));
  }
  clear() {
    console.log('[Controls]', 'clear');
    actions.clear();
  }
  fetch() {
    console.log('[Controls]', 'fetch');
    actions.fetch();
  }
  render() {
    return (
      <div>
        <button onClick={this.add}>Add</button>
        <button onClick={this.clear}>Clear</button>
        <button onClick={this.fetch}>Fetch</button>
      </div>
    );
  }
}

export default Controls;

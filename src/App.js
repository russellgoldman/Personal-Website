import React, { Component } from 'react';
import { Titlebar } from './components/titlebar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titlebarState: {
        anchors: ['about', 'projects', 'contact'],
        name: 'Russell Goldman'
      },
    }
  }

  render() {
    return (
      <div>
        <Titlebar anchors={this.state.titlebarState.anchors} name={this.state.titlebarState.name} />
      </div>
    );
  }
}

export default App;

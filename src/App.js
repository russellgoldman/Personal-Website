import React, { Component } from 'react';
import { Titlebar } from './components/titlebar';
import { Intro } from './containers/intro';
import ScrollableAnchor from 'react-scrollable-anchor';
import Media from "react-media";

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

  isMobile() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>You are on a mobile phone</h1>
      </div>
    );
  }

  isDesktop() {
    return (
      <div>
        <Titlebar anchors={this.state.titlebarState.anchors} name={this.state.titlebarState.name} />
        <ScrollableAnchor id={`home`}>
          <Intro />
        </ScrollableAnchor>
        <ScrollableAnchor id={`${this.state.titlebarState.anchors[0]}`}>
          <Intro />
        </ScrollableAnchor>
        <ScrollableAnchor id={`${this.state.titlebarState.anchors[1]}`}>
          <Intro />
        </ScrollableAnchor>
        <ScrollableAnchor id={`${this.state.titlebarState.anchors[2]}`}>
          <Intro />
        </ScrollableAnchor>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Media query="(max-width: 1000px)">
          {matches =>
            matches ? (
              this.isMobile()
            ) : (
              this.isDesktop()
            )
          }
        </Media>
      </div>
    );
  }
}

export default App;

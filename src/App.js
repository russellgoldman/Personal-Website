import React, { Component } from 'react';
import { DesktopTitlebar } from './device/desktop/components/titlebar';
import { DesktopIntro } from './device/desktop/containers/intro';
import { DesktopAbout } from './device/desktop/containers/about';

import { MobileTitlebar } from './device/mobile/components/titlebar';
import { MobileIntro } from './device/mobile/containers/intro';

import ScrollableAnchor from 'react-scrollable-anchor';
import Media from "react-media";
import { configureAnchors } from 'react-scrollable-anchor'

// Offset all anchors by -60 to account for a fixed header
// and scroll more quickly than the default 400ms
configureAnchors({offset: -100, scrollDuration: 400})

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
        <MobileTitlebar name={this.state.titlebarState.name} />
        <MobileIntro />
        <MobileIntro />
        <MobileIntro />
        <MobileIntro />
      </div>
    );
  }

  isDesktop() {
    return (
      <div>
        <DesktopTitlebar anchors={this.state.titlebarState.anchors} name={this.state.titlebarState.name} />
        <ScrollableAnchor id={`home`}>
          <DesktopIntro />
        </ScrollableAnchor>
        <ScrollableAnchor id={`${this.state.titlebarState.anchors[0]}`}>
          <DesktopAbout />
        </ScrollableAnchor>
        <ScrollableAnchor id={`${this.state.titlebarState.anchors[1]}`}>
          <DesktopIntro />
        </ScrollableAnchor>
        <ScrollableAnchor id={`${this.state.titlebarState.anchors[2]}`}>
          <DesktopIntro />
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

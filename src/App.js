import React, { Component } from 'react';
import { DesktopTitlebar } from './device/desktop/components/titlebar';
import { DesktopIntro } from './device/desktop/containers/intro';
import { DesktopAbout } from './device/desktop/containers/about';
import { DesktopProjects } from './device/desktop/containers/projects';
import { DesktopContact } from './device/desktop/containers/contact';

import { MobileTitlebar } from './device/mobile/components/titlebar';
import { MobileIntro } from './device/mobile/containers/intro';
import { MobileAbout } from './device/mobile/containers/about';
import { MobileProjects } from './device/mobile/containers/projects';
import { MobileContact } from './device/mobile/containers/contact';

import ScrollableAnchor from 'react-scrollable-anchor';
import Media from 'react-media';
import { configureAnchors } from 'react-scrollable-anchor';
import Fade from 'react-reveal/Fade';

import LoadingScreen from 'react-loading-screen';
import CacheBuster from './CacheBuster';

import { websiteLogo } from './images';

configureAnchors({ offset: -70, scrollDuration: 500 });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titlebarState: {
        anchors: ['about', 'projects'],
        name: 'Russell Goldman'
      },
      loading: true,
    }
  }

  componentDidMount() {
    // the setTimeout just simulates an async action, after which the component will render the content
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1250);
  }

  isMobile() {
    return (
      <div style={{
        // disables horizontal overflow on mobile
        overflowX: 'hidden',
        position: 'relative'
      }}>
        <MobileTitlebar name={this.state.titlebarState.name} />
        <MobileIntro />
        <MobileAbout />
        <div style={styles.MobileHeaderContainer}>
          <Fade clear><div style={styles.MobileHeader}>Projects</div></Fade>
        </div>
        <MobileProjects />
        <MobileContact />
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
          <DesktopProjects />
        </ScrollableAnchor>
        <DesktopContact />
      </div>
    );
  }

  render() {
    return (
      // https://github.com/flexdinesh/cache-busting-example/blob/master/src/App.js
      <CacheBuster>
        {({ loading, isLatestVersion, refreshCacheAndReload }) => {
          if (loading) return null;
          if (!loading && !isLatestVersion) {
            // You can decide how and when you want to force reload
            refreshCacheAndReload();
          }

          console.log(global.appVersion);

          // return (
          //   <div>
          //     <LoadingScreen
          //       loading={this.state.loading}
          //       bgColor='#fff'
          //       spinnerColor='#000'
          //       logoSrc={websiteLogo}
          //     >
          //       <Media query="(max-width: 1000px)">
          //         {matches =>
          //           matches ? (
          //             this.isMobile()
          //           ) : (
          //             this.isDesktop()
          //           )
          //         }
          //       </Media>
          //     </LoadingScreen>
          //   </div>
          // );
          return (
            <div>
              <p>hi</p>
            </div>
          );
        }}
      </CacheBuster>
    );
  }
}

export default App;

const shadow = '#c5c5c5';
const styles = {
  DesktopHeaderContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '45.5vw',
    marginRight: '45.5vw',
    height: '70px',
    color: 'black',
    borderBottom: '3px solid black'
  },
  MobileHeaderContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '100px',
    marginLeft: '40vw',
    marginRight: '40vw',
    height: '70px',
    color: 'black',
    borderBottom: '3px solid black',
  },
  DesktopHeader: {
    fontFamily: 'Roboto',
    fontSize: '40px',
    fontWeight: 'bold',
  },
  MobileHeader: {
    fontFamily: 'Roboto',
    fontSize: '35px',
    fontWeight: 'bold',
  },
  interestedButton: {
    marginTop: '10px',
    flex: 1,
    width: '90vw',
    marginLeft: '5vw',
    marginRight: '5vw',
    fontSize: '40px',
    fontFamily: 'Roboto',
    borderRadius: '10px',
    letterSpacing: '5px',
    backgroundColor: `#4F4F4F`,
    color: 'white',
    height: '80px',
    outline: 'none',
    border: '0px',
    marginBottom: '1em',
  },
}

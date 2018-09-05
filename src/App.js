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

configureAnchors({ offset: -150, scrollDuration: 500 });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titlebarState: {
        anchors: ['about', 'projects', 'contact'],
        name: 'Russell Goldman'
      },
      contactFormShow: false,
    }
  }



  renderContactForm() {
    const toggleContactForm = () => {
      this.toggleForm();
    };

    if (this.state.contactFormShow) {
      return (
        <div>
          <MobileContact callbackFromParent={toggleContactForm}/>
        </div>
      );
    } else {
      return (
        <div>
          <MobileTitlebar name={this.state.titlebarState.name} callbackFromParent={toggleContactForm} />
          <MobileIntro />
          <div style={styles.MobileHeaderContainer}>
            <Fade clear><div style={styles.MobileHeader}>About</div></Fade>
          </div>
          <MobileAbout />
          <div style={styles.MobileHeaderContainer}>
            <Fade clear><div style={styles.MobileHeader}>Projects</div></Fade>
          </div>
          <MobileProjects />
          <div style={{ marginBottom: '50px' }}/>
        </div>
      );
    }
  }

  toggleForm() {
    this.setState((prevState) => ({
      contactFormShow: !prevState.contactFormShow,
    }));
  }

  isMobile() {
    return (
      <div>
        {this.renderContactForm()}
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
        <div style={styles.DesktopHeaderContainer}>
          <Fade clear><div style={styles.DesktopHeader}>About</div></Fade>
        </div>
        <ScrollableAnchor id={`${this.state.titlebarState.anchors[0]}`}>
          <DesktopAbout />
        </ScrollableAnchor>
        <div style={styles.DesktopHeaderContainer}>
          <Fade clear><div style={styles.DesktopHeader}>Projects</div></Fade>
        </div>
        <ScrollableAnchor id={`${this.state.titlebarState.anchors[1]}`}>
          <DesktopProjects />
        </ScrollableAnchor>
        <ScrollableAnchor id={`${this.state.titlebarState.anchors[2]}`}>
          <DesktopContact />
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

const shadow = '#c5c5c5';
const styles = {
  DesktopHeaderContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '100px',
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
    borderBottom: '3px solid black'
  },
  DesktopHeader: {
    fontFamily: 'Roboto-Bold',
    fontSize: '40px'
  },
  MobileHeader: {
    fontFamily: 'Roboto-Bold',
    fontSize: '35px'
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

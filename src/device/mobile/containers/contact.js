import React, { Component } from 'react';
import { styles } from './contact-styles';
import { privateData } from '../../../data/privateData';
import Fade from 'react-reveal/Fade';
import { closeX } from '../../../images/';

export class MobileContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: privateData.email || 'sendemailto@gmail.com',
      formValues: {
        name: '',
        email: '',
        message: '',
      },
    };
  }

  hideForm() {
    this.props.callbackFromParent();
  }

  render() {
    return (
      <div>
        <div style={styles.closeContainer}>
          <Fade clear>
            <a href="#home" style={{ textDecoration: 'none' }}>
              <img src={closeX} alt="close" style={styles.closeX} onClick={() => this.hideForm()}/>
            </a>
          </Fade>
        </div>
        <div style={styles.outerContainer}>
          <div style={styles.formContainer}>
            <Fade clear><p style={styles.interestedText}>Interested?</p></Fade>
            <Fade clear>
              <form action={`https://formspree.io/${this.state.email}`} method="POST">
                <p style={styles.labelStyle}>Name:</p>
                <textarea style={styles.nameBox} type="text" name="Name" />
                <p style={styles.labelStyle}>Email:</p>
                <textarea style={styles.emailBox} type="email" name="Email" />
                <p style={styles.labelStyle}>Message:</p>
                <textarea style={styles.messageStyle} name="Message"></textarea>
                <div>
                  <button style={styles.submitButton} type="submit">SEND</button>
                </div>
              </form>
            </Fade>
          </div>
        </div>
        <div style={{ backgroundColor: '#4F4F4F', paddingBottom: '1.5em', paddingTop: '0.1em', }}>
          <Fade clear>
            <p style={{ textAlign: 'center', fontSize: '16px', fontFamily: 'Roboto-Bold', color: 'white',
            marginLeft: '5vw', marginRight: '5vw' }}>
              Developed by Russell Goldman &copy;, {(new Date()).getFullYear()}
            </p>
          </Fade>
          <Fade clear>
            <p style={{ textAlign: 'center', color: '#d1d1d1', marginLeft: '5vw', marginRight: '5vw' }}>
              This site was made with ReactJS, Flexbox, and GitHub pages.
              Special thanks to
              <span>
                <a href="https://www.gracemmaa.com/" target="_blank" rel='noopener noreferrer'
                style={{ textDecoration: 'none', color: '#d1d1d1' }}>
                  <b> Grace Ma </b>
                </a>
              </span> for her assistance in helping design UI mockups for this site.
              </p>
          </Fade>
        </div>
      </div>
    );
  }
}

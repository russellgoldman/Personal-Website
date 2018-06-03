import React, { Component } from 'react';
import { styles } from './contact-styles';
import { privateData } from '../../../data/privateData';
import { websiteLogoWhite } from './../../../images/';
import Fade from 'react-reveal/Fade';

export class DesktopContact extends Component {
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

  render() {
    console.log(this.state.email);
    return (
      <div>
        <div style={styles.outerContainer}>
          <div style={styles.rowSpace} />
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
          <Fade clear>
            <div style={styles.logoContainer}>
              <img src={websiteLogoWhite} alt="RG" />
            </div>
          </Fade>
        </div>
          <div style={{ backgroundColor: '#4F4F4F', paddingBottom: '1.5em' }}>
            <Fade clear>
              <p style={{ textAlign: 'center', fontSize: '30px', fontFamily: 'Roboto-Bold', color: 'white' }}>
                Developed by Russell Goldman &copy;, {(new Date()).getFullYear()}
              </p>
            </Fade>
            <Fade clear>
              <p style={{ textAlign: 'center', color: '#d1d1d1' }}>This site was made with ReactJS, Flexbox, and GitHub pages.</p>
            </Fade>
            <div>
              <Fade clear>
                <p style={{ textAlign: 'center', color: '#d1d1d1' }}>
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
      </div>
    );
  }
}

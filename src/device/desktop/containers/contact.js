import React, { Component } from 'react';
import { styles } from './contact-styles';
import { privateData } from '../../../data/privateData';

export class DesktopContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: privateData.email || 'sendemailto@gmail.com',
      formValues: {
        name: '',
        email: '',
        message: ''
      }
    }
  }

  render() {
    console.log(this.state.email);
    return (
      <div style={styles.outerContainer}>
        <form action=`https://formspree.io/${this.state.email}` method="POST">
          <input type="text" name="name">
          <input type="email" name="_replyto">
          <input type="submit" value="Send">
        </form>
      </div>
    );
  }
}

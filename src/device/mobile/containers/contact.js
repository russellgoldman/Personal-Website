import React, { Component } from 'react';
import { websiteLogoWhite } from './../../../images/';
import Fade from 'react-reveal/Fade';

export const MobileContact = () => {
  return (
    <div style={{
      marginTop: '5em',
    }}>
      <div style={{ 
        paddingTop: '1.5em',
        backgroundColor: '#4F4F4F', 
        paddingBottom: '1em'
      }}>
        <Fade clear>
          <div style={{
            marginLeft: '5vw',
            marginRight: '5vw'
          }}>
            <p style={{
              textAlign: 'center',
              fontSize: '14px',
              fontFamily: 'Roboto', 
              fontWeight: 'normal',
              color: 'white',
              marginBottom: '0.3em',
            }}>
              Developed as a side-project
            </p>
            <p style={{ textAlign: 'center', fontSize: '13px', fontFamily: 'Roboto', fontWeight: 'normal', color: 'white' }}>
              Feel free to contact me @ <a style={{
                fontFamily: 'Roboto',
                fontWeight: 'normal',
                color: 'white',
                textDecoration: 'none',
              }} href="mailto:russellgoldman1@gmail.com"><i>russellgoldman1@gmail.com</i></a>
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}

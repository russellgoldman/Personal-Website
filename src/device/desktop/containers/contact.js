import React from 'react';
import Fade from 'react-reveal/Fade';

export const DesktopContact = () => {
  return (
    <div style={{
      marginTop: '10em',
    }}>
      <div style={{ 
        paddingTop: '1.5em',
        backgroundColor: '#4F4F4F', 
        paddingBottom: '1em'
      }}>
        <Fade clear>
          <p style={{
            textAlign: 'center',
            fontSize: '15px',
            fontFamily: 'Roboto', 
            fontWeight: 'normal',
            color: 'white',
            marginBottom: '0.3em',
          }}>
            Developed as a side-project
          </p>
          <p style={{ 
            textAlign: 'center',
            fontSize: '13px',
            fontFamily: 'Roboto',
            fontWeight: 'normal',
            color: 'white'
          }}>
            Feel free to contact me @ <a style={{
              fontFamily: 'Roboto',
              fontWeight: 'normal',
              color: 'white',
              textDecoration: 'none',
            }} href="mailto:russellgoldman1@gmail.com"><i>russellgoldman1@gmail.com</i></a>
          </p>
        </Fade>
      </div>
    </div>
  );
}

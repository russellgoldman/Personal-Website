const backgroundColor = '#4F4F4F';

export const styles = {
  outerContainer: {
    marginTop: '20vh',
    display: 'flex',
    backgroundColor: `${backgroundColor}`,
    zIndex: '0',
  },
  formContainer: {
    paddingTop: '1em',
    marginTop: '2em',
    marginLeft: '12.5vw',
    display: 'flex',
    flexDirection: 'column',
    flex: 6,
    backgroundColor: `${backgroundColor}`,
    color: 'white',
  },
  interestedText: {
    flex: 1,
    fontFamily: 'Roboto',
    fontSize: '50px',
    marginBottom: '0.75em',
    backgroundColor: `${backgroundColor}`,
  },
  labelStyle: {
    flex: 1,
    fontFamily: 'Roboto-Light',
    fontSize: '25px',
    marginBottom: '0.5em',
  },
  nameBox: {
    flex: 1,
    width: '60vw',
    borderRadius: '5px',
    height: '2.5em',
    border: '1px solid white',
    marginBottom: '1.5em',
    backgroundColor: `${backgroundColor}`,
    outline: 'none',
    paddingLeft: '10px',
    paddingTop: '5px',
    resize: 'none',
  },
  emailBox: {
    flex: 1,
    width: '60vw',
    borderRadius: '5px',
    height: '2.5em',
    border: '1px solid white',
    marginBottom: '1.5em',
    backgroundColor: `${backgroundColor}`,
    outline: 'none',
    paddingLeft: '10px',
    paddingTop: '5px',
    resize: 'none',
  },
  messageStyle: {
    flex: 1,
    width: '75vw',
    borderRadius: '5px',
    height: '7em',
    border: '1px solid white',
    marginBottom: '2em',
    backgroundColor: `${backgroundColor}`,
    outline: 'none',
    paddingLeft: '10px',
    paddingTop: '5px',
    resize: 'none',
  },
  submitButton: {
    flex: 1,
    width: '50vw',
    fontSize: '25px',
    fontFamily: 'Roboto',
    letterSpacing: '5px',
    backgroundColor: '#00ABCD',
    color: 'white',
    borderRadius: '10px',
    height: '60px',
    maxWidth: '50%',
    outline: 'none',
    border: '0px',
    marginBottom: '3em',
  },
};

const containerMarginX = 10;

export const styles = {
  outerContainer: {
    marginTop: '0.5em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100vw'
  },
  image: {
    marginTop: '2em',
    height: '30vw',
    width: '30vw',
  },
  title: {
    flex: '2',
    fontFamily: 'Roboto',
    fontSize: '32px',
    maxHeight: '5%',
    marginTop: '0.5em',
    marginBottom: '0.5em',
    textAlign: 'center',
    marginLeft: '0vw',
    marginRight: '3.5vw'
  },
  description: {
    flex: 1,
    fontFamily: 'Roboto',
    fontWeight: '100',
    fontStyle: 'normal',
    fontSize: '14px',
    lineHeight: 1.75,
    marginTop: '0.20em',
    marginBottom: '1.75em',
    textAlign: 'justify',
    marginLeft: '10vw',
    marginRight: '10vw'
  },
  github: {
    marginBottom: '0.20em',
    width: '30px',
    height: '30px'
  }
};

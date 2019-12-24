const containerMarginX = 10;

export const styles = {
  outerContainer: {
    marginTop: '1.25em',
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
    marginTop: '1em',
    marginBottom: '1em',
    textAlign: 'center',
    marginLeft: '5vw',
    marginRight: '5vw'
  },
  description: {
    marginTop: '0em',
    flex: 1,
    fontFamily: 'Roboto',
    fontWeight: '100',
    fontStyle: 'normal',
    fontSize: '16px',
    lineHeight: 2.5,
    marginBottom: '2.5em',
    textAlign: 'center',
    marginLeft: '10vw',
    marginRight: '10vw'
  },
  toolsContainer: {
    flex: 4
  },
  githubContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  github: {
    marginTop: '-1em',
    marginBottom: '2em',
    width: '30px',
    height: '30px'
  }
};

const containerMarginX = 10;

export const styles = {
  outerContainer: {
    marginTop: '1.25em',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: `${containerMarginX}vw`,
    marginRight: `${containerMarginX}vw`,
    height: '85%',
  },
  imageContainer: {
    display: 'flex',
    flexBasis: '30%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: '1.25vw',
    marginRight: '1vw',
    zIndex: '-1',
  },
  image: {
    marginTop: '2em',
    height: '50%',
    width: '90%',
    maxHeight: '70%',
  },
  informationContainer: {
    display: 'flex',
    flexBasis: '60%',
    flexDirection: 'column',
    marginRight: '3vw'
  },
  title: {
    flex: '2',
    fontFamily: 'Roboto',
    fontSize: '32px',
    maxHeight: '5%',
    marginTop: '0.675em',
    marginBottom: '1em'
  },
  description: {
    marginTop: '-0.5em',
    flex: 1,
    fontFamily: 'Roboto-Light',
    fontSize: '20px',
    lineHeight: 2,
    marginBottom: '2em'
  },
  toolsContainer: {
    marginTop: '-1em',
    flex: 4
  },
  github: {
    width: '35px',
    height: '35px'
  }
};

const containerMarginX = 10;

export const styles = {
  outerContainer: {
    marginTop: '0.5em',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: `${containerMarginX}vw`,
    marginRight: `${containerMarginX}vw`,
    backgroundColor: 'white',
    height: '85%'
  },
  imageContainer: {
    display: 'flex',
    flexBasis: '30%',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingRight: '4vw'
  },
  image: {
    marginTop: '2em',
    height: '90%',
    width: '100%',
    maxHeight: '70%'
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
    maxHeight: '5%'
  },
  description: {
    marginTop: '-0.5em',
    flex: 3,
    fontFamily: 'Roboto-Light',
    fontSize: '20px',
    lineHeight: 2
  },
  toolsContainer: {
    marginTop: '-1em',
    flex: 4
  },
  github: {
    width: '30px',
    height: '30px'
  }
};

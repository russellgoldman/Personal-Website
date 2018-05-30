const containerMarginX = 10;

export const styles = {
  outerContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: `${containerMarginX}vw`,
    marginRight: `${containerMarginX}vw`,
    backgroundColor: 'white',
    height: '76%'
  },
  imageContainer: {
    display: 'flex',
    flexBasis: '40%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  image: {
    height: '90%',
    width: '100%',
    maxHeight: '90%'
  },
  informationContainer: {
    display: 'flex',
    flexBasis: '60%',
    flexDirection: 'column',
    marginLeft: '2vw',
    marginRight: '2vw'
  },
  title: {
    flex: '2',
    fontFamily: 'Roboto',
    fontSize: '30px'
  },
  description: {
    flex: 7
  },
  toolsContainer: {
    flex: 3
  }
};

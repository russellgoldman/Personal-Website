const titleAccent = '#00ABCD';
const subtitle = '#8c8989';

export const styles = {
  orientationContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    height: '85vh',
  },
  introContainer: {
    marginLeft: '8vw',
    display: 'flex',
    flex: 6,
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: '100%',
    justifyContent: 'center'
  },
  logoContainer: {
    flex: 6
  },
  title: {
    flex: 1,
    fontFamily: 'Roboto',
    fontSize: '65px',
    justifyContent: 'center',
    marginTop: '1px',
    marginBottom: '1px'
  },
  titleAccent: {
    fontFamily: 'Roboto-Bold',
    color: `${titleAccent}`
  },
  subtitleContainer: {
    flex: 6,
    flexWrap: 'wrap',
    fontFamily: 'Roboto',
    color: `${subtitle}`,
    fontSize: '25px',
    lineHeight: '1.5',
    justifyContent: 'center',
  },
  iconsContainer: {
    flex: 3.5,
    justifyContent: 'center',
    marginTop: '5px'
  },
  icon: {
    width: '55px',
    height: '55px',
    marginRight: '40px'
  }
};

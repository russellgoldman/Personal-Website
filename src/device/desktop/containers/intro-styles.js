const titleAccent = '#00ABCD';
const subtitle = '#8c8989';

export const styles = {
  orientationContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    height: '100vh',
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
    flex: 9
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
    flex: 8,
    flexWrap: 'wrap',
    fontFamily: 'Roboto',
    color: `${subtitle}`,
    fontSize: '25px',
    lineHeight: '1.5',
    justifyContent: 'center',
    marginBottom: '30px'
  },
  iconsContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: '5px',
    marginBottom: '5px'
  },
  icon: {
    width: '55px',
    height: '55px',
    marginRight: '40px'
  }
};
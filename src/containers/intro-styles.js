const titleAccent = '#00ABCD';
const subtitle = '#8c8989';

export const styles = {
  orientationContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    height: '90vh',
  },
  introContainer: {
    marginLeft: '6vw',
    display: 'flex',
    flex: 6,
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: '100%'
  },
  logoContainer: {
    flex: 4
  },
  title: {
    flex: 1,
    fontFamily: 'Roboto',
    fontSize: '65px',
    marginBottom: '5px'
  },
  titleAccent: {
    fontFamily: 'Roboto-Bold',
    color: `${titleAccent}`
  },
  subtitleContainer: {
    flex: 1,
    flexWrap: 'wrap',
    fontFamily: 'Roboto',
    color: `${subtitle}`,
    fontSize: '30px',
    lineHeight: '1.5'
  },
  iconsContainer: {
    display: 'flex',
    flex: 1
  },
  icon: {
    width: '55px',
    height: '55px',
    marginRight: '40px'
  }
};

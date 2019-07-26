const titleAccent = '#00ABCD';
const subtitle = '#8c8989';

export const styles = {
  orientationContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: '8vw'
  },
  introContainer: {
    marginLeft: '8vw',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: '100%',
    justifyContent: 'center'
  },
  title: {
    marginBottom: '70px',
    flex: 1,
    fontFamily: 'Roboto',
    fontSize: '65px',
    justifyContent: 'center',
    marginTop: '1px',
    marginBottom: '1px'
  },
  titleAccent: {
    fontFamily: 'Roboto',
    color: `${titleAccent}`,
    fontWeight: 'bold',
  },
  subtitleContainer: {
    flexWrap: 'wrap',
    fontFamily: 'Roboto',
    color: `${subtitle}`,
    fontSize: '25px',
    lineHeight: '1.5',
    justifyContent: 'center',
  },
  iconsContainer: {
    justifyContent: 'center',
    marginTop: '5px',
  },
  icon: {
    width: '55px',
    height: '55px',
    marginRight: '40px',
  },
};

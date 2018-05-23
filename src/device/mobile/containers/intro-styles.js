const titleAccent = '#00ABCD';
const subtitle = '#8c8989';

export const styles = {
  introContainer: {
    marginTop: '1vh',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: '10vw',
    marginRight: '10vw'
  },
  title: {
    flex: 5,
    fontFamily: 'Roboto',
    fontSize: '45px',
    textAlign: 'center',
    marginBottom: '25px',
    lineHeight: '1.3'
  },
  titleAccent: {
    fontFamily: 'Roboto-Bold',
    color: `${titleAccent}`
  },
  subtitleContainer: {
    flex: 7,
    flexWrap: 'wrap',
    fontFamily: 'Roboto',
    color: `${subtitle}`,
    fontSize: '20px',
    lineHeight: '1.7',
    textAlign: 'center',
    marginBottom: '35px'
  },
  iconsContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: '5px',
    marginBottom: '5vh'
  },
  icon: {
    width: '55px',
    height: '55px',
    marginLeft: '20px',
    marginRight: '20px'
  }
};

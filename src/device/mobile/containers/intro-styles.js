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
    flex: 10,
    fontFamily: 'Roboto',
    fontSize: '60px',
    textAlign: 'center',
    marginBottom: '30px'
  },
  titleAccent: {
    fontFamily: 'Roboto-Bold',
    color: `${titleAccent}`
  },
  subtitleContainer: {
    flex: 10,
    flexWrap: 'wrap',
    fontFamily: 'Roboto',
    color: `${subtitle}`,
    fontSize: '25px',
    lineHeight: '1.5',
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

const titleAccent = '#00ABCD';
const subtitle = '#8c8989';

export const styles = {
  introContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: '10vw',
    marginRight: '10vw',
    marginTop: '15vw'
  },
  title: {
    flex: 3,
    fontFamily: 'Roboto-Bold',
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
    flex: 5,
    flexWrap: 'wrap',
    fontFamily: 'Roboto',
    color: `${subtitle}`,
    fontSize: '20px',
    lineHeight: '1.7',
    textAlign: 'center',
    marginBottom: '30px'
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

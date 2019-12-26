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
    marginTop: '5em'
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '45px',
    textAlign: 'center',
    marginBottom: '0.75em',
    lineHeight: '1.3'
  },
  titleAccent: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: `${titleAccent}`,
  },
  subtitleContainer: {
    flexWrap: 'wrap',
    fontFamily: 'Roboto',
    color: `${subtitle}`,
    fontSize: '20px',
    lineHeight: 1.75,
    textAlign: 'justify',
    marginBottom: '2em',
  },
  iconsContainer: {
    justifyContent: 'center',
    paddingTop: '5px',
  },
  icon: {
    width: '50px',
    height: '50px',
    marginLeft: '15px',
    marginRight: '15px'
  }
};

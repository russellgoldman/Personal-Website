const containerMarginX = 10;
const titleMarginX = containerMarginX + 0.65;
const selectedAccent = '#00ABCD';

export const styles = {
  title: {
    flex: 1,
    marginLeft: '10px',
    fontFamily: 'Roboto',
    fontSize: '30px'
  },
  titleContainer: {
    marginTop: '2em',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    height: '55px',
    borderRadius: '10px',
    marginLeft: `${titleMarginX}vw`,
    marginRight: `${titleMarginX}vw`
  },
  carouselContainer: {
    marginTop: '3em',
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    height: '100%',
    marginLeft: `${containerMarginX}vw`,
    marginRight: `${containerMarginX}vw`
  },
  leftArrowContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftArrow: {
    width: '40px',
    height: '40px',
    marginLeft: '-4.5em',
    opacity: '0.85',
    borderRadius: '50%'
  },
  rightArrowContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  rightArrow: {
    width: '40px',
    height: '40px',
    marginRight: '-4.5em',
    opacity: '0.85',
    borderRadius: '50%'
  },
  bannersContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  banner: {
    backgroundColor: '#F4F4F4',
    height: '3.5vw',
    width: '19.35vw',
    marginTop: '0.2em',
    border: `4px solid #C4C4C4`,
    borderRadius: '10px',
    marginLeft: '0.1em',
    marginRight: '0.1em',
  },
  bannerSelected: {
    backgroundColor: '#F4F4F4',
    height: '3.5vw',
    width: '19.35vw',
    marginTop: '0.2em',
    border: `4px solid ${selectedAccent}`,
    borderRadius: '10px',
    marginLeft: '0.1em',
    marginRight: '0.1em',
  },
  bannerText: {
    marginTop: '0.3em',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '1.5vw',
    color: '#333333',
    textAlign: 'center',
    letterSpacing: '2px',
  }
};

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
    marginTop: '2.5em',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    height: '55px',
    borderRadius: '10px',
    marginLeft: `${titleMarginX}vw`,
    marginRight: `${titleMarginX}vw`
  },
  carouselContainer: {
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
  bannerContainer: {
    position: 'relative',
  },
  banner: {
    height: '3.5vw',
    width: '19.35vw',
    marginTop: '0.2em',
    border: `6px solid black`,
  },
  bannerSelected: {
    height: '3.5vw',
    width: '19.35vw',
    marginTop: '0.2em',
    border: `6px solid ${selectedAccent}`
  },
  bannerTextContainer: {
    position: 'absolute',
    top: '1vw',
    height: '50%',
    width: '100%',
  },
  bannerText: {
    fontFamily: 'Roboto-Bold',
    fontSize: '1.5vw',
    color: 'white',
    textAlign: 'center',
    letterSpacing: '3px',
    textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
  }
};

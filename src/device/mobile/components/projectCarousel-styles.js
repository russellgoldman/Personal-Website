const containerMarginX = 15;
const titleMarginX = containerMarginX - 0.75;
const selectedAccent = '#00ABCD';

export const styles = {
  title: {
    flex: 1,
    marginLeft: '10px',
    fontFamily: 'Roboto',
    fontSize: '30px'
  },
  carouselContainer: {
    marginTop: '4em',
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
    width: '25px',
    height: '25px',
    marginTop: '0.25em',
    marginLeft: '-2.75em',
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
    marginTop: '0.25em',
    width: '25px',
    height: '25px',
    marginRight: '-2.75em',
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
    height: '10vw',
    width: '35vw',
    marginTop: '0.2em',
    border: `4px solid #C4C4C4`,
    borderRadius: '10px',
    marginLeft: '0.2em',
    marginRight: '0.2em',
    boxShadow: `1px 1px 0px #C4C4C4`,
  },
  bannerSelected: {
    backgroundColor: '#F4F4F4',
    height: '10vw',
    width: '35vw',
    marginTop: '0.2em',
    border: `4px solid ${selectedAccent}`,
    borderRadius: '10px',
    marginLeft: '0.2em',
    marginRight: '0.2em',
    boxShadow: `1px 3px 0px ${selectedAccent}`,
  },
  bannerText: {
    marginTop: '0.15em',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '4.5vw',
    color: '#333333',
    textAlign: 'center',
    letterSpacing: '0px',
  }
};

const containerMarginX = 27;
const titleMarginX = containerMarginX + 0.5;
const shadow = '#c5c5c5';
const shadow2 = '#838383';

export const styles = {
  title: {
    flex: 1,
    marginLeft: '10px',
    fontFamily: 'Roboto',
    fontSize: '30px'
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    height: '80px',
    borderRadius: '10px',
    marginLeft: `${titleMarginX}vw`,
    marginRight: `${titleMarginX}vw`
  },
  carouselContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    height: '120px',
    background: '#f2f2f2',
    borderRadius: '10px',
    marginLeft: `${containerMarginX}vw`,
    marginRight: `${containerMarginX}vw`,
    opacity: '0.85',
    boxShadow: `3px 4px 3px ${shadow}`,
  },
  leftArrowContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftArrow: {
    width: '60px',
    height: '60px',
    marginLeft: '-4.7vw',
    opacity: '0.4',
    backgroundColor: '#dbdbdb',
    borderRadius: '50%',
    boxShadow: `3px 4px 2px ${shadow2}`,
  },
  rightArrowContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  rightArrow: {
    width: '60px',
    height: '60px',
    marginRight: '-4.7vw',
    opacity: '0.4',
    backgroundColor: '#dbdbdb',
    borderRadius: '50%',
    boxShadow: `3px 4px 2px ${shadow2}`,
  },
  iconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginLeft: '2%',
    marginRight: '2%'
  },
  iconContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  icon: {
    width: '80%',
    height: '85%',
    marginLeft: '2%',
    marginRight: '2%',
    marginTop: '1.5%'
  }
};

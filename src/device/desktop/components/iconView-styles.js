const containerMarginX = 40;
const titleMarginXLeft = containerMarginX;
const titleMarginXRight = containerMarginX;
const shadow = '#c5c5c5';

export const styles = {
  title: {
    flex: 1,
    fontFamily: 'Roboto',
    fontSize: '30px'
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    height: '80px',
    borderRadius: '10px',
    marginLeft: `${titleMarginXLeft}vw`,
    marginRight: `${titleMarginXRight}vw`,
  },
  viewContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    height: '80px',
    background: '#f2f2f2',
    borderRadius: '10px',
    marginLeft: `${containerMarginX}vw`,
    marginRight: `${containerMarginX}vw`,
    opacity: '0.85',
    boxShadow: `3px 4px 3px ${shadow}`,
  },
  iconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '1.5vw'
  },
  icon: {
    width: '60px',
    height: '60px',
    marginLeft: '1vw',
    marginRight: '1vw'
  }
};

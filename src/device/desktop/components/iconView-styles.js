const containerMarginX = 40;
const titleMarginXLeft = containerMarginX;
const titleMarginXRight = containerMarginX;
const shadow = '#c5c5c5';

export const styles = {
  title: {
    flex: 1,
    fontFamily: 'Roboto',
    fontSize: '25px'
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    height: '70px',
    borderRadius: '10px',
    maxWidth: '30vw',
    zIndex: 1
  },
  viewContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    height: '70px',
    background: '#f2f2f2',
    borderRadius: '10px',
    opacity: '0.85',
    boxShadow: `3px 4px 3px ${shadow}`,
  },
  iconsContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight: '1.5vw'
  },
  icon: {
    width: '55px',
    height: '55px',
    marginLeft: '1vw',
    marginRight: '1vw'
  }
};

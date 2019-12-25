const containerMarginX = 40;
const titleMarginXLeft = containerMarginX;
const titleMarginXRight = containerMarginX;
const shadow = '#c5c5c5';

export const styles = {
  title: {
    flex: 1,
    fontFamily: 'Roboto',
    fontSize: '25px',
    width: '80vw',
    marginLeft: '10vw',
    marginRight: '10vw'
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    height: '45px',
    borderRadius: '10px',
    zIndex: 1
  },
  viewContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    height: '70px',
    width: '80w',
    background: '#f2f2f2',
    borderRadius: '10px',
    opacity: '0.85',
    boxShadow: `3px 4px 3px ${shadow}`,
    marginLeft: '10vw',
    marginRight: '10vw'
  },
  iconsContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight: '5vw'
  },
  icon: {
    width: '35px',
    height: '35px',
    marginLeft: '3vw',
    marginRight: '3vw'
  }
};

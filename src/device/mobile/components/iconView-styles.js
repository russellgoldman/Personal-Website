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
    height: '45px',
    borderRadius: '10px',
    maxWidth: '40vw',
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
    marginBottom: '50px'
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

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
    flexWrap: 'wrap',
    width: '60vw',
    background: '#f2f2f2',
    borderRadius: '10px',
    opacity: '0.85',
    boxShadow: `3px 4px 3px ${shadow}`,
    marginBottom: '60px'
  },
  icon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '35px',
    height: '35px',
    margin: '25px 10px'
  }
};

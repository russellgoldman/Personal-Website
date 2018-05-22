const shadow = '#e5e5e5';

export const styles = {
  titlebarContainer: {
    fontFamily: 'Roboto',
    fontSize: '20px',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    boxShadow: `2px 4px 10px ${shadow}`,
    backgroundColor: 'white',
    maxHeight: '60px',
    position: 'sticky',
    top: '0',
    zIndex: 1,
  },
  nameContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    marginLeft: '40px'
  },
  name: {
  },
  anchorContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: '30px'
  },
  anchor: {
    marginLeft: '30px',
    marginRight: '30px'
  }
};

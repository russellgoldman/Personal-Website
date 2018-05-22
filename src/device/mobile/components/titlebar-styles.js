const shadow = '#e5e5e5';

export const styles = {
  titlebarContainer: {
    fontFamily: 'Roboto',
    fontSize: '30px',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    boxShadow: `2px 3px 10px ${shadow}`,
    backgroundColor: 'white',
    height: '70px',
    position: 'sticky',
    top: '0',
    zIndex: 1,
  },
  nameContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2px'
  },

};

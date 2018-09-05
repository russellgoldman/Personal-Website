const shadow = '#e5e5e5';

export const styles = {
  titlebarContainer: {
    fontFamily: 'Roboto',
    fontSize: '24px',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    boxShadow: `2px 3px 10px ${shadow}`,
    backgroundColor: 'white',
    height: '50px',
    position: 'sticky',
    top: '0',
    zIndex: 1,
    width: '100vw'
  },
  nameContainer: {
    display: 'flex',
    flex: 8,
    alignItems: 'center',
    marginTop: '2px',
    marginLeft: '5vw'
  },
  logoContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    marginBottom: '2px',
    justifyContent: 'flex-end',
    marginRight: '5vw'
  },
  logo: {
    width: '30px',
    height: '30px'
  },
};

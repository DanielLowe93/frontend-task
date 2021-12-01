const styles = {
  main: {
    backgroundColor: '#fff',
    border: '1px solid #e6e6e6',
    borderBottomRightRadius: '3px',
    borderTopRightRadius: '3px',
    maxWidth: '935px',
    maxHeight: '454px',
    margin: '32px auto',
    width: 'calc(100% - 40px)',
    display: 'flex',

    '@media only screen and (max-width: 768px)': {
      maxHeight: 'fit-content',
      flexDirection: 'column',
    },
  },

  image: {
    flex: '1 0 60%',
    padding: '40px 0',
    backgroundColor: '#fafafa',
  },

  text: {
    flex: '1 0 40%',

    '@media only screen and (max-width: 768px)': {
      flex: '1 0 0',
      height: '384px',
    },
  }
}

export default styles;

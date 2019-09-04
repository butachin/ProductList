import { Theme, createStyles } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    title: {
      marginTop: 10,
    },
    avater: {
      height: 250,
      width: 250,
    },
    listRoot: {
      margin: '0 auto',
      width: '60%',
    },
    value: {
      position: 'absolute',
      top: '5%',
      right: '5%',
      color: '#DA0909',
    },
    text: {
      marginLeft: 40,
    },
  });

export default styles;

import { Theme, createStyles } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'row',
    },
    image: {
      width: '50%',
      height: '100%',
    },
    description: {
      textAlign: 'left',
    },
    madeBy: {
      marginTop: 120,
    },
    value: {
      marginTop: 40,
    },
    reviewPoint: {
      marginTop: 40,
    },
  });

export default styles;

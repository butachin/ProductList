import { Theme, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    gridList: {
      width: 1100,
      height: '100%',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    card: {
      maxWidth: 345,
      margin: 5,
    },
    media: {
      height: 300,
    },
    title: {
      marginTop: 10,
    },
    textField: {
      width: 200,
    },
  });

export default styles;

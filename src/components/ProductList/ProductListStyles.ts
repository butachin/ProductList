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
    pageContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      height: 40,
    },
    circleButton: {
      border: 'solid', // 左:丸み 真ん中:線の太さ 右:線の色
      borderRadius: '50%',
    },
    cartButtonContainer: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      top: '5%',
      right: '5%',
    },
    purchasedButtonContainer: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      top: '5%',
      right: '10%',
    },
  });

export default styles;

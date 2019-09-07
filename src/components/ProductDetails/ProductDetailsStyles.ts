import { Theme, createStyles } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'row',
    },
    image: {
      marginLeft: 100,
      marginRight: 100,
      width: '40%',
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
    button: {
      marginTop: 30,
      backgroundColor: '#F7D358', // 最初に表示されるボタンの色
      '&:hover': {
        backgroundColor: '#FFBF00', // カーソルを合わせた時に変わる色
      },
    },
    buttonText: {
      marginLeft: 20,
      marginRight: 20,
    },
    shoppingIcon: {
      padding: 3,
      color: '#ffffff',
      backgroundColor: '#1C1C1C',
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

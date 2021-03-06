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
    container: {
      marginLeft: 40,
    },
    buyButton: {
      marginTop: 30,
      backgroundColor: '#F7D358', // 最初に表示されるボタンの色
      '&:hover': {
        backgroundColor: '#FFBF00', // カーソルを合わせた時に変わる色
      },
      position: 'absolute',
      top: '0%',
      right: '5%',
    },
    buttonText: {
      marginLeft: 20,
      marginRight: 20,
    },
    ids: {
      display: 'none',
    },
    deleteButton: {
      backgroundColor: '#F7D358', // 最初に表示されるボタンの色
      '&:hover': {
        backgroundColor: '#FFBF00', // カーソルを合わせた時に変わる色
      },
    },
  });

export default styles;

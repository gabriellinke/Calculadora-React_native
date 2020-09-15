import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    btnText: {
      fontSize: 30,
      color:'#292a2d',
    },
    blue: {
      color: '#3d88e9',
      fontSize: 22,
    },
    btn: {
      flex: 1,
      alignItems: 'center',
      alignSelf: 'stretch',
      justifyContent: 'center',
    },
    result: {
      flex: 1,    
      backgroundColor: '#fff',
      alignItems: 'flex-end',
      justifyContent:'center',
      elevation: 2,
      paddingRight: 32,
      paddingTop: 64
    },
    resultText: {
      fontSize: 48,
      color: '#292a2d',
    },
    calculation: {
      flex: 1, 
      backgroundColor: '#fff',
      alignItems: 'flex-end',
      justifyContent:'center',
      elevation: 2,
      paddingRight: 32
    },
    calculationText: {
      fontSize: 32,
      color: '#83898e',
    },
    buttons: {
      flexGrow: 5.5,
      flexDirection: 'row',
    },
    numbers: {
      flex: 3,
      backgroundColor: '#f1f3f4',
    },
    row: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    operations: {
      flex: 1.2,
      color: '#3d88e9',
      backgroundColor: '#f1f3f4',
      justifyContent: 'space-around',
      borderLeftColor: '#d5d7da',
      borderLeftWidth: 1,
    },
    more: {
      backgroundColor: '#1a73e8',
      flex: 0.4,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

  export default styles;
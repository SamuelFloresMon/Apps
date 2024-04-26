import { StyleSheet } from "react-native";

const LOGIN_STYLES = StyleSheet.create({
    header_container: {
      marginTop: 0,
      alignItems: "center",
      backgroundColor: '#ccc',
      padding: 10,
      borderRadius: 7
    },
    header: {
      fontSize: 40,
      // marginBottom: 40,
      fontWeight: 'bold'
    },
    login: {
      marginTop: 70,
      marginBottom: 300,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ccc",
      minWidth: '70%',
      width: '95%',
      minHeight: 300,
      maxHeight: 100,
      padding: 6,
      borderRadius: 10,
      borderColor: '#000',
      borderWidth: 1,
    },
    inputLabel: {
      alignSelf: "flex-start",
      color: "black",
      marginLeft: 20,
      fontWeight: 'bold'
    },
    input: {
      borderWidth: 1.2,
      borderColor: 'black',
      borderRadius: 5,
      margin: 5,
      marginBottom: 30,
      padding: 20,
      width: '85%',
      minWidth: '72%',
      height: '20%',
      minHeight: 53,
      backgroundColor: '#E9E7E7'
    },  
    textInput: {
      color: "black"
    },
    button: {
      marginTop: 20,
      width: '75%',
    },
  });

export default LOGIN_STYLES;
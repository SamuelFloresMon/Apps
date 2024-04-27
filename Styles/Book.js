import { StyleSheet } from 'react-native';


const BOOK_STYLES = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      paddingTop: 10,
      paddingBottom: 10,
      marginVertical: 10,
      marginHorizontal: 15,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 5,
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: '90%'
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 9,
      borderBottomColor: "#ccc",
      borderBottomWidth: 1,
    },
    content_title: {
      backgroundColor: '#fff',
      fontWeight: 'bold',
      fontSize: 20,
      alignSelf: "flex-start",
      marginLeft: 20 ,
      marginBottom: 10,
    },
    content_subtitle: {
      backgroundColor: '#fff',
      alignSelf: "flex-start",
      marginLeft: 20 ,
      marginBottom: 5,
    },
    content_text: {
      backgroundColor: '#fff',
      alignSelf: "flex-end",
      marginRight: 25,
      marginBottom: 15,
      fontStyle: 'italic'
    },
    img: {
      width: '97%',
      height: 170,  
      marginTop: 20,
      marginBottom: 10,
      borderRadius: 10
    },
    progressBar: {
      minWidth: '80%',
      marginBottom: 10
    },
    button: {
      width: 300,
      marginBottom: 20
    }
});

export default BOOK_STYLES; 
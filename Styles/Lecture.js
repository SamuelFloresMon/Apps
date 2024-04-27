import { StyleSheet } from "react-native";

const LECTURE_STYLES = StyleSheet.create({
  main_container: { 
    alignItems: "center",
    backgroundColor: "#E9E7E7",
    height: "100%",
    width: "100%",
  },
  scroll_ontainer: {
    marginVertical: 10,
    borderRadius: 10,
    width: "90%",
    // paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  text_container: {
    // width: '90%',
    alignItems: 'center',
    marginHorizontal: '5%'
  },
  title: {
    fontSize: 50,
    marginVertical: 20,
    fontWeight: '800',
    alignSelf: 'center',
    borderBottomColor: "#ccc",
    width: '100%',
    borderBottomWidth: 1
  },    
  text: {
    fontSize: 19,
    marginVertical: 10,
    alignItems: "stretch",
  },
});

export default LECTURE_STYLES;

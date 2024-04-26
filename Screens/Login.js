import React from "react";
import { View, Text, Button } from "react-native";
import GENERAL_STYLES from "../Styles/GeneralStyles";
import InputLogin from "../Components/InputLogin";

import LOGIN_STYLES from "../Styles/Login";


function Login({ navigation }) {
  return (
    <View style={GENERAL_STYLES.main_container}>
      <View style={LOGIN_STYLES.header_container}>
        <Text style={LOGIN_STYLES.header}>Ingresa y aprende</Text>
      </View>

      <View style={LOGIN_STYLES.login}>

        <InputLogin 
          label="Email"
          textInput="usuario@ejemplo.com"
          // func={() => {console.log("Hola")}}
        />

        <InputLogin 
          label="Contraseña"
          textInput="Tu contraseña secreta"
          password={true}
          // func={() => {console.log("Hola")}}
        />

        <View style={LOGIN_STYLES.button}>
          <Button title="Login" onPress={() => navigation.navigate("Home")} />
        </View>
        
      </View>
    </View>
  );
}



export default Login;

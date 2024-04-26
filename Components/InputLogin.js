import React from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import LOGIN_STYLES from "../Styles/Login";

function InputLogin(props) {
  const { label, textInput, func, password = false } = props;

  return (
    <View>
      <Text style={LOGIN_STYLES.inputLabel}>{label}</Text>
      <TextInput
        style={[LOGIN_STYLES.input, LOGIN_STYLES.textInput]}
        placeholder={textInput}
        secureTextEntry={password}
        // onChange={() => func()}
      />
    </View>
  );
}
export default InputLogin;

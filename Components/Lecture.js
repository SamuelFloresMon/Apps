import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";

import LECTURE_STYLES from "../Styles/Lecture";

function Lecture(props) {
  const { children } = props;
  const { title } = props;

  return (
    <SafeAreaView style={LECTURE_STYLES.main_container}>
      <ScrollView style={LECTURE_STYLES.scroll_ontainer}>
        <View style={LECTURE_STYLES.text_container}>
          <Text style={LECTURE_STYLES.title}>{title}</Text>

          {children}
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Lecture;
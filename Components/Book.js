import React from "react";
import { View, Text, Button, Image, ProgressBarAndroid } from "react-native";

import BOOK_STYLES from "../Styles/Book";

function Book(props) {
  const { navigation, 
          title, imagePath, content_title, content_subtitle, content_text, 
          progress, func = null} = 
    props;

  return (
    <View style={[BOOK_STYLES.card, { backgroundColor: "#fff" }]}>
      <Text style={BOOK_STYLES.title}>{title}</Text>

      <Image source={imagePath} style={BOOK_STYLES.img} />

      <Text style={BOOK_STYLES.content_title}>{content_title}</Text>

      <ProgressBarAndroid
        styleAttr="Horizontal"
        indeterminate={false}
        progress={progress}
        style={BOOK_STYLES.progressBar}
      />

      <Text style={BOOK_STYLES.content_subtitle}>{content_subtitle}</Text>
      <Text style={BOOK_STYLES.content_text}>{content_text}</Text>

      <View style={BOOK_STYLES.button}>
        <Button 
          title="Seguir leyendo..." 

          // AGREGAR PARÁMETROS AAAAAAAAAAAAAAAAAAAAAA
          onPress={() =>  navigation.navigate("Lecture", { title })} 
          />
      </View>
    </View>
  );
}

export default Book;

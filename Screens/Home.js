import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import Book from "../Components/Book";
import BOOK_DATA from "../Data/Book-data";
import HOME_STYLES from "../Styles/Home";
import GENERAL_STYLES from "../Styles/GeneralStyles";

function Home({ navigation }) {

  return (
    <View style={GENERAL_STYLES.main_container}>
      <FlatList
        alwaysBounceVertical={true}
        data={BOOK_DATA} 
        renderItem={({ item }) =>
         {
          return(
          <View>
            <Book
              navigation={navigation}
              title={item.title}
              content_title={item.content_title}
              content_subtitle={item.content_subtitle}
              content_text={item.content_text}
              imagePath={item.imagePath}
              progress={item.progress}
              func={item.func}
            />
          </View>
        )}}
      />
    </View>
  );
}



export default Home;

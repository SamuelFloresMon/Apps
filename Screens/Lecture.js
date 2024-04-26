
import React from 'react';
import { View, Text } from 'react-native';

import BOOK_CONTENT from '../Data/Book-content';

function Lecture (props){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{BOOK_CONTENT.spanish.content}</Text>
    </View>
  );
};

export default Lecture;

import React from "react";
import { Text } from "react-native";

import LectureContent from '../Components/Lecture';

import LECTURE_STYLES from "../Styles/Lecture";
import BOOK_CONTENT from "../Data/Book-content";

function Lecture(props) {
  const { navigation, route } = props;
  const { title } = route.params;

  const contentLecture = [];
  const numOfRepetitions = 7;

  for (let i = 0; i < numOfRepetitions; i++) {
    contentLecture.push(
      <Text key={i} style={LECTURE_STYLES.text}>
        {BOOK_CONTENT.spanish.content}
      </Text> 
    );
  }

  // console.log(additionalParam);
  return (
    <LectureContent title={title}>
      {contentLecture}
    </LectureContent>
  );
}

export default Lecture;

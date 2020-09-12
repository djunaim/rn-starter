import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

const ImageDetail = ({imgSource, title, score}) => {
return (
  <View>
    <Image source={imgSource} />
    <Text>{title}</Text>
    <Text>Image score - {score}</Text>
  </View>
)
};

const styles = StyleSheet.create({});

export default ImageDetail;

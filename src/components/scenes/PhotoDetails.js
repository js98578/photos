import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

const PhotoDetails = (props) => {
  const {title, url} = props;
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Image style={styles.imageThumbnail} source={{uri: url}} />
    </View>
  );
};

export default PhotoDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});

import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

const PhotoDetailsContainer = (props) => {
  const {thumbnailUrl} = props;
  return (
    <View style={styles.container}>
      <Image style={styles.imageThumbnail} source={{uri: thumbnailUrl}} />
    </View>
  );
};

export default PhotoDetailsContainer;

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
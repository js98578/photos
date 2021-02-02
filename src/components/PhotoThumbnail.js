import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';

const PhotoThumbnail = (props) => {
  const {thumbnailUrl, onPress} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.imageThumbnail} source={{uri: thumbnailUrl}} />
      </TouchableOpacity>
    </View>
  );
};

export default PhotoThumbnail;

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

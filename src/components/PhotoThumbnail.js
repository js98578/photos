import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';

const PhotoThumbnail = (props) => {
  const {url, onPress, height} = props;
  const thumbnailStyle = StyleSheet.create({imageThumbnail: {height: height}});
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image style={thumbnailStyle.imageThumbnail} source={{uri: url}} />
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
});

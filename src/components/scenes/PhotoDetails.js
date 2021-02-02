import React from 'react';
import {StyleSheet, View, Image, Text, SafeAreaView} from 'react-native';

const PhotoDetails = (props) => {
  const {title, url} = props;
  return (
    <SafeAreaView style={styles.container}>
      <Text>{title}</Text>
      <Image style={styles.image} source={{uri: url}} />
    </SafeAreaView>
  );
};

export default PhotoDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
});

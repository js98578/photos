import React from 'react';
import {StyleSheet, View} from 'react-native';
import LoadingIndicator from './LoadingIndicator';

const PhotoGridListFooter = ({loadingMore}) => (
  <View style={styles.container}>
    {loadingMore && <LoadingIndicator size="small" />}
  </View>
);

export default PhotoGridListFooter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

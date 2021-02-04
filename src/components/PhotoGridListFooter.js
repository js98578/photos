import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {Colors} from '../styles';

const PhotoGridListFooter = ({loadingMore}) => (
  <View style={styles.container}>
    {loadingMore && <ActivityIndicator size="small" color={Colors.blue} />}
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

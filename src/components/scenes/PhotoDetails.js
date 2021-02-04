import React, {useState} from 'react';
import {StyleSheet, Image, Text, SafeAreaView} from 'react-native';
import LoadingIndicator from '../LoadingIndicator';

const PhotoDetails = (props) => {
  const {route} = props;
  const {title, url} = route.params;

  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text>{title}</Text>
      {loading && <LoadingIndicator size="small" />}
      <Image
        style={styles.image}
        source={{uri: url}}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
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

import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {Colors} from '../../styles';

const PhotoDetails = (props) => {
  const {route} = props;
  const {title, url} = route.params;

  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text>{title}</Text>
      {loading && (
        <ActivityIndicator size="small" color={Colors.loadingIndicator} />
      )}
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

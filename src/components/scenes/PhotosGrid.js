import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
  ActivityIndicator,
  View,
} from 'react-native';
import PhotoThumbnail from '../PhotoThumbnail';

const PhotosGrid = (props) => {
  const {photos, onPhotoThumbnailPress, loading} = props;

  if (loading) {
    return (
      <SafeAreaView style={styles.loading}>
        <ActivityIndicator size="large" color="blue" />
      </SafeAreaView>
    );
  }

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={photos}
          renderItem={({item}) => (
            <PhotoThumbnail
              onPress={() => onPhotoThumbnailPress(item.title, item.url)}
              thumbnailUrl={item.thumbnailUrl}
            />
          )}
          numColumns={3}
          keyExtractor={(item, index) => index}
        />
      </SafeAreaView>
    </>
  );
};

export default PhotosGrid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

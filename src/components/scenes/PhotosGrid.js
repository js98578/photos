import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, FlatList} from 'react-native';
import PhotoThumbnail from './PhotoThumbnail';

const PhotosGrid = (props) => {
  const {photos, onPhotoThumbnailPress} = props;

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={photos}
          renderItem={({item}) => (
            <PhotoThumbnail
              onPress={() => onPhotoThumbnailPress()}
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
});

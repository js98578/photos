import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {Colors} from '../../styles';
import PhotoThumbnail from '../PhotoThumbnail';

const PhotosGrid = (props) => {
  const {photos, onPhotoThumbnailPress, onListEnd, loading} = props;

  if (loading) {
    return (
      <SafeAreaView style={[styles.baseContainer, styles.loadingContainer]}>
        <ActivityIndicator size="large" color={Colors.loadingIndicator} />
      </SafeAreaView>
    );
  }

  return (
    <>
      <StatusBar />
      <SafeAreaView style={[styles.baseContainer, styles.container]}>
        <FlatList
          data={photos}
          renderItem={({item}) => (
            <PhotoThumbnail
              onPress={() => onPhotoThumbnailPress(item.title, item.url)}
              thumbnailUrl={item.thumbnailUrl}
            />
          )}
          numColumns={3}
          keyExtractor={(item) => item.id}
          onEndReachedThreshold={0.5}
          onEndReached={onListEnd}
        />
      </SafeAreaView>
    </>
  );
};

export default PhotosGrid;

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    backgroundColor: Colors.photoGridBackground,
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  loadingContainer: {
    alignContent: 'center',
  },
});

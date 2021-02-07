import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, FlatList} from 'react-native';
import {Colors} from '../../styles';
import LoadingIndicator from '../LoadingIndicator';
import PhotoThumbnail from '../PhotoThumbnail';
import PhotoGridListFooter from '../PhotoGridListFooter';
import {GridOptions} from '../../constants/grid';

const PhotosGrid = (props) => {
  const {
    photos,
    onPhotoThumbnailPress,
    onListEnd,
    loading,
    loadingMore,
    thumbnailHeight,
  } = props;

  if (loading) {
    return (
      <SafeAreaView style={[styles.baseContainer, styles.loadingContainer]}>
        <LoadingIndicator size="large" />
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
              url={item.thumbnailUrl}
              height={thumbnailHeight}
            />
          )}
          numColumns={GridOptions.NUM_OF_COLUMNS}
          keyExtractor={(item) => item.id}
          onEndReachedThreshold={0.5}
          onEndReached={onListEnd}
          extraData={[loadingMore, thumbnailHeight]}
          ListFooterComponent={
            <PhotoGridListFooter loadingMore={loadingMore} />
          }
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

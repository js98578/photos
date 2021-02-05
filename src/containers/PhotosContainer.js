import React, {useEffect} from 'react';
import {useWindowDimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import PhotosGrid from '../components/scenes/PhotosGrid';
import {GridOptions} from '../constants/grid';
import {divide} from '../utils';

const PhotosContainer = (props) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const {photos, loading, loadingMore} = useSelector((state) => state.photos);
  const requestPhotos = () => dispatch({type: 'PHOTOS_REQUESTED'});
  const requestMorePhotos = () => dispatch({type: 'MORE_PHOTOS_REQUESTED'});
  const windowWidth = useWindowDimensions().width;
  const thumbnailHeight = divide(windowWidth, GridOptions.NUM_OF_COLUMNS);

  useEffect(() => {
    requestPhotos();
  }, []);

  const onPhotoThumbnailPress = (title, url) => {
    navigation.navigate('Photo Details', {
      title,
      url,
    });
  };

  const onListEnd = () => {
    requestMorePhotos();
  };

  return (
    <PhotosGrid
      photos={photos}
      loading={loading}
      loadingMore={loadingMore}
      onPhotoThumbnailPress={onPhotoThumbnailPress}
      onListEnd={onListEnd}
      thumbnailHeight={thumbnailHeight}
    />
  );
};

export default PhotosContainer;

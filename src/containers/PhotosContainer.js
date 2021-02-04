import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PhotosGrid from '../components/scenes/PhotosGrid';

const PhotosContainer = (props) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const {photos, loading, loadingMore} = useSelector((state) => state.photos);
  const requestPhotos = () => dispatch({type: 'PHOTOS_REQUESTED'});
  const requestMorePhotos = () => dispatch({type: 'MORE_PHOTOS_REQUESTED'});

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
    />
  );
};

export default PhotosContainer;

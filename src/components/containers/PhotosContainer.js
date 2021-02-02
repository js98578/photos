import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PhotosGrid from '../scenes/PhotosGrid';

const PhotosContainer = (props) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const {photos, loading} = useSelector((state) => state.photos);

  useEffect(() => {
    dispatch({type: 'PHOTOS_REQUESTED'});
  }, []);

  const onPhotoThumbnailPress = (title, url) => {
    navigation.navigate('Photo Details', {
      title,
      url,
    });
  };

  return (
    <PhotosGrid
      photos={photos}
      loading={loading}
      onPhotoThumbnailPress={onPhotoThumbnailPress}
    />
  );
};

export default PhotosContainer;

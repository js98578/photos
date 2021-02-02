import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PhotosGrid from '../scenes/PhotosGrid';

const PhotosContainer = (props) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos.photos);

  useEffect(() => {
    dispatch({type: 'PHOTOS_REQUESTED'});
  }, []);

  const onPhotoThumbnailPress = (title, url) => {
    dispatch({type: 'SET_DETAILS_DATA', data: {title, url}});
    navigation.navigate('Photo Details');
  };

  return (
    <PhotosGrid
      navigation={navigation}
      photos={photos}
      dispatch={dispatch}
      onPhotoThumbnailPress={onPhotoThumbnailPress}
    />
  );
};

export default PhotosContainer;

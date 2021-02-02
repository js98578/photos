import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PhotosGrid from '../scenes/PhotosGrid';

const PhotosContainer = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos.photos);

  const onPhotoThumbnailPress = () => {

  };

  useEffect(() => {
    dispatch({type: 'PHOTOS_REQUESTED'});
  }, []);

  return <PhotosGrid photos={photos} />;
};

export default PhotosContainer;

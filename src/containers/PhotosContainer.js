import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import PhotosGrid from '../components/scenes/PhotosGrid';
import {useRequestPhotosDispatch, useThumbnailHeight} from '../hooks';

const PhotosContainer = (props) => {
  const {navigation} = props;
  const {photos, loading, loadingMore} = useSelector((state) => state.photos);
  const requestPhotos = useRequestPhotosDispatch(false);
  const requestMorePhotos = useRequestPhotosDispatch(true);
  const thumbnailHeight = useThumbnailHeight();

  useEffect(() => {
    requestPhotos();
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
      loadingMore={loadingMore}
      onPhotoThumbnailPress={onPhotoThumbnailPress}
      onListEnd={() => requestMorePhotos()}
      thumbnailHeight={thumbnailHeight}
    />
  );
};

export default PhotosContainer;

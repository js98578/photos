import React from 'react';
import { useSelector } from 'react-redux';
import PhotoDetails from '../scenes/PhotoDetails';

const PhotoDetailsContainer = (props) => {
  const {title, url} = useSelector((state) => state.details);
  return <PhotoDetails title={title} url={url} />;
};

export default PhotoDetailsContainer;
import {useWindowDimensions} from 'react-native';
import {useDispatch} from 'react-redux';
import {GridOptions} from './constants/grid';
import {divide} from './utils';

export const useRequestPhotosDispatch = (more = false) => {
  const dispatch = useDispatch();
  if (more) {
    return () => dispatch({type: 'MORE_PHOTOS_REQUESTED'});
  }
  return () => dispatch({type: 'PHOTOS_REQUESTED'});
};

export const useThumbnailHeight = () => {
  const windowWidth = useWindowDimensions().width;
  return divide(windowWidth, GridOptions.NUM_OF_COLUMNS);
};

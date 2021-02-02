import {apiUrl} from './constants';

export const getPhotos = () => {
  return fetch(apiUrl).then((response) => response.json());
};

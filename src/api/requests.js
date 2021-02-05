import {GridOptions} from '../constants/grid';
import {apiUrl} from './constants';

export const getPhotos = (page, itemsOnPage) => {
  return fetch(
    `${apiUrl}photos?_page=${page}&_limit=${itemsOnPage}`,
  ).then((response) => response.json());
};

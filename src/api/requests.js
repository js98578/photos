import {apiUrl, itemsOnPage} from './constants';

export const getPhotos = (page) => {
  return fetch(
    `${apiUrl}photos?_page=${page}&_limit=${itemsOnPage}`,
  ).then((response) => response.json());
};

const initialState = {};

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PHOTOS_START': {
      return {
        loading: true,
      };
    }
    case 'PHOTOS_LOADED': {
      return {
        loading: false,
        photos: action.data.photos,
      };
    }
    default: {
      return state;
    }
  }
};

export default photosReducer;

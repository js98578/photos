const initialState = {
  loading: false,
  page: 1,
  photos: [],
};

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PHOTOS_LOAD_START': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'PHOTOS_LOADED': {
      return {
        loading: false,
        photos: action.data.photos,
        page: action.data.page,
      };
    }
    case 'PHOTOS_LOAD_ERROR': {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default photosReducer;

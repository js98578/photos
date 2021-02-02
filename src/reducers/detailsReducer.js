const initialState = false;

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DETAILS_DATA': {
      return {
        title: action.data.title,
        url: action.data.url,
      };
    }
    default: {
      return state;
    }
  }
};

export default detailsReducer;

const initialState = false;

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ERROR': {
      return true;
    }
    case 'ERROR_DISMISSED': {
      return false;
    }
    default: {
      return state;
    }
  }
};

export default errorReducer;

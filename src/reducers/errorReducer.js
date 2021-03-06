const initialState = {
  isError: false,
  message: '',
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ERROR': {
      return {isError: true, message: action.data.message};
    }
    case 'ERROR_DISMISSED': {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default errorReducer;

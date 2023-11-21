import {
  POST_REQUEST,
  POST_REQUEST_ERROR,
  POST_REQUEST_SUCCESS
} from './postsAction';


const initialState = {
  loading: false,
  posts: [],
  error: '',
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case POST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.posts,
        error: ''
      };
    case POST_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};


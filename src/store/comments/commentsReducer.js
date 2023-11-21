import {
  COMMENTS_REQUEST,
  COMMENTS_REQUEST_ERROR,
  COMMENTS_REQUEST_SUCCESS,
  COMMENTS_UPDATE,
} from './commentsAction';

const initialState = {
  comment: 'Привет Redux',
  post: {},
  comments: [],
  status: '',
  error: '',
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_REQUEST:
      return {
        ...state,
        error: '',
        comments: [],
        status: 'loading',
      };
    case COMMENTS_REQUEST_SUCCESS:
      return {
        ...state,
        post: action.post,
        comments: action.comments,
        error: '',
        status: 'loaded',
      };
    case COMMENTS_UPDATE:
      return {
        ...state,
        comment: action.comment,
      };
    case COMMENTS_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        status: 'error',
      };
    default:
      return state;
  }
};

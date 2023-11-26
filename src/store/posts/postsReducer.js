import {
  CHANGE_PAGE,
  POST_REQUEST,
  POST_REQUEST_ERROR,
  POST_REQUEST_SUCCESS,
  POST_REQUEST_SUCCESS_AFTER
} from './postsAction';


const initialState = {
  loading: false,
  posts: [],
  error: '',
  after: '',
  isLast: false,
  countLoadPage: 0,
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
        error: '',
        after: action.after,
        isLast: !action.after,

      };
    case POST_REQUEST_SUCCESS_AFTER:
      return {
        ...state,
        loading: false,
        posts: [...state.posts, ...action.posts],
        error: '',
        after: action.after,
        isLast: !action.after,
        countLoadPage: action.countLoadPage,
      };
    case POST_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.page,
        after: '',
        isLast: false,
        countLoadPage: 0,
      };
    default:
      return state;
  }
};


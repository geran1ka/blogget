import {COMMENT_RESET, COMMENT_UPDATE} from './commentAction';

const initialState = {
  comment: ''
};

export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_UPDATE:
      return {
        ...state,
        comment: action.comment,
      };
    case COMMENT_RESET:
      return {
        ...state,
        comment: '',
      };
    default:
      return state;
  }
};

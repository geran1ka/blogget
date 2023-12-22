import {COMMENT_UPDATE} from './commentAction';

const initialState = {
  comment: 'Привет Redux',
};

export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_UPDATE:
      return {
        ...state,
        comment: action.comment,
      };
    default:
      return state;
  }
};

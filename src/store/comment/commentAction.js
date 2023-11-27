
export const COMMENT_UPDATE = 'COMMENT_UPDATE';
export const COMMENT_RESET = 'COMMENT_RESET';

export const commentUpdate = (comment) => ({
  type: COMMENT_UPDATE,
  comment,
});

export const commentReset = () => ({
  type: COMMENT_RESET,
});


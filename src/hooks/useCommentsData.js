import { useDispatch, useSelector } from "react-redux";
import { commentsRequestAsync } from "../store/comments/commentsAction";
import { useEffect } from "react";

export const useCommentsData = (id) => {
  const token = useSelector((state) => state.token.token);
  const comments = useSelector((state) => state.comments.comments);
  const status = useSelector((state) => state.comments.status);
  const post = useSelector((state) => state.comments.post);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commentsRequestAsync(id));
  }, [token, id]);

  return [post, comments, status];
};

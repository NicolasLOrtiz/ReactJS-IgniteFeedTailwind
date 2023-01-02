import React from "react";
import { Comment } from "./Comment";

interface CommentListProps {
  comments: string[];
  deleteComment: (commentToDelete: string) => void;
}

export const CommentList: React.FC<CommentListProps> = ({
  comments,
  deleteComment,
}) => (
  <div>
    {comments.map((comment) => (
      <Comment
        key={comment}
        content={comment}
        onDeleteComment={deleteComment}
      />
    ))}
  </div>
);

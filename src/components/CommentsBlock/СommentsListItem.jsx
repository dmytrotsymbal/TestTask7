import React from "react";

const CommentItem = ({ comment }) => {
  return (
    <li className="commentsListItem">
      <div
        className="colorSquere"
        style={{ backgroundColor: comment.color }}
      ></div>
      <h4>{comment.text}</h4>
    </li>
  );
};

export default CommentItem;

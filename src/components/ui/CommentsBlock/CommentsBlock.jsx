import { useState } from "react";
import CommentItem from "./СommentsListItem";
import "../../../styles/CommentsBlock.scss";

const CommentsBlock = ({ selectedItemId, items, setItems }) => {
  const [commentText, setCommentText] = useState("");
  const [color, setColor] = useState("#000000");

  const addComment = () => {
    if (commentText.trim().length && selectedItemId !== null) {
      const updatedItems = items.map((item) => {
        if (item.id === selectedItemId) {
          const newComment = {
            text: commentText,
            color: color,
          };
          return {
            ...item,
            comments: [...item.comments, newComment],
          };
        }
        return item;
      });
      setItems(updatedItems);
      setCommentText("");
    }
  };

  return (
    <div className="comments">
      <h2>Comments <span>#{selectedItemId}</span></h2>

      {selectedItemId !== null && (
        <ul className="commentsList">
          {items
            .find((item) => item.id === selectedItemId)
            ?.comments.map((comment, index) => (
              <CommentItem key={index} comment={comment} />
            ))}
        </ul>
      )}

      <label>
        <input
          className="colorInput"
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <textarea
          placeholder="Type comment here..."
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button onClick={addComment}>Add new</button>
      </label>
    </div>
  );
};
export default CommentsBlock;
